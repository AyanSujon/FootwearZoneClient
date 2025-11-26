
- 
- Live link: https://footwear-zone-client.vercel.app/
- api link: https://footwear-api-six.vercel.app/ 
- client side Repo: https://github.com/AyanSujon/FootwearZoneClient.git
- https://github.com/AyanSujon/FootwearZoneServer.git


Footwear Zone: Client & Server

👟 Project Overview

Footwear Zone is a full-stack e-commerce solution dedicated to modern and stylish footwear. This application provides a seamless shopping experience for customers and robust product management tools for administrators.

Short Description

This is a comprehensive, responsive e-commerce platform built with Next.js (Client) and a custom API (Server). It features user authentication, category-based product sorting, advanced search filters, and an exclusive admin panel for product management (CRUD operations).

🔗 Links

Component

Type

URL

Live Demo

Client

https://footwear-zone-client.vercel.app/

Backend API

Server

https://footwear-api-six.vercel.app/

Client Repository

GitHub

https://github.com/AyanSujon/FootwearZoneClient.git

Server Repository

GitHub

https://github.com/AyanSujon/FootwearZoneServer.git

🚀 Setup & Installation (Client Side)

Follow these steps to get the client-side application running locally.

Prerequisites

Node.js (LTS version recommended)

npm or yarn

Installation Steps

Clone the repository:

git clone [https://github.com/AyanSujon/FootwearZoneClient.git](https://github.com/AyanSujon/FootwearZoneClient.git)
cd FootwearZoneClient


Install dependencies:

npm install
# or
yarn install


Configure Environment Variables:
Create a .env.local file in the root directory and add your Firebase configuration and API base URL.

# Example .env.local content (replace with actual values)
NEXT_PUBLIC_API_URL=[https://footwear-api-six.vercel.app/](https://footwear-api-six.vercel.app/)
# ... other necessary environment variables (e.g., Firebase config)


Run the application:

npm run dev
# or
yarn dev


The application will now be running on http://localhost:3000.

✨ Features

The Footwear Zone website includes the following core functionalities:

User Experience

Authentication: Seamless Login/Register functionality using Firebase.

Showcases: Dedicated sections for Best Sellers and New Arrivals.

Dynamic Content: Dynamic Testimonials to build trust.

Engagement: Integrated Newsletter sign-up.

Product & Navigation

Category Sorting: All products are easily navigable and sortable by category (Men, Women, Kids).

Search & Filter: Powerful search filter by product title for quick product discovery.

Admin & Management (Requires Authorization)

CRUD Operations: Full Product Management capabilities:

Add new product

Update product details

Delete product

Technology & UI Enhancements

Notifications: User-friendly feedback via React Toastify for success/error messages.

Alerts: Engaging, custom alerts using SweetAlert2 for crucial actions (e.g., delete confirmation).

💻 Dependencies

This project relies on the following key dependencies:

Category

Dependency

Description

Framework

next, react, react-dom

Next.js for client-side rendering and routing.

Authentication

firebase

Handles user authentication and data persistence.

UI/Icons

lucide-react, react-icons, daisyui, tailwindcss

Provides modern components, icons, and utility-first styling.

Swiper

swiper

Used for creating responsive and dynamic carousels (e.g., in Best Sellers).

Feedback

react-toastify, sweetalert2

For enhanced user notifications and custom alerts.

Dev Tool

babel-plugin-react-compiler

Used for performance optimization during development.

🗺️ Route Summary

Route Name

Path

Description

Example URL

Home Page

/

Main landing page with featured products and categories.

https://footwear-zone-client.vercel.app/

Shop Page

/shop

Displays all available products.

https://footwear-zone-client.vercel.app/shop

Men's Collection

/men

Filtered view of products categorized as Men's.

https://footwear-zone-client.vercel.app/men

Women's Collection

/women

Filtered view of products categorized as Women's.

https://footwear-zone-client.vercel.app/women

Kids' Collection

/kids

Filtered view of products categorized as Kids'.

https://footwear-zone-client.vercel.app/kids

Product Details

/shop/[productId]

Detailed view of a single product.

https://footwear-zone-client.vercel.app/shop/692479ae0c37c914c549dc05

Login Page

/login

User login interface.

https://footwear-zone-client.vercel.app/login

Register Page

/register

New user registration interface.

https://footwear-zone-client.vercel.app/register

Add Product (Admin)

/addProduct

Page for authorized users to add new products.

https://footwear-zone-client.vercel.app/addProduct

Product Manage

/productmanage

Overview of all products for admin management.

https://footwear-zone-client.vercel.app/productmanage

Edit Product

/productmanage/[productId]/edit

Admin page to edit details of a specific product.













---



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
