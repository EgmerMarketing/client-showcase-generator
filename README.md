# Client Showcase Generator

A premium Next.js application built for **Egmer Marketing** that generates instant before/after website comparisons for sales presentations.

## 🚀 Features

- **Instant Analysis**: Input any prospect's website URL and get immediate insights
- **Split-Screen Comparison**: Visual before/after mockup comparison
- **Issue Detection**: Automatically identifies common website problems:
  - Missing schema markup
  - WCAG compliance issues
  - Slow load speeds
  - Poor mobile optimization
  - Lack of local SEO
  - Outdated design
- **Solution Showcase**: Highlights what Egmer Marketing would build instead
- **Lead Generation**: Built-in contact form for prospect conversion
- **Sales-Ready**: Perfect for live demos during sales calls

## 🎨 Design

- **Dark Theme**: Egmer's signature dark aesthetic (#0a0a0a background)
- **Brand Colors**: 
  - Primary Blue: #00ADEE
  - Secondary Green: #8EE34D  
  - Accent Orange: #FFAA53
- **Premium UI**: Glass effects, subtle animations, and modern typography
- **Fully Responsive**: Optimized for all devices and screen sizes
- **No Emojis**: Clean, professional icon usage with Lucide React

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript** 
- **Tailwind CSS** (with custom Egmer theme)
- **Lucide React** (icons)
- **Modern CSS** (glass effects, gradients, animations)

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Usage

### For Sales Teams
1. Open the application
2. Enter prospect's website URL
3. Click "Generate Showcase"
4. Present the before/after comparison
5. Highlight issues found and Egmer's solutions
6. Use the contact form to capture lead information

### URL Format
- `example.com` ✅
- `https://example.com` ✅
- `www.example.com` ✅

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Egmer brand styling
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Landing page with URL input
│   └── showcase/
│       └── page.tsx        # Comparison showcase page
├── public/                  # Static assets
├── DEPLOYMENT.md           # Deployment instructions
└── README.md
```

## 🎯 Sales Impact

This tool is designed to:
- **Wow prospects** with instant visual comparisons
- **Identify pain points** in their current website
- **Demonstrate value** of Egmer's solutions
- **Capture leads** with integrated contact form
- **Close more deals** with compelling presentations

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for Vercel, Netlify, and other platforms.

## 🔧 Customization

### Adding New Issues
Edit the `issues` array in `app/showcase/page.tsx` to add new website problems.

### Adding New Features  
Edit the `features` array in `app/showcase/page.tsx` to highlight additional Egmer solutions.

### Brand Updates
Update colors and styling in `app/globals.css` and the CSS custom properties.

## 📞 Support

Built for Egmer Marketing sales team. For technical support or feature requests, contact the development team.

---

**Built with ❤️ for Egmer Marketing's success**