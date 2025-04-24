# Escobar Insurance Website

A modern, responsive, and bilingual (Spanish/English) website for Escobar Insurance, a health insurance agency.

## Features

- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Bilingual Support**: Full Spanish and English language support with easy switching
- **Modern UI**: Clean and professional design based on Bootstrap 5
- **SEO Optimized**: Proper meta tags, sitemap, and robots.txt for better indexing
- **Performance Optimized**: Fast loading with optimized assets
- **Easy to Maintain**: Well-structured HTML, CSS, and JavaScript files

## Pages Included

1. **Home (index.html)**: Main landing page showcasing all services
2. **Health Insurance (salud.html)**: Detailed information about health insurance options
3. **Additional Service Pages**: Templates for Life Insurance, Annuities, Dental & Vision, and Medicare
4. **Contact Page**: Form for customers to get in touch
5. **About Us Page**: Information about the agency

## File Structure

```
escobar-insurance/
│
├── index.html            # Home page
├── salud.html            # Health Insurance page
├── vida.html             # Life Insurance page
├── anualidades.html      # Annuities page
├── dental.html           # Dental & Vision page
├── medicare.html         # Medicare page
├── nosotros.html         # About Us page
├── contacto.html         # Contact page
├── robots.txt            # Robots file for search engines
├── sitemap.xml           # XML Sitemap for search engines
│
├── css/
│   └── styles.css        # Main stylesheet
│
├── js/
│   └── script.js         # Main JavaScript file
│
├── img/                  # Images directory
│   ├── logo.png          # Main logo
│   ├── logo-white.png    # White version of logo for footer
│   ├── favicon.ico       # Favicon
│   ├── hero-family.jpg   # Hero section image
│   ├── why-choose-us.jpg # Featured image
│   │
│   ├── providers/        # Insurance providers logos
│   │   ├── anthem.png
│   │   ├── cigna.png
│   │   └── ...
│   │
│   └── testimonials/     # Client testimonial images
│       ├── client1.jpg
│       ├── client2.jpg
│       └── client3.jpg
│
└── docs/                 # Documentation
    └── language-switching.md  # Language switching implementation guide
```

## Customization

### Colors and Fonts

The website uses CSS variables for easy customization. To change the color scheme or fonts, modify the root variables in `css/styles.css`:

```css
:root {
    /* Primary Colors */
    --primary-color: #0099cc;       /* Main brand color */
    --primary-dark: #0077aa;        /* Darker shade for hover effects */
    --primary-light: #e6f7fc;       /* Lighter shade for backgrounds */
    
    /* Secondary Colors */
    --secondary-color: #ffb703;     /* Accent color for CTAs */
    --secondary-dark: #e69500;      /* Darker accent for hover */
    
    /* Neutral Colors */
    --dark-color: #333333;          /* Text color */
    --light-color: #ffffff;         /* Light background and text */
    --gray-color: #f5f7fa;          /* Light gray background */
    --gray-dark: #6c757d;           /* Dark gray for secondary text */
    --border-color: #e9ecef;        /* Border color */
    
    /* Fonts */
    --body-font: 'Nunito', sans-serif;  /* Main text font */
    --heading-font: 'Montserrat', sans-serif;  /* Heading font */
}
```

### Contact Information

Update your agency's contact information in:

1. The contact form section in `contacto.html`
2. The footer section in all HTML files

### Content Modification

To add or modify content, follow the bilingual structure using data attributes:

```html
<p data-en="English text here" data-es="Spanish text here">Spanish text here</p>
```

## Language Switching

The website implements a language switching functionality using JavaScript. When a user selects a language, it:

1. Updates all text elements on the page to the selected language
2. Stores the user's language preference in localStorage
3. Updates the HTML lang attribute

For more details, see `docs/language-switching.md`.

## SEO Implementation

The website includes:

- Proper meta tags for all pages
- Semantic HTML structure
- Optimized page titles and descriptions
- robots.txt file for search engine crawling instructions
- XML sitemap for better indexing

## Browser Compatibility

This website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits

- Bootstrap 5: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- Google Fonts: https://fonts.google.com/
- Placeholder images from [Unsplash](https://unsplash.com/)
- Demo text content is for demonstration purposes only

## Deployment

To deploy this website:

1. Upload all files to your web server
2. Update the domain in sitemap.xml with your actual domain
3. Test all forms and functionality

## License

This website template is for the exclusive use of Escobar Insurance.