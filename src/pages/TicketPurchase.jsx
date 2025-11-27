import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { getEventById } from '../data/events'
import { purchaseTickets } from '../services/ticketService'
import { formatDate, formatTime } from '../utils'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import { animateButtonPop } from '../utils/animations'
import './TicketPurchase.css'

function TicketPurchase() {
  const { eventId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [selectedTier, setSelectedTier] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const handleButtonClick = useButtonAnimation()

  useEffect(() => {
    const eventData = getEventById(eventId)
    if (!eventData) {
      navigate('/')
      return
    }
    setEvent(eventData)
    
    const tierId = searchParams.get('tier')
    if (tierId) {
      const tier = eventData.tiers.find(t => t.id === tierId)
      if (tier) {
        setSelectedTier(tier)
      }
    }
  }, [eventId, searchParams, navigate])

  const handlePurchase = async () => {
    if (!selectedTier) {
      setError('Please select a ticket tier')
      return
    }

    if (selectedTier.availability === 'Sold Out') {
      setError('This ticket tier is sold out')
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const tickets = await purchaseTickets(eventId, selectedTier.id, quantity)
      
      // Redirect to first ticket
      if (tickets.length > 0) {
        navigate(`/ticket/${tickets[0].id}`)
      }
    } catch (err) {
      setError(err.message || 'Failed to purchase tickets')
      setLoading(false)
    }
  }

  if (!event) {
    return <div className="loading">Loading...</div>
  }

  const totalPrice = selectedTier ? selectedTier.price * quantity : 0

  return (
    <div className="ticket-purchase">
      <div className="container">
        <button onClick={(e) => {
          handleButtonClick(e, () => navigate(-1))
        }} className="back-button">
          ← Back
        </button>

        <div className="purchase-content">
          <div className="purchase-main">
            <h1>Purchase Tickets</h1>
            
            <div className="event-summary">
              <h2>{event.title}</h2>
              <p>{formatDate(event.startTime)} at {formatTime(event.startTime)}</p>
              <p>{event.venue}, {event.city}</p>
            </div>

            <div className="tier-selection">
              <h3>Select Ticket Type</h3>
              {event.tiers.map(tier => (
                <div
                  key={tier.id}
                  className={`tier-option ${selectedTier?.id === tier.id ? 'selected' : ''} ${tier.availability === 'Sold Out' ? 'sold-out' : ''}`}
                  onClick={(e) => {
                    if (tier.availability !== 'Sold Out') {
                      animateButtonPop(e.currentTarget)
                      setSelectedTier(tier)
                    }
                  }}
                >
                  <div className="tier-option-header">
                    <div>
                      <h4>{tier.name}</h4>
                      <span className={`availability-badge ${tier.availability.toLowerCase().replace(' ', '-')}`}>
                        {tier.availability}
                      </span>
                    </div>
                    <div className="tier-price">
                      <span className="currency">{tier.currency}</span>
                      <span className="amount">{tier.price.toLocaleString()}</span>
                    </div>
                  </div>
                  {tier.perks && tier.perks.length > 0 && (
                    <ul className="tier-perks">
                      {tier.perks.map((perk, idx) => (
                        <li key={idx}>✓ {perk}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {selectedTier && selectedTier.availability !== 'Sold Out' && (
              <div className="quantity-selection">
                <label>Quantity</label>
                <div className="quantity-controls">
                  <button
                    onClick={(e) => {
                      handleButtonClick(e, () => setQuantity(Math.max(1, quantity - 1)))
                    }}
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={(e) => {
                      handleButtonClick(e, () => setQuantity(quantity + 1))
                    }}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="purchase-sidebar">
            <div className="order-summary">
              <h3>Order Summary</h3>
              {selectedTier ? (
                <>
                  <div className="summary-row">
                    <span>{selectedTier.name} × {quantity}</span>
                    <span>{selectedTier.currency} {(selectedTier.price * quantity).toLocaleString()}</span>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>{selectedTier.currency} {totalPrice.toLocaleString()}</span>
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <button
                    className="btn btn-primary purchase-button"
                    onClick={(e) => {
                      handleButtonClick(e, handlePurchase)
                    }}
                    disabled={loading || !selectedTier}
                  >
                    {loading ? 'Processing...' : 'Complete Purchase'}
                  </button>
                  <p className="payment-note">
                    * This is a prototype. No actual payment will be processed.
                  </p>
                </>
              ) : (
                <p className="select-tier-note">Please select a ticket tier</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketPurchase

