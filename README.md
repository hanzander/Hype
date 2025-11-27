# Event Catalogue

A modern event discovery and ticketing platform prototype built for HackLaren hackathon.

## Features

### Core Features
- **Event Browsing**: Browse upcoming events with beautiful cards
- **Search & Filter**: Filter by category, date, location, and search terms
- **Event Details**: Comprehensive event pages with all information
- **Ticket Purchase**: Secure ticket purchase flow (prototype - no real payment)
- **Digital Passes**: QR code tickets with download and calendar integration
- **Check-In Scanner**: QR code scanner for event organizers
- **My Tickets**: View all purchased tickets in one place

### Additional Features
- **Hype Score System**: Shows event popularity based on views, buyers, and recency
- **Countdown Timer**: Real-time countdown to event start
- **Event Maps**: Interactive maps with Google Maps integration
- **Favorites**: Save favorite events
- **Responsive Design**: Works on desktop and mobile

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **QR Codes**: qrcode library
- **Maps**: Leaflet + React Leaflet
- **Storage**: localStorage (prototype)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

## Project Structure

```
event-catalogue/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── data/          # Hardcoded event data
│   ├── services/      # Service utilities (tickets, etc.)
│   └── utils.js       # Helper functions
├── server/            # (Not used in prototype)
└── package.json
```

## Prototype Notes

This is a **prototype** for hackathon demonstration:
- All data is hardcoded (no backend)
- Tickets are stored in localStorage
- QR codes are generated client-side
- No real payment processing
- Check-in scanner uses manual entry for demo

## Features Demonstrated

✅ Event browsing with categories (Trending, Fan Favorite, Chill, Niche)
✅ Search and filter functionality
✅ Beautiful event detail pages
✅ Ticket purchase flow
✅ QR code ticket generation
✅ Digital pass display with download
✅ Check-in scanner interface
✅ Hype score calculation
✅ Countdown timers
✅ Interactive maps
✅ Favorites system
✅ Responsive design

## Team

Team Friendship / HackLaren

