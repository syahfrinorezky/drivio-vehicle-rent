# 🚗 Drivio - Vehicle Rental Platform

**Drivio** is a modern vehicle rental platform that allows users to rent cars and motorcycles with ease. Built with cutting-edge web technologies for a seamless rental experience.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.16.2-2D3748?style=for-the-badge&logo=prisma)

## ✨ Features

- 🚗 **Car Rental** - Wide selection of cars for various needs
- 🏍️ **Motorcycle Rental** - Two-wheeler options for urban mobility
- 👤 **User Authentication** - Secure login/register system
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Clean and intuitive interface
- 📊 **Dashboard** - Manage bookings and rental history
- 🔒 **Secure Payments** - Safe and encrypted payment processing
- 📧 **Email Notifications** - Automated booking confirmations

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Prisma ORM
- **Authentication:** JWT + bcryptjs
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React & React Icons
- **Email:** Nodemailer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- Database (PostgreSQL/MySQL recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drivio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your database URL, JWT secret, and other required variables.

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
drivio/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                    # Utility functions and configurations
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
└── styles/                 # Global styles
```

## 🎨 Key Components

- **Vehicle Listings** - Browse available cars and motorcycles
- **Booking System** - Easy reservation process
- **User Dashboard** - Manage bookings and profile
- **Admin Panel** - Vehicle and booking management
- **Payment Integration** - Secure payment processing
- **Responsive Navigation** - Mobile-friendly navigation

## 📝 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Database Schema

The project uses Prisma ORM with the following main entities:
- Users (customers and admins)
- Vehicles (cars and motorcycles)
- Bookings/Reservations
- Payments
- Reviews/Ratings

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Other Platforms

The app can be deployed on any platform that supports Node.js:
- Railway
- Netlify
- DigitalOcean
- AWS
- Google Cloud Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rino Rezky**

---

⭐ Star this repository if you find it helpful!
