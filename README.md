# Aditi Bailur - Personal Portfolio

A modern, elegant, and highly polished personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with soft gradients and glassmorphism effects
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Tasteful Framer Motion transitions and micro-interactions
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards configured
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation, and focus management
- **Performance Focused**: Optimized images, lazy loading, and efficient animations
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Sora, Nunito Sans (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with SEO configuration
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   ├── Card.tsx      # Card component with glassmorphism
│   │   └── SectionHeading.tsx # Section headers with animations
│   ├── sections/         # Page sections
│   │   ├── About.tsx     # About section with timeline
│   │   ├── Contact.tsx   # Contact section with interactive cards
│   │   ├── Hero.tsx      # Hero section with photo and tech stack
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Skills.tsx    # Skills grid
│   │   └── Testimonials.tsx # Testimonials carousel/grid
│   ├── Footer.tsx        # Footer component
│   └── Navbar.tsx        # Navigation with mobile drawer
├── lib/                  # Utility functions and configurations
│   ├── seo.ts           # SEO metadata configuration
│   └── utils.ts         # Common utility functions
├── public/              # Static assets
│   └── aditi.jpg        # Profile photo (placeholder)
├── tailwind.config.ts   # Tailwind configuration with custom theme
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the portfolio directory
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm (recommended)
   pnpm install
   ```

3. **Add your profile photo**
   - Replace `/public/aditi.jpg` with your actual profile photo
   - Recommended dimensions: 400x400px or higher (square aspect ratio)
   - Supported formats: JPG, PNG, WebP

4. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm (recommended)
   pnpm dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will auto-reload as you make changes

## 🎨 Customization

### Design Tokens

The design system is centralized in `tailwind.config.ts`:

```typescript
colors: {
  bg: '#F8FAFF',        // Background
  card: '#FFFFFF',      // Card backgrounds
  primary: '#6366F1',   // Primary brand color (indigo)
  secondary: '#0EA5E9', // Secondary color (sky blue)
  accent: '#A855F7',    // Accent color (violet)
  text: '#0F172A',      // Primary text
  muted: '#64748B',     // Muted text
}
```

### Content Updates

1. **Personal Information**: Update contact details in `components/sections/Contact.tsx`
2. **Experience**: Modify timeline in `components/sections/About.tsx`
3. **Skills**: Update skill categories in `components/sections/Skills.tsx`
4. **Projects**: Add/modify projects in `components/sections/Projects.tsx`
5. **Testimonials**: Update testimonials in `components/sections/Testimonials.tsx`

### SEO Configuration

Update SEO metadata in `lib/seo.ts`:
- Site name and description
- Keywords
- Social media links
- OpenGraph images

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip-to-content link
- Screen reader friendly
- Reduced motion support
- High contrast ratios

## 🚀 Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for non-critical content
- Efficient animations with Framer Motion
- CSS-in-JS with Tailwind for optimal bundle size
- Tree shaking and code splitting

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is created for Aditi Bailur's personal portfolio. Feel free to use it as inspiration for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project. If you find any bugs or have suggestions, please feel free to open an issue.

---

**Built with ❤️ using Next.js, TypeScript & Tailwind CSS**