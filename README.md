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

- All data is hardcoded (no backend)
- Tickets are stored in localStorage
- QR codes are generated client-side
- No real payment processing
- Check-in scanner uses manual entry for demo

