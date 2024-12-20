# Happy2Assist Frontend

Een Next.js applicatie die ondernemers helpt met AI-oplossingen.

## 🚀 Features

- Meertalige ondersteuning (NL/EN)
- Responsive design
- Moderne UI met animaties
- Waitlist formulier
- Dark mode support

## 🛠 Technische Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animaties:** Framer Motion
- **Taal:** TypeScript
- **State Management:** React Hooks
- **API:** REST API met Django backend

## 📋 Vereisten

- Node.js 18.17 of hoger
- npm of yarn
- Een actieve backend server (zie backend repository)

## 🔧 Installatie

1. Clone de repository:
bash
git clone https://github.com/jouw-username/happy2assist-frontend.git
cd happy2assist-frontend


2. Installeer dependencies:

bash
npm install
of
yarn install


3. Maak de benodigde .env bestanden aan:

`.env.local` voor development:
bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_API_WAITLIST=/api/waitlist

.env.production` voor productie:

4. Start de development server:
bash
npm run dev
of
yarn dev


## 📁 Project Structuur

frontend/
├── app/ # Next.js app directory
│ ├── [lang]/ # Taal-specifieke routes
│ └── layout.tsx # Root layout
├── components/ # React componenten
├── lib/ # Utilities en helpers
├── public/ # Statische bestanden
│ └── images/ # Afbeeldingen
└── dictionaries/ # Taal bestanden


## 🌐 Meertaligheid

De applicatie ondersteunt meerdere talen via de `[lang]` directory. Taalbestanden zijn te vinden in de `dictionaries` map:

- `nl.json` - Nederlands
- `en.json` - Engels

## 🔒 Environment Variables

De applicatie gebruikt verschillende environment variables:

- `NEXT_PUBLIC_BASE_URL`: De basis URL van de frontend
- `NEXT_PUBLIC_API_URL`: De basis URL van de backend API
- `NEXT_PUBLIC_API_WAITLIST`: Het endpoint voor de waitlist

## 📱 Responsive Design

De applicatie is volledig responsive en geoptimaliseerd voor:
- Desktop (1024px en groter)
- Tablet (768px - 1023px)
- Mobiel (tot 767px)

## 🚀 Deployment

1. Bouw de applicatie:
bash
npm run build
# of
yarn build

2. Start de productie server:
bash
npm run start
# of
yarn start


## 🤝 Contributing

1. Fork de repository
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request


## 📝 License

Dit project is gelicenseerd onder de MIT License.


## 👥 Team

- Jackie - Lead Developer

## 📧 Contact

Voor vragen of ondersteuning, neem contact op via:
- Email: jackie@happy2change.be
- Website: [https://happy2assist.com]

