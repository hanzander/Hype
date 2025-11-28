import { useState, useEffect, useRef } from 'react'
import { events, filterEvents } from '../data/events'
import EventCard from '../components/EventCard'
import SearchFilters from '../components/SearchFilters'
import SkeletonLoader from '../components/SkeletonLoader'
import { animateStagger, animateFadeIn } from '../utils/animations'
import './Home.css'

function Home({ favorites, toggleFavorite }) {
  const [filteredEvents, setFilteredEvents] = useState(events)
  const [isLoading, setIsLoading] = useState(true)
  const eventsGridRef = useRef(null)
  const heroRef = useRef(null)
  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
    date: '',
    location: ''
  })

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    // Animate hero on mount
    if (heroRef.current) {
      setTimeout(() => animateFadeIn(heroRef.current, 0), 100)
    }
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const filtered = filterEvents(filters)
    setFilteredEvents(filtered)
    
    // Animate cards with stagger
    if (eventsGridRef.current) {
      setTimeout(() => {
        const cards = eventsGridRef.current.querySelectorAll('.event-card')
        if (cards.length > 0) {
          animateStagger(cards, 0.05)
        }
      }, 200)
    }
    
    // Track views for hype score (simulate)
    filtered.forEach(event => {
      // In a real app, this would be an API call
      // For prototype, we'll just update locally
    })
  }, [filters])

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <div className="home">
      <div className="hero-section" ref={heroRef}>
        <div className="container">
          <h1 className="hero-title">Discover Amazing Events</h1>
          <p className="hero-subtitle">
            Curated experiences, exclusive access, unforgettable moments. Your next adventure starts here.
          </p>
        </div>
      </div>

      <div className="container">
        <SearchFilters filters={filters} onFilterChange={handleFilterChange} />
        
        {isLoading ? (
          <div className="events-grid" ref={eventsGridRef}>
            <SkeletonLoader type="event-card" count={3} />
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3 className="empty-state-title">No events found</h3>
            <p className="empty-state-message">
              Try adjusting your search filters or check back later for new events.
            </p>
          </div>
        ) : (
          <div className="events-grid" ref={eventsGridRef}>
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isFavorite={favorites.includes(event.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
