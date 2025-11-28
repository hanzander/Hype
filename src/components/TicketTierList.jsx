import { useButtonAnimation } from '../hooks/useButtonAnimation'
import './TicketTierList.css'

function TicketTierList({ tiers, onPurchase }) {
  const handleButtonClick = useButtonAnimation()
  const getAvailabilityColor = (availability) => {
    const colors = {
      'Available': 'var(--success)',
      'Limited': 'var(--warning)',
      'Sold Out': 'var(--danger)'
    }
    return colors[availability] || 'var(--text-light)'
  }

  return (
    <div className="ticket-tier-list">
      {tiers.map(tier => (
        <div key={tier.id} className="ticket-tier">
          <div className="tier-header">
            <div>
              <h3 className="tier-name">{tier.name}</h3>
              <span 
                className="tier-availability"
                style={{ color: getAvailabilityColor(tier.availability) }}
              >
                {tier.availability}
              </span>
            </div>
            <div className="tier-price">
              <span className="tier-currency">{tier.currency}</span>
              <span className="tier-amount">{tier.price.toLocaleString()}</span>
            </div>
          </div>
          
          {tier.perks && tier.perks.length > 0 && (
            <ul className="tier-perks">
              {tier.perks.map((perk, index) => (
                <li key={index}>✓ {perk}</li>
              ))}
            </ul>
          )}
          
          <button
            className="btn btn-primary tier-purchase-btn"
            onClick={(e) => {
              handleButtonClick(e, () => onPurchase(tier.id))
            }}
            disabled={tier.availability === 'Sold Out'}
          >
            {tier.availability === 'Sold Out' ? 'Sold Out' : 'Select Tickets'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default TicketTierList

