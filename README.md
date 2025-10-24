# 🏡 Houzez Real Estate Frontend (Vue 3 + Vite)

**Houzez Real Estate Frontend** is a modern, high-performance frontend built using **Vue 3**, **Vite**, designed to integrate seamlessly with the **Houzez Laravel Backend API**.  
This project provides a beautiful, responsive, and dynamic interface for real estate listings, agents, property details, dashboards, and more.

---

## 🚀 Overview

Houzez Real Estate is a **complete property management solution** that includes:
- A **Vue 3 frontend** powered by Vite for blazing-fast performance.
- A **Laravel backend** (`houzez-laravel-backend`) providing secure RESTful APIs.
- Integrated **authentication via Laravel Sanctum**.
- Ready-to-use structure for **ThemeForest submission**.

---

## 🧩 Key Features

### Frontend (Vue 3 + Vite)
- ⚡️ Built with **Vue 3 Composition API** and **Vite**
- 🎨 **Tailwind CSS** for utility-first, responsive design
- 🌍 **i18n** support for multiple languages
- 🔐 Authentication with **Laravel Sanctum**
- 📦 Modular and scalable component structure
- 🧭 Vue Router for navigation
- 📡 Axios-based API integration
- 🗂️ Pinia store management
- 💬 Clean reusable UI components
- 📱 Fully responsive and mobile-friendly design

### Backend (Laravel 11 + Sanctum)
- 🧠 RESTful API for all data
- 🔐 Authentication & authorization via Sanctum
- 🏡 Property, Agent, and User management
- 💳 Stripe/PayPal integration for payments
- 🌍 Multi-language and multi-currency support
- 📊 Dashboard analytics & reports
- 📦 Membership packages & subscriptions

---

## 🗂️ Folder Structure (Frontend)
```
houzez-vue/
│
├── .github/
├── .idea/
├── .vscode/
├── dist/
├── node_modules/
├── src/
│ ├── assets/ # Static images and global assets
│ ├── components/ # Global and shared Vue components
│ ├── constants/ # App-wide constants
│ ├── helpers/ # Utility/helper functions
│ ├── i18n/ # Internationalization (multi-language)
│ ├── locales/ # Language JSON files
│ ├── plugins/ # Vue plugins (e.g., axios, toast, etc.)
│ ├── router/ # Vue Router configuration
│ ├── services/ # API service files
│ ├── stores/ # Pinia stores for global state
│ ├── traits/ # Reusable logic (mixins/composables)
│ ├── views/ # Page-level components
│ │ ├── app/
│ │ ├── auth/
│ │ ├── dashboard/
│ │ ├── demos/
│ │ ├── inc/
│ │ └── modules/
│ ├── App.vue # Root Vue component
│ └── main.js # Application entry point
│
├── .env
├── .env.example
├── .env.production
├── package.json
├── vite.config.js
└── README.md
```


---

## 🧾 Backend (Laravel) Integration

The frontend connects to the **Laravel backend API** hosted at:

[Laravel backend API](https://api.yourdomain.com/api/v1)


### Example Endpoints
| Purpose | Method | Endpoint |
|----------|---------|-----------|
| User Login | POST | /auth/login |
| User Register | POST | /auth/register |
| Fetch Properties | GET | /properties |
| Single Property | GET | /properties/{slug} |
| Agents | GET | /agents |
| Dashboard Stats | GET | /dashboard/stats |

> Backend Repository: [houzez-laravel-backend](https://github.com/your-username/houzez-laravel-backend)

---

## 📄 License
This project is licensed under the **MIT License**.