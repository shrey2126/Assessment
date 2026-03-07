# 🎨 Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, dynamic galleries, and an elegant design aesthetic.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Development](#-development)
- [Build](#-build)
- [Deployment](#-deployment-to-vercel)
- [Project Structure](#-project-structure)
- [Scripts](#-available-scripts)
- [Browser Support](#-browser-support)

---

## ✨ Features

- 🎭 **Smooth Animations** - Scroll-triggered reveals and hover effects
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean, professional aesthetic with olive green theme
- 🖼️ **Dynamic Galleries** - Infinite scrolling and curved carousel animations
- 🔍 **Lightbox Modal** - Full-screen media viewer for images and GIFs
- ⚡ **Performance Optimized** - Lazy loading, efficient rendering
- ♿ **Accessible** - Semantic HTML and keyboard navigation
- 🎯 **Reusable Components** - 19+ modular, customizable components

---

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - UI library
- **React Router DOM 7.13.1** - Client-side routing
- **Vite 7.3.1** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.8** - CSS processing
- **Autoprefixer 10.4.27** - CSS vendor prefixing

### Animation
- **Framer Motion 12.35.0** - Advanced animations
- **Custom CSS Animations** - Keyframe animations

### Development
- **ESLint 9.39.1** - Code linting
- **Vite Plugin React 5.1.1** - Fast refresh

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for cloning the repository)

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/YOUR_USERNAME/portfolio-website.git

# OR clone via SSH
git clone git@github.com:YOUR_USERNAME/portfolio-website.git

# Navigate to project directory
cd portfolio-website
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

This will install all dependencies listed in `package.json`.

---

## 💻 Development

### Start Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev

# OR using pnpm
pnpm dev
```

The development server will start at:
```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Development Features
- ⚡ **Hot Module Replacement (HMR)** - Instant updates without page reload
- 🔍 **Source Maps** - Easy debugging
- 📝 **ESLint Integration** - Real-time code quality checks

---

## 🏗️ Build

### Create Production Build

```bash
# Using npm
npm run build

# OR using yarn
yarn build

# OR using pnpm
pnpm build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
# Using npm
npm run preview

# OR using yarn
yarn preview

# OR using pnpm
pnpm preview
```

Preview the production build locally at [http://localhost:4173](http://localhost:4173)

### Build Output
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── index.html
```

---

## 🌐 Deployment to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI

```bash
# Install globally
npm install -g vercel

# OR using yarn
yarn global add vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

#### Step 3: Deploy

```bash
# Navigate to project directory
cd portfolio-website

# Deploy to production
vercel --prod

# OR deploy to preview
vercel
```

The CLI will guide you through:
1. Set up and deploy
2. Link to existing project or create new
3. Configure project settings
4. Deploy

Your site will be live at: `https://your-project-name.vercel.app`

---

### Method 2: Deploy via Vercel Dashboard

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click **"Deploy"**

#### Step 3: Configure Domain (Optional)

1. Go to your project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

---

### Method 3: Deploy via Git Integration

#### Step 1: Connect Repository

```bash
# Ensure your code is pushed to GitHub
git push origin main
```

#### Step 2: Auto-Deploy Setup

1. In Vercel dashboard, go to your project
2. Navigate to **Settings** → **Git**
3. Enable **Automatic Deployments**

Now every push to `main` branch will trigger automatic deployment!

---

### Vercel Configuration (Optional)

Create `vercel.json` in project root for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images, icons
│   │   └── react.svg
│   ├── components/        # Reusable components (19 files)
│   │   ├── Button.jsx
│   │   ├── Reveal.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── constants/         # App constants
│   │   └── index.js
│   ├── data/             # Static data
│   │   ├── projects.js
│   │   └── products.js
│   ├── hooks/            # Custom React hooks
│   │   ├── useCountUp.js
│   │   └── useScrollProgress.js
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Works.jsx
│   │   ├── WorksProducts.jsx
│   │   ├── WorkDetail.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .gitignore
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Create production build in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

### Mobile Browsers
- ✅ iOS Safari (latest)
- ✅ Chrome Mobile (latest)
- ✅ Firefox Mobile (latest)

---

## 🎯 Environment Variables

This project doesn't require environment variables by default. If you need to add any:

1. Create `.env` file in root:
```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Portfolio
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to `.gitignore`:
```
.env
.env.local
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Vercel Deployment Issues

```bash
# Check build locally first
npm run build
npm run preview

# Verify all dependencies are in package.json
npm install --save-dev @vitejs/plugin-react

# Check Vercel logs
vercel logs
```

---

## 📝 Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### 2. Make Changes
```bash
# Edit files
# Test locally with npm run dev
```

### 3. Commit Changes
```bash
git add .
git commit -m "Add new feature"
```

### 4. Push to GitHub
```bash
git push origin feature/new-feature
```

### 5. Deploy to Vercel
```bash
# Automatic if Git integration is enabled
# OR manually
vercel --prod
```

---

## 🔧 Customization

### Change Color Theme

Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-olive': '#89A84A',  // Change this
  'primary-black': '#0B1100',
  // ...
}
```

### Add New Page

1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

### Modify Animations

Edit `src/index.css` to customize keyframe animations.

---

## 📚 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed architecture
- [ASSESSMENT_REPORT.md](./ASSESSMENT_REPORT.md) - Code quality analysis
- [PRE_SUBMISSION_CHECKLIST.md](./PRE_SUBMISSION_CHECKLIST.md) - Verification checklist

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your Name](https://linkedin.com/in/YOUR_PROFILE)
- Portfolio: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vercel for seamless deployment
- Unsplash for placeholder images

---

## 📞 Support

If you have any questions or need help:

1. Check [Troubleshooting](#-troubleshooting) section
2. Open an [Issue](https://github.com/YOUR_USERNAME/portfolio-website/issues)
3. Contact via email: your.email@example.com

---

## 🚀 Quick Start Summary

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm install -g vercel
vercel login
vercel --prod
```

---

**Made with ❤️ using React + Vite + Tailwind CSS**

**Live Demo:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

*Last Updated: March 7, 2026*
