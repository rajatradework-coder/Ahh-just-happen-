# Raja Trade Website Clone

An exact clone of **rajatrade.com** built with Node.js, Express, and Handlebars.

## 📁 Project Structure

```
rajatrade-clone/
├── server.js              # Main Express server
├── package.json
├── routes/
│   └── main.js            # All page routes + contact form handler
├── views/
│   ├── layouts/
│   │   └── main.hbs       # Main HTML layout (header, footer)
│   ├── partials/
│   │   ├── topbar.hbs     # Top contact bar
│   │   ├── navbar.hbs     # Navigation menu
│   │   └── footer.hbs     # Footer
│   ├── home.hbs           # Homepage
│   ├── about.hbs          # About Us page
│   ├── services.hbs       # All Services page
│   ├── product.hbs        # Individual service pages
│   ├── contact.hbs        # Contact page with form
│   └── 404.hbs            # 404 error page
└── public/
    ├── css/style.css      # All styles
    ├── js/main.js         # jQuery interactions
    └── images/            # ← Add your images here (see below)
```

## 🚀 Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Add your images
Place the following images in `public/images/`:
- `carousel-1.jpg`, `carousel-2.jpg`, `carousel-3.jpg` — Hero slider images (1920×600px)
- `iec-code.jpg` — IEC Code service image
- `MEIS.jpg` — MEIS & SEIS service image
- `epcg.png` — EPCG License service image
- `about-us.jpg` — About Us section image
- `default-service.jpg` — Fallback image for services

You can use any relevant business/trade images from free stock sites like Unsplash or Pexels.

### 3. Configure email (for Contact Form)
Edit `routes/main.js` or set environment variables:
```bash
EMAIL_USER=your@gmail.com
EMAIL_PASS=yourapppassword
```
> For Gmail, generate an App Password at myaccount.google.com → Security → App passwords

### 4. Start the server
```bash
# Production
npm start

# Development (with auto-reload)
npm run dev    # requires: npm install -g nodemon
```

### 5. Open in browser
```
http://localhost:3000
```

## 📄 Pages Included

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/about` | About Us |
| `/services` | All Services |
| `/products/iec-code` | IEC Code |
| `/products/rosctl-licence` | RoSCTL Licence |
| `/products/meis-seis-incentives` | MEIS & SEIS |
| `/products/epcg-licence` | EPCG License |
| `/products/advance-licence` | Advance License |
| `/products/export-house` | Export House Certificate |
| `/products/rcmc-application` | RCMC Application |
| `/products/coo` | Certificate of Origin |
| `/products/digital-signature` | Digital Signature |
| `/products/no-incentive` | No Incentive Certificate |
| `/products/free-sales` | Free Sales Certificate |
| `/products/other-documentation` | Other Documentation |
| `/contact` | Contact Us (with working form) |

## 🌐 Deploy to Production

### Option A: Railway / Render / Heroku
1. Push to GitHub
2. Connect repo to Railway/Render
3. Set `EMAIL_USER` and `EMAIL_PASS` as environment variables
4. Deploy!

### Option B: VPS (Ubuntu)
```bash
npm install -g pm2
pm2 start server.js --name rajatrade
pm2 save
pm2 startup
```
Then set up Nginx as a reverse proxy pointing to port 3000.

## ✅ Features
- Exact layout clone of rajatrade.com
- Responsive (mobile-friendly)
- Working contact form with email delivery (Nodemailer)
- Dynamic service pages (12 services)
- Bootstrap 4 + jQuery
- Hero carousel slider
- Back-to-top button
- Form validation (client + server side)
