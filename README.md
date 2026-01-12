# 🏠 Home Services Locator

A modern, full-stack web application that connects service providers with customers seeking home services. Built with React, Vite, and Tailwind CSS, this platform offers a seamless experience for browsing, applying for, and managing home services.

**[🚀 Live Demo](https://home-services-loc.vercel.app)**

---

## ✨ Features

### For Customers
- 🔐 **User Authentication** - Secure login and registration system
- 🔍 **Service Discovery** - Browse and search home services with detailed descriptions
- 📱 **Service Details** - View comprehensive information, pricing, and service provider details
- 📋 **Service Applications** - Apply for services with an intuitive form
- 🖼️ **Gallery** - Explore service provider portfolios and completed work
- 📞 **Contact Management** - Direct messaging and contact forms with service providers
- 🗺️ **Location-Based Services** - Find services available in your area

### For Admins
- 👥 **User Management** - View and manage registered users
- 👷 **Worker Management** - Manage service providers and workers
- 🛠️ **Service Management** - Create, edit, and delete service offerings
- 📊 **Order Tracking** - Monitor service applications and orders
- 📈 **Dashboard Analytics** - Comprehensive admin dashboard with data tables

---

## 🛠️ Tech Stack

**Frontend:**
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite** - Pre-built UI components
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **Swiper** - Modern carousel/slider component
- **React Icons** - Comprehensive icon library

**Backend & Data:**
- **JSON Server** - Mock REST API and database
- **db.json** - JSON-based data storage

---

## 📁 Project Structure

```
Home-Services-Loc/
├── src/
│   ├── Pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── ServicesInfo/
│   │   ├── AboutUs/
│   │   ├── ContactUs/
│   │   ├── GalleryPage/
│   │   ├── Login/
│   │   └── Registration/
│   ├── Components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Banner/
│   │   ├── Services/
│   │   ├── Contact/
│   │   ├── ApplyingForm/
│   │   └── AboutUs/
│   ├── dashboard/
│   │   ├── pages/
│   │   │   ├── Users.jsx
│   │   │   ├── Workers.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Orders.jsx
│   │   ├── components/
│   │   │   ├── Table.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Filter.jsx
│   │   │   ├── ServiceForm.jsx
│   │   │   ├── UserForm.jsx
│   │   │   └── WorkerForm.jsx
│   │   └── layout/
│   │       └── DashboardLayout.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── assets/
│   │   ├── data/
│   │   │   └── services.js
│   │   ├── logo/
│   │   ├── Home/
│   │   └── About/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── services/
│   └── contact/
├── db.json
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hussien0Mahmoud/Home-Services-Loc.git
   cd Home-Services-Loc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Project

The project requires two servers to run simultaneously:

#### Terminal 1: Start the Development Server
```bash
npm run dev
```
This will start the Vite development server, typically on `http://localhost:5173`

#### Terminal 2: Start the JSON Server (Database)
```bash
npx json-server --watch db.json --port 3000
```
This will start the JSON Server API on `http://localhost:3000`

**Note:** Make sure both servers are running for the application to work properly.

---

## 📊 Database (db.json)

The `db.json` file serves as the mock database for the application. It contains the following main collections:

### Services Collection
Contains home service offerings with details:
```json
{
  "id": "1",
  "serviceName": "Service Name",
  "image": "/path/to/image",
  "price": 150,
  "descriptions": ["Description 1", "Description 2"],
  "icon": "FaWrench"
}
```

**Other Collections in db.json:**
- **users** - Registered customer accounts
- **workers** - Service provider accounts
- **orders** - Service applications and orders
- **contacts** - Contact form submissions

### API Endpoints
When JSON Server is running, access data via:
- `GET/POST/PUT/DELETE http://localhost:3000/services`
- `GET/POST/PUT/DELETE http://localhost:3000/users`
- `GET/POST/PUT/DELETE http://localhost:3000/workers`
- `GET/POST/PUT/DELETE http://localhost:3000/orders`

---

## 🌐 Live Demo

The application is deployed and live at:
**[https://home-services-loc.vercel.app](https://home-services-loc.vercel.app)**

### Demo Features to Try:
1. Browse home services on the homepage
2. View detailed service information
3. Register a new account
4. Apply for services
5. Access the admin dashboard
6. Explore the gallery and about pages

---

## 📚 Key Components

### Pages
- **Home** - Landing page with featured services
- **Services** - Browse all available services
- **ServicesInfo** - Detailed service information
- **AboutUs** - Company information and mission
- **ContactUs** - Contact form and location map
- **GalleryPage** - Service provider portfolios
- **Login/Registration** - User authentication
- **Dashboard** - Admin control panel

### Context
- **AuthContext** - Global authentication state management

---

## 🎨 Styling

The project uses a modern CSS stack:
- **Tailwind CSS** for utility-first styling
- **Flowbite** components for pre-built UI elements
- **Framer Motion** for animations
- **Custom CSS** in `src/index.css`

---

## 🔐 Features in Detail

### Authentication
- User registration with validation
- Secure login system
- Role-based access (customer, worker, admin)
- Protected routes and dashboard access

### Service Management
- Dynamic service listings
- Service filtering and search
- Service application forms
- Order tracking and management

### Admin Dashboard
- Comprehensive data management tables
- User and worker management
- Service CRUD operations
- Order overview and statistics

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop screens

---

## 📧 Contact & Support

For questions, feedback, or support:
- 📧 Email: hussien14mahmoud@gmail.com
- 🐙 GitHub: [\[My Profile\]](https://github.com/Hussien0Mahmoud)
- 💼 LinkedIn: [\[My Profile\]](https://www.linkedin.com/in/hussien-mahmoud-5a919621a/)


---

**Made with ❤️ by Hussien Mahmoud **
