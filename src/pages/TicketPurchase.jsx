import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { getEventById } from '../data/events'
import { purchaseTickets } from '../services/ticketService'
import { formatDate, formatTime } from '../utils'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import { animateButtonPop } from '../utils/animations'
import { FaCheckCircle, FaCreditCard, FaLock, FaSpinner } from 'react-icons/fa'
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
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  const [purchasedTickets, setPurchasedTickets] = useState(null)
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

  const handlePurchaseClick = () => {
    if (!selectedTier) {
      setError('Please select a ticket tier')
      return
    }

    if (selectedTier.availability === 'Sold Out') {
      setError('This ticket tier is sold out')
      return
    }

    setError(null)
    setShowConfirmation(true)
  }

  const handleConfirmPurchase = async () => {
    try {
      setShowConfirmation(false)
      setProcessing(true)
      setProcessingStep(1)
      setError(null)
      
      // Simulate payment processing with steps
      await new Promise(resolve => setTimeout(resolve, 800))
      setProcessingStep(2)
      await new Promise(resolve => setTimeout(resolve, 800))
      setProcessingStep(3)
      await new Promise(resolve => setTimeout(resolve, 600))
      
      const tickets = await purchaseTickets(eventId, selectedTier.id, quantity)
      setPurchasedTickets(tickets)
      setProcessing(false)
      setProcessingStep(0)
      setPurchaseComplete(true)
      
      // Auto-redirect after showing success
      setTimeout(() => {
        if (tickets.length > 0) {
          navigate(`/ticket/${tickets[0].id}`)
        }
      }, 3500)
    } catch (err) {
      setError(err.message || 'Failed to purchase tickets')
      setProcessing(false)
      setProcessingStep(0)
      setShowConfirmation(false)
    }
  }

  const handleCancelConfirmation = () => {
    setShowConfirmation(false)
  }

  if (!event) {
    return <div className="loading">Loading...</div>
  }

  const totalPrice = selectedTier ? selectedTier.price * quantity : 0

  // Processing overlay
  if (processing) {
    return (
      <div className="ticket-purchase">
        <div className="processing-overlay">
          <div className="processing-content">
            <div className="processing-icon">
              <FaSpinner className="spinning" />
            </div>
            <h2>Processing Your Order</h2>
            <p>Please wait while we secure your tickets...</p>
            <div className="processing-steps">
              <div className={`processing-step ${processingStep >= 1 ? 'active' : ''}`}>
                <span className="step-icon">1</span>
                <span>Validating payment</span>
              </div>
              <div className={`processing-step ${processingStep >= 2 ? 'active' : ''}`}>
                <span className="step-icon">2</span>
                <span>Generating tickets</span>
              </div>
              <div className={`processing-step ${processingStep >= 3 ? 'active' : ''}`}>
                <span className="step-icon">3</span>
                <span>Finalizing order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Success screen
  if (purchaseComplete && purchasedTickets) {
    return (
      <div className="ticket-purchase">
        <div className="purchase-success">
          <div className="success-content">
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h1>Purchase Confirmed!</h1>
            <p className="success-subtitle">Your tickets have been secured</p>
            
            <div className="receipt-card">
              <div className="receipt-header">
                <h3>Order Confirmation</h3>
                <span className="receipt-number">#{purchasedTickets[0].id.slice(-8)}</span>
              </div>
              
              <div className="receipt-details">
                <div className="receipt-row">
                  <span>Event</span>
                  <span>{event.title}</span>
                </div>
                <div className="receipt-row">
                  <span>Date & Time</span>
                  <span>{formatDate(event.startTime)} at {formatTime(event.startTime)}</span>
                </div>
                <div className="receipt-row">
                  <span>Venue</span>
                  <span>{event.venue}</span>
                </div>
                <div className="receipt-row">
                  <span>Ticket Type</span>
                  <span>{selectedTier.name}</span>
                </div>
                <div className="receipt-row">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>
                <div className="receipt-divider"></div>
                <div className="receipt-row receipt-total">
                  <span>Total Paid</span>
                  <span>{selectedTier.currency} {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="receipt-footer">
                <p className="receipt-note">
                  <FaLock /> Your tickets are secure and ready to use
                </p>
                <p className="receipt-date">
                  Purchased on {new Date().toLocaleString()}
                </p>
              </div>
            </div>

            <div className="success-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (purchasedTickets.length > 0) {
                    navigate(`/ticket/${purchasedTickets[0].id}`)
                  }
                }}
              >
                View My Tickets
              </button>
              <p className="redirect-note">Redirecting to your tickets...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                      handleButtonClick(e, handlePurchaseClick)
                    }}
                    disabled={loading || !selectedTier}
                  >
                    <FaCreditCard /> Complete Purchase
                  </button>
                  <p className="payment-note">
                    <FaLock /> Secure checkout • No payment required (prototype)
                  </p>
                </>
              ) : (
                <p className="select-tier-note">Please select a ticket tier</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="confirmation-overlay" onClick={handleCancelConfirmation}>
          <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirmation-header">
              <h2>Confirm Purchase</h2>
              <button className="close-button" onClick={handleCancelConfirmation}>×</button>
            </div>
            
            <div className="confirmation-content">
              <div className="confirmation-summary">
                <div className="confirmation-event">
                  <h3>{event.title}</h3>
                  <p>{formatDate(event.startTime)} at {formatTime(event.startTime)}</p>
                  <p>{event.venue}, {event.city}</p>
                </div>
                
                <div className="confirmation-tickets">
                  <div className="confirmation-ticket-item">
                    <div>
                      <strong>{selectedTier.name}</strong>
                      <span className="ticket-quantity">× {quantity}</span>
                    </div>
                    <span className="ticket-price">{selectedTier.currency} {(selectedTier.price * quantity).toLocaleString()}</span>
                  </div>
                </div>

                <div className="confirmation-total">
                  <span>Total</span>
                  <span>{selectedTier.currency} {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="confirmation-actions">
                <button
                  className="btn btn-secondary"
                  onClick={handleCancelConfirmation}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    handleButtonClick(e, handleConfirmPurchase)
                  }}
                >
                  <FaLock /> Confirm & Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketPurchase

