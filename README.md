# FashionCraft - From Imagination to Fabrication

A luxury fashion design platform with advanced 2D/3D design studio, extensive materials library, and community features.

## Features

- 🎨 **Advanced Design Studio** - 2D Fabric.js + 3D Mannequin with realistic materials
- 🧵 **50+ Fabrics & Accessories** - Traditional Indian and international materials
- 👥 **Community** - Share, collaborate, and get inspired
- 🛍️ **Marketplace** - Buy and sell custom designs
- 🌍 **Localization** - Multi-currency, multi-language support
- 📱 **Responsive** - Works on desktop and mobile

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Set up database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Design Canvas**: Fabric.js for 2D, Three.js for 3D
- **UI Components**: Radix UI + Lucide Icons
- **Animations**: Framer Motion

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
├── lib/                # Utilities and configurations
├── styles/             # Global styles
public/
├── models/             # 3D model files
└── textures/           # Material texture files
```

## License

MIT License - see LICENSE file for details.
