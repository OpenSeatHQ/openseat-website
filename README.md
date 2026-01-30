# OpenSeat Website

A clean, responsive website for the OpenSeat ticketing app. This website promotes the app and directs users to download it from the app stores.

## 🎯 Overview

- **Product**: OpenSeat ticketing app
- **Website Domain**: openseat.cc
- **Purpose**: Inform visitors about the product and redirect them to download the app

## 📁 Project Structure

```
openseat-website/
├── index.html              # Main website file
├── assets/                 # Images and assets
│   └── images/
│       ├── openseat_logo.png
│       ├── seatgeek_logo.png
│       └── ticketmaster_logo.png
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
├── deploy.sh              # Automated deployment script
└── README.md              # This file
```

## ✨ Features

### ✅ Completed
- [x] **Homepage** with app name, logo, and tagline
- [x] **Download buttons** for iOS App Store and Google Play Store (placeholders)
- [x] **Social media links** for Instagram and Twitter (placeholders)
- [x] **Google Analytics** tracking integration
- [x] **Contact section** with email: contact@openseat.cc
- [x] **Responsive design** (mobile-first approach)
- [x] **Consistent styling** matching the OpenSeat app theme
- [x] **Modern animations** and smooth interactions
- [x] **SEO optimization** with proper meta tags

### 🎨 Design Features
- **Color Scheme**: Matches OpenSeat app theme (green palette)
- **Typography**: Inter font family for modern look
- **Animations**: Smooth fade-in effects and hover interactions
- **Mobile-First**: Fully responsive across all devices
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🚀 Quick Start

### Local Development
```bash
# Navigate to the website directory
cd /Users/clem/Developer/Projects/openseat-website

# Start local server (Python)
python3 -m http.server 8000

# Or using Node.js
npx serve .

# Visit http://localhost:8000
```

### Deployment
```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment script
./deploy.sh

# Or run specific deployment
./deploy.sh github    # GitHub Pages
./deploy.sh vercel    # Vercel
./deploy.sh local     # Local testing
```

## 🔧 Configuration

### Google Analytics
1. Create a Google Analytics account
2. Replace `GA_MEASUREMENT_ID` in `index.html` with your tracking ID
3. Format: `G-XXXXXXXXXX`

### App Store Links
When the app is published, update these links in `index.html`:
```html
<!-- App Store -->
<a href="https://apps.apple.com/us/app/openseat-tickets/id6753200939">

<!-- Google Play Store -->
<a href="https://play.google.com/store/apps/details?id=com.openseat.openseat_ticketing">
```

### Social Media Links
When accounts are created, update these links:
```html
<!-- Instagram -->
<a href="https://instagram.com/openseat">

<!-- Twitter -->
<a href="https://twitter.com/openseat">
```

## 📱 Features Section

The website includes 6 key feature cards highlighting:

1. **Aggregated Search** - Search across multiple ticketing platforms
2. **Modern Interface** - Clean, intuitive design
3. **Secure & Reliable** - Built with modern security practices
4. **Smart Notifications** - Price drops and exclusive deals
5. **Location-Based** - Discover events near you
6. **Personalized Experience** - Save favorites and get recommendations

## 🎨 Design System

### Colors
- **Primary Green**: `#548B54`
- **Light Green**: `#7FB069`
- **Dark Green**: `#2E5A2E`
- **Background**: `#FFFFFF`
- **Card Background**: `#F8F9FA`
- **Text Primary**: `#1A1A1A`
- **Text Secondary**: `#6C757D`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on mobile

## 📊 Analytics Tracking

The website tracks the following events:
- App Store button clicks
- Google Play Store button clicks
- Social media link clicks
- Email contact clicks

## 🔍 SEO Features

- Meta description for search engines
- Proper heading structure (H1, H2, H3)
- Alt text for images
- Semantic HTML elements
- Mobile-friendly design

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions
- **Font Awesome**: Icons
- **Google Fonts**: Inter typography
- **Google Analytics**: User tracking

## 📈 Performance

- **Lightweight**: Single HTML file with embedded CSS/JS
- **Fast Loading**: Optimized images and minimal dependencies
- **Mobile Optimized**: Responsive design with touch-friendly interactions
- **SEO Ready**: Proper meta tags and structure

## 🚀 Deployment Options

### Recommended: GitHub Pages (Free)
- Easy setup with Git
- Custom domain support
- Automatic HTTPS

### Alternative: Vercel (Free)
- Fast deployment
- Automatic previews
- Custom domain support

### Alternative: Netlify (Free)
- Drag-and-drop deployment
- Form handling
- Custom domain support

## 📞 Support

For questions or issues:
- **Email**: contact@openseat.cc
- **Documentation**: See `DEPLOYMENT_GUIDE.md` for detailed instructions

## 📝 License

© 2024 OpenSeat. All rights reserved.

---

**Note**: This is the main website for the OpenSeat ticketing app. All placeholder links (app stores, social media) will be updated when the app is published and social media accounts are created. 