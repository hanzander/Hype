export const events = [
  {
    id: 'twice-this-is-for-manila',
    title: 'TWICE · “This Is For” Manila',
    tagline: 'A 360° stage experience that wrapped Philippine Arena in pink light.',
    category: 'Trending',
    tags: ['K-Pop', '360 Stage', 'Live Nation'],
    startTime: '2025-10-04T19:30:00+08:00',
    endTime: '2025-10-04T22:00:00+08:00',
    venue: 'Philippine Arena',
    city: 'Bulacan',
    address: 'Philippine Arena, Ciudad de Victoria, Bocaue, Bulacan',
    coordinates: {
      lat: 14.7991,
      lng: 120.9189
    },
    venueType: 'stadium',
    accessibility: true,
    description: 'TWICE’s “This Is For” world tour stop delivered a two-hour set packed with “Fancy,” “What Is Love?,” “Feel Special,” and new album cuts, all performed on a rotating 360-degree stage for ONCE PH.',
    heroColor: '#171339',
    heroAccent: '#ffb5e1',
    hypeScore: 97,
    cover: '/twice.jpg',
    organizer: {
      name: 'Live Nation Philippines',
      contact: 'info@livenation.ph'
    },
    metrics: {
      views: 6100,
      buyers: 2050,
      recency: 0.97,
    },
    tiers: [
      {
        id: 'twice-thisisfor-vip',
        name: 'VIP 360 Soundcheck',
        price: 16250,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['Soundcheck access', '360° floor pit', 'Pink lanyard set'],
        capacity: 450
      },
      {
        id: 'twice-thisisfor-lowerbox',
        name: 'Lower Box 360',
        price: 9800,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Lower box seating', 'LED wristband sync', 'Digital pass'],
        capacity: 2100
      },
      {
        id: 'twice-thisisfor-upperbox',
        name: 'Upper Box Premium',
        price: 5800,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Upper box seating', 'Souvenir laminate'],
        capacity: 4800
      }
    ],
  },
  {
    id: 'blackpink-deadline-manila',
    title: 'BLACKPINK WORLD TOUR <DEADLINE>',
    tagline: 'A cinematic, monochrome finale that just lit up Manila.',
    category: 'Fan Favorite',
    tags: ['K-Pop', 'Arena', 'Immersive'],
    startTime: '2025-11-20T20:00:00+08:00',
    endTime: '2025-11-20T23:30:00+08:00',
    venue: 'Philippine Arena',
    city: 'Bulacan',
    address: 'Philippine Arena, Ciudad de Victoria, Bocaue, Bulacan',
    coordinates: {
      lat: 14.7991,
      lng: 120.9189
    },
    venueType: 'stadium',
    accessibility: true,
    description: 'A limited-run <DEADLINE> stop with monochrome visuals, orchestral remixes, and a surprise final act for Filipino BLINKs.',
    heroColor: '#05020d',
    heroAccent: '#f4b2d6',
    hypeScore: 98,
    cover: '/blackpink.jpg',
    organizer: {
      name: 'YG Entertainment',
      contact: 'events@ygent.com'
    },
    metrics: {
      views: 6400,
      buyers: 2100,
      recency: 0.99,
    },
    tiers: [
      {
        id: 'blackpink-deadline-vip',
        name: 'VIP Deadline Pit',
        price: 18500,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['Soundcheck film session', 'Exclusive monochrome merch kit', 'Early entry'],
        capacity: 400
      },
      {
        id: 'blackpink-deadline-lowerbox',
        name: 'Lower Box Premiere',
        price: 9800,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Reserved seating', 'LED wristband sync', 'Digital keepsake pass'],
        capacity: 3500
      }
    ],
  },
  {
    id: 'tyla-we-wanna-party-manila',
    title: 'Tyla · We Wanna Party Asia in Manila',
    tagline: 'Grammy-winning amapiano energy takes over MOA Arena.',
    category: 'Trending',
    tags: ['Pop', 'Amapiano', 'Asia Tour'],
    startTime: '2025-12-03T20:00:00+08:00',
    endTime: '2025-12-03T23:00:00+08:00',
    venue: 'SM Mall of Asia Arena',
    city: 'Pasay',
    address: 'SM Mall of Asia Arena, JW Diokno Blvd, Pasay City',
    coordinates: {
      lat: 14.5352,
      lng: 120.9822
    },
    venueType: 'indoor',
    accessibility: true,
    description: 'Tyla’s first Manila show brings the “We Wanna Party” Asia tour to MOA Arena with a bass-heavy set built around “Water,” “ART,” and amapiano reworks of fan favorites.',
    heroColor: '#1d0f2a',
    heroAccent: '#ff9ed1',
    hypeScore: 89,
    cover: '/tyla.jpg',
    organizer: {
      name: 'Live Nation Philippines',
      contact: 'info@livenation.ph'
    },
    metrics: {
      views: 3200,
      buyers: 1200,
      recency: 0.85,
    },
    tiers: [
      {
        id: 'tyla-vip-soundcheck',
        name: 'VIP Dancefloor + Soundcheck',
        price: 14500,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['Preshow soundcheck party', 'Front dancefloor access', 'Exclusive tour laminate'],
        capacity: 350
      },
      {
        id: 'tyla-lower-box',
        name: 'Lower Box Groove',
        price: 8250,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Lower box seating', 'LED wristband', 'Digital zine'],
        capacity: 2500
      },
      {
        id: 'tyla-upper-box',
        name: 'Upper Box Vibes',
        price: 4200,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Upper box seating', 'Merch coupon'],
        capacity: 4800
      }
    ],
  },
  {
    id: 'day6-decade-manila',
    title: 'DAY6 10th Anniversary Tour <The DECADE>',
    tagline: 'A full-band celebration of a decade of DAY6 anthems.',
    category: 'Fan Favorite',
    tags: ['K-Band', 'Anniversary', 'Live'],
    startTime: '2025-12-14T19:00:00+08:00',
    endTime: '2025-12-14T22:00:00+08:00',
    venue: 'SM Mall of Asia Arena',
    city: 'Pasay',
    address: 'SM Mall of Asia Arena, JW Diokno Blvd, Pasay City',
    coordinates: {
      lat: 14.5352,
      lng: 120.9822
    },
    venueType: 'indoor',
    accessibility: true,
    description: 'DAY6 marks ten years with “The DECADE,” a Manila stop featuring orchestral intros, extended jams of “You Were Beautiful,” “Time of Our Life,” and fan-selected deep cuts.',
    heroColor: '#081424',
    heroAccent: '#6ad1ff',
    hypeScore: 85,
    cover: '/day6.jpg',
    organizer: {
      name: 'JYP Entertainment',
      contact: 'events@jyptheatre.com'
    },
    metrics: {
      views: 2700,
      buyers: 980,
      recency: 0.81,
    },
    tiers: [
      {
        id: 'day6-vip-soundcheck',
        name: 'VIP Soundcheck',
        price: 13500,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['Soundcheck entry', 'Hi-touch photo moment', 'Anniversary badge set'],
        capacity: 400
      },
      {
        id: 'day6-lower-box',
        name: 'Lower Box Anniversary',
        price: 7800,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Lower box seating', 'Collectible ticket', 'Digital photo book'],
        capacity: 2600
      },
      {
        id: 'day6-upper-box',
        name: 'Upper Box Celebration',
        price: 4200,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Upper box seating', 'LED wristband'],
        capacity: 5000
      }
    ],
  },
  {
    id: 'tech-workshop-2025',
    title: 'Web Development Masterclass 2025',
    tagline: 'Learn modern web technologies from industry experts.',
    category: 'Chill',
    tags: ['Workshop', 'Education', 'Tech'],
    startTime: '2025-03-10T09:00:00+08:00',
    endTime: '2025-03-10T17:00:00+08:00',
    venue: 'SMX Convention Center',
    city: 'Pasay',
    address: 'SMX Convention Center, SM Mall of Asia Complex, Pasay City',
    coordinates: {
      lat: 14.5316,
      lng: 120.9816
    },
    venueType: 'indoor',
    accessibility: true,
    description: 'A comprehensive workshop covering React, Node.js, and modern development practices. Includes hands-on coding sessions and networking opportunities.',
    heroColor: '#0a1929',
    heroAccent: '#61dafb',
    hypeScore: 68,
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Tech Community PH',
      contact: 'hello@techcommunity.ph'
    },
    metrics: {
      views: 1200,
      buyers: 350,
      recency: 0.65,
    },
    tiers: [
      {
        id: 'workshop-early',
        name: 'Early Bird',
        price: 2500,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['Full day access', 'Lunch included', 'Workshop materials'],
        capacity: 100
      },
      {
        id: 'workshop-regular',
        name: 'Regular',
        price: 3500,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Full day access', 'Workshop materials'],
        capacity: 200
      }
    ],
  },
  {
    id: 'jazz-night-makati',
    title: 'Smooth Jazz Night at The Peninsula',
    tagline: 'An intimate evening of jazz and cocktails.',
    category: 'Niche',
    tags: ['Jazz', 'Music', 'Nightlife'],
    startTime: '2025-02-28T20:00:00+08:00',
    endTime: '2025-02-28T23:00:00+08:00',
    venue: 'The Peninsula Manila',
    city: 'Makati',
    address: 'The Peninsula Manila, Corner of Ayala and Makati Avenues, Makati',
    coordinates: {
      lat: 14.5536,
      lng: 121.026
    },
    venueType: 'indoor',
    accessibility: true,
    description: 'Experience an elegant evening of smooth jazz performances featuring local and international artists. Includes welcome drinks and light refreshments.',
    heroColor: '#1a1a2e',
    heroAccent: '#f4a261',
    hypeScore: 72,
    cover: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Jazz Society Manila',
      contact: 'events@jazzsociety.ph'
    },
    metrics: {
      views: 850,
      buyers: 280,
      recency: 0.71,
    },
    tiers: [
      {
        id: 'jazz-standard',
        name: 'Standard',
        price: 3500,
        currency: 'PHP',
        availability: 'Available',
        perks: ['Event access', 'Welcome drink', 'Light refreshments'],
        capacity: 150
      },
      {
        id: 'jazz-vip',
        name: 'VIP',
        price: 6500,
        currency: 'PHP',
        availability: 'Limited',
        perks: ['VIP seating', 'Premium drinks', 'Meet & greet'],
        capacity: 30
      }
    ],
  }
]

export const getEventById = (id) => events.find(e => e.id === id)

export const filterEvents = (filters) => {
  let filtered = [...events]

  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(e => e.category === filters.category)
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(searchLower) ||
      e.description.toLowerCase().includes(searchLower) ||
      e.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }

  if (filters.date) {
    filtered = filtered.filter(e => {
      const eventDate = new Date(e.startTime).toISOString().split('T')[0]
      return eventDate === filters.date
    })
  }

  if (filters.location) {
    const locationLower = filters.location.toLowerCase()
    filtered = filtered.filter(e =>
      e.city.toLowerCase().includes(locationLower) ||
      e.venue.toLowerCase().includes(locationLower)
    )
  }

  return filtered
}

