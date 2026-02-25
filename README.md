# 💰 CoinPulse — Real-Time Cryptocurrency Tracker

CoinPulse is a sleek, modern cryptocurrency tracking dashboard built with **Next.js 16**, **React 19**, and the **CoinGecko API**. Stay on top of the crypto market with real-time price data, interactive candlestick charts, trending coins, and category breakdowns — all in a beautiful dark-themed UI.

## 📸 Showcase

![CoinPulse Dashboard](./showcase/Screenshot%202026-02-25%20133520.png)

## ✨ Features

- **Live Coin Overview** — View current prices, 24h change percentages, and sparkline charts for top cryptocurrencies.
- **Trending Coins** — See what's trending across the crypto market in real time.
- **Category Browser** — Explore coins grouped by categories like DeFi, NFTs, Gaming, and more.
- **Interactive Candlestick Charts** — Powered by [Lightweight Charts](https://github.com/nicehash/lightweight-charts), with multiple time periods (1D, 1W, 1M, 3M, 6M, 1Y, Max).
- **Coin Detail Pages** — Deep-dive into individual coins with price history and market data.
- **Responsive Dark UI** — A premium dark-themed interface with smooth interactions.

## 🛠️ Tech Stack

| Technology             | Purpose                            |
| ---------------------- | ---------------------------------- |
| **Next.js 16**         | App Router, SSR, Server Components |
| **React 19**           | UI rendering                       |
| **TypeScript**         | Type safety                        |
| **Tailwind CSS 4**     | Styling                            |
| **Lightweight Charts** | Candlestick & price charts         |
| **Lucide React**       | Icons                              |
| **CoinGecko API**      | Cryptocurrency market data         |

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- A [CoinGecko API](https://www.coingecko.com/en/api) key

### Installation

```bash
# Clone the repository
git clone https://github.com/Sagarchauhan-web/coinprofit.git
cd coinprofit

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with your CoinGecko API key

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
coinpulse/
├── app/                  # Next.js App Router pages
│   ├── coins/            # Coin detail pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── home/             # Home page sections (CoinOverview, TrendingCoins, Categories)
│   ├── ui/               # Reusable UI components
│   ├── CandlestickChart  # Interactive chart component
│   ├── DataTable          # Generic data table
│   └── Header            # Navigation header
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & API helpers
├── constants.ts          # Chart & app configuration
├── type.d.ts             # TypeScript type definitions
└── showcase/             # Project screenshots
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
