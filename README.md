# LUXE BAGS – Online Handbag Shopping Website

**Tagline:** Be a Dreamer – Be LUXE

## Project Overview

LUXE BAGS is a fictional online handbag shopping website developed to provide customers with a simple and convenient way to browse handbags, view product information and complete a demo shopping process.

The website uses a luxury-inspired design with navy, cream, brown, black and white colours to create a consistent brand identity.

## Project Objectives

- Create an attractive and user-friendly online shopping website.
- Display handbags with images, descriptions and prices.
- Allow customers to search for products.
- Provide an interactive image gallery.
- Allow customers to add products to a shopping cart.
- Calculate shopping cart totals automatically.
- Provide a checkout process and order confirmation.
- Allow customers to contact the business and submit enquiries.
- Make the website accessible on desktop, tablet and mobile devices.

## Technologies Used

- **HTML5:** Website structure and content.
- **CSS3:** Styling, layout, colours and responsive design.
- **JavaScript:** Product search, image gallery, shopping cart, checkout and form functionality.
- **Local Storage:** Stores shopping cart information and the most recent demo order in the browser.
- **GitHub:** Version control and project management.

## Website Pages

| Page | Description |
|---|---|
| `index.html` | Homepage introducing LUXE BAGS. |
| `about us.html` | Information about the business and its brand identity. |
| `catalogue.html` | Displays handbags, product descriptions, prices and search functionality. |
| `cart.html` | Displays selected products and allows customers to update quantities or remove items. |
| `checkout.html` | Collects customer and delivery information and displays the order summary. |
| `order-confirmation.html` | Displays the details of a successfully submitted demo order. |
| `contact.html` | Provides business contact information and customer contact functionality. |
| `enqiry.html` | Allows customers to submit product and service enquiries. |

## Main Website Features

### Product Catalogue
- Displays six handbag products.
- Shows product images, names, descriptions and prices.
- Includes product search functionality.
- Allows customers to add products to their shopping cart.

### Interactive Image Gallery
- Allows customers to view product images in an enlarged lightbox.
- Supports closing the gallery and keyboard interaction.

### Shopping Cart
- Saves selected products using browser Local Storage.
- Increases the quantity when the same product is added again.
- Allows customers to change product quantities.
- Allows customers to remove products.
- Calculates product subtotals, delivery fees and the final total.
- Includes a delivery fee of R100 when the cart contains products.

### Checkout and Order Confirmation
- Collects customer details and delivery information.
- Provides payment method selection for the demo checkout.
- Validates required form information.
- Displays a dynamic order summary.
- Generates an order number.
- Saves the most recent demo order.
- Redirects customers to an order confirmation page after submitting an order.

### Customer Enquiry and Contact
- Includes customer enquiry and contact forms.
- Uses HTML form validation.
- Includes phone number validation on the enquiry form.
- Prepares enquiry information for submission through the customer's email application.

### Responsive Design
The website includes responsive CSS styling for:
- Desktop screens.
- Tablet screens.
- Mobile screens.

The responsive layout adjusts navigation, product grids, images, forms and footer content to improve usability on smaller devices.

## Project Structure

```text
LUXE BAGS/
│
├── index.html
├── about us.html
├── catalogue.html
├── cart.html
├── checkout.html
├── contact.html
├── enqiry.html
├── order-confirmation.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── products.js
│   ├── gallery.js
│   ├── cart.js
│   ├── checkout.js
│   ├── order-confirmation.js
│   ├── enquiry.js
│   └── navigation.js
│
├── Images/
│   └── Website product and background images
│
├── README.md
└── CHANGELOG.md
```

## How to Run the Website

1. Download or clone the LUXE BAGS project repository from GitHub.
2. Open the project folder in Visual Studio Code.
3. Run the website using a local development server.
4. Open `index.html` in your browser.
5. Navigate through the website using the navigation links.

A modern browser such as Google Chrome is recommended.

## Testing

The following functionality has been tested during development:

- Product search and filtering.
- Adding products to the shopping cart.
- Updating product quantities.
- Removing products from the cart.
- Automatic subtotal and total calculations.
- Checkout form validation.
- Demo order submission and order confirmation.
- Enquiry form validation and email hand-off.
- Contact form functionality.
- Mobile and tablet layouts.
- Product image gallery functionality.

## Important Project Notes

This project demonstrates a front-end e-commerce shopping experience. It is not connected to a live payment gateway or a backend order-management database.

Shopping cart and demo order information are stored in the browser using Local Storage. Enquiry emails are prepared through the customer's email application and require the customer to send them.

## Version Control

GitHub was used to manage project development and track changes through commits.

## Author

LUXE BAGS Website Project  
2026

**Tagline:** Be a Dreamer – Be LUXE
