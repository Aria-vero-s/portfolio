# Ariane Saulnier - Portfolio Website

This is my personal portfolio website, showcasing my skills and services. The website is aimed at helping small business owners build simple, budget-friendly websites. The design is responsive, modern, and includes a video background, animations, and interactive components.

![mockup](mockup.png)

[Live website](https://aria-vero-s.github.io/portfolio/)

## Features

### General
- **Responsive Design**: Optimized for all screen sizes.
- **Bootstrap Integration**: Ensures a clean, grid-based layout.
- **Fun Design**: Video background, web design and magic-inspired theme with smooth animations enhance visual appeal.
- **Font Awesome Icons**: Icons from [FontAwesome](https://fontawesome.com/) for visually appealing and functional design elements.
- **Translation**: Users can view the website in English or French through the `index-fr.html`.
- **Currency converter**: Users can view prices in different currencies (EUR, CAD & GBP)

### Sections
1. **Hero Section**:
   - Engaging tagline: "Make Your Website Come True!"
   - Call-to-action buttons for user interaction.

2. **About Section**:
   - Introduction of Ariane Saulnier and her mission to help small businesses.
   - Highlights education and professional experience.

3. **Services Section**:
   - A detailed list of services offered, such as website development, hosting setup, branding, SEO, and social media guidance.

4. **Portfolio Section**:
   - Showcases completed projects with descriptions and links to live demos.
   - Includes pricing and package details for potential clients.

5. **Contact Section**:
   - Integrated contact form created with [formspree](http://www.formspree.io) enabling users to reach out for quotes or inquiries.

## Technologies Used
- **HTML5**: Markup structure.
- **CSS3**: Custom styles and animations.
- **Bootstrap 4 & 5**: Responsive grid system and components.
- **JavaScript**: For interactivity (optional; to be integrated in future iterations).
- **Font Awesome**: Icons for enhanced design.

Sure! Here's an example section you can add to your README to highlight the price converter feature on your site:

## Price Converter

The price converter automatically updates the prices for three different packages:

- **Standard**: €80 - €120
- **Signature**: €120 - €240
- **Business**: €240 - €300

### How it works:
- The converter uses hardcoded exchange rates:
```
document.addEventListener('DOMContentLoaded', () => {
  const exchangeRates = {
    "CAD": 1.45,
    "GBP": 0.85
  };
```
  
- Users can select their preferred currency from the dropdown menu in the navbar. Once a currency is selected, the prices are converted and displayed in the chosen currency.

- The prices are updated dynamically as users interact with the currency options.

---

Feel free to modify the content as needed, but this section should give a clear explanation of how the price converter works and how users can interact with it.

## How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aria-vero-s/portfolio.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd portfolio
   ```

3. **Open in Browser**:
   Open the `index.html` file in your browser to view the website.

### How to Set Up the Form

1. Make sure to replace the Formspree action URL in the HTML form:
    ```html
    <form id="contact-form" action="https://formspree.io/f/xrbbolzo" method="POST">
    ```
    with:
    ```html
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    ```

2. Replace `YOUR_FORM_ID` with your actual Formspree form ID. You can obtain this ID by signing up at [Formspree](https://formspree.io/) and creating a new form.

3. Once the change is made, the form will send submission data to your email.

## Project Structure
```
|-- index.html
|-- styles.css
|-- animations.css
|-- script.js
|-- ashford-italic.otf
|-- ashford.otf
|-- background.mp4
|-- images/
|   |-- mockup1.jpg
|   |-- mockup2.jpg
|   |-- mockup3.jpg
|-- assets/
|   |-- bootstrap.min.css
|   |-- fontawesome.js
```

## Credits
- **Video**: [Gradient Background](https://www.pexels.com/video/gradient-background-7898649/) from Pexels.  
- **Font**: [Ashford Font](https://www.allfreefonts.co/ashford-font/) from All Free Fonts.

## Future Enhancements
- **French Translation**: Add a translation button in the navbar.
- **SEO Optimization**: Improve metadata and structure for better search engine ranking.
- **Dark Mode**: Provide an option for users to toggle between light and dark themes.

---

Thank you for visiting my portfolio website!

