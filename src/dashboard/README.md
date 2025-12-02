# Dashboard Documentation

## Overview
A complete React dashboard built with **TailwindCSS** and **JSON Server** integration. The dashboard provides a clean, responsive interface for managing users, workers, services, and orders.

## Features

✅ **Responsive Sidebar Navigation** - TailwindCSS-styled sidebar with active route indicators
✅ **Real-time Data Fetching** - Integrates with JSON Server (db.json)
✅ **Reusable Components** - Table, Filter, and Card components
✅ **Search & Filter** - Dynamic filtering on Users and Orders pages
✅ **Data Cross-referencing** - Orders display user, worker, and service names
✅ **Loading & Error States** - Graceful handling with Tailwind UI elements
✅ **Responsive Design** - Mobile-friendly layout using TailwindCSS

## Folder Structure

```
src/dashboard/
├── pages/
│   ├── Users.jsx          # Display and filter users
│   ├── Workers.jsx        # Display workers with service type filter
│   ├── Services.jsx       # Display all services
│   └── Orders.jsx         # Display orders with cross-referenced data
├── layout/
│   └── DashboardLayout.jsx  # Main dashboard wrapper with sidebar
├── components/
│   ├── Table.jsx          # Reusable table component
│   ├── Filter.jsx         # Reusable filter/search component
│   └── Card.jsx           # Reusable card component
└── DashboardRoutes.jsx    # Router configuration
```

## Setup & Running

### 1. Prerequisites
- Node.js installed
- TailwindCSS already configured in your project
- json-server installed globally or locally

### 2. Start JSON Server

```bash
# Make sure db.json is in your project root
json-server --watch db.json --port 3000
```

The server will be available at `http://localhost:3000`

### 3. Start React Application

```bash
npm run dev
```

### 4. Access Dashboard

Navigate to: `http://localhost:3000/dashboard/users`

The dashboard includes:
- **Users** - `/dashboard/users` - Search by name, filter by role
- **Workers** - `/dashboard/workers` - Filter by service type
- **Services** - `/dashboard/services` - View all available services
- **Orders** - `/dashboard/orders` - Filter by status, cross-referenced data

## Pages Details

### Users Page (`pages/Users.jsx`)
- Displays all users from `GET /users`
- **Filters:**
  - Search by name (text input)
  - Filter by role (admin, user, worker)
- **Columns:** ID, Name, Email, Role (with colored badges)

### Workers Page (`pages/Workers.jsx`)
- Displays all workers from `GET /workers`
- Cross-references services to show service names
- **Filters:**
  - Filter by service type
- **Columns:** ID, Name, Phone, Service Type

### Services Page (`pages/Services.jsx`)
- Displays all services from `GET /services`
- **Columns:** ID, Service Name, Description

### Orders Page (`pages/Orders.jsx`)
- Displays all orders from `GET /orders`
- **Data Enrichment:**
  - `userId` → replaced with `user.name`
  - `workerId` → replaced with `worker.name`
  - `serviceId` → replaced with `service.title`
- **Filters:**
  - Filter by status (pending, in-progress, completed)
- **Columns:** Order ID, User, Worker, Service, Status, Date

## Component API

### Table Component
```jsx
<Table
  columns={[
    { key: "id", label: "ID" },
    { key: "name", label: "Name", render: (row) => <span>{row.name}</span> }
  ]}
  data={data}
  loading={loading}
  error={error}
/>
```

### Filter Component
```jsx
// Text input
<Filter
  label="Name"
  type="text"
  value={value}
  onChange={handleChange}
/>

// Select dropdown
<Filter
  label="Role"
  type="select"
  value={value}
  onChange={handleChange}
  options={["admin", "user", "worker"]}
/>
```

### Card Component
```jsx
<Card title="Title">
  <p>Content goes here</p>
</Card>
```

## JSON Server Endpoints

All data is fetched from these endpoints:

- `GET http://localhost:3000/users` - Get all users
- `GET http://localhost:3000/workers` - Get all workers
- `GET http://localhost:3000/services` - Get all services
- `GET http://localhost:3000/orders` - Get all orders

## TailwindCSS Classes Used

- **Layout:** `flex`, `h-screen`, `w-64`, `p-6`, `space-y-6`
- **Colors:** `bg-white`, `bg-gray-50`, `bg-blue-600`, `text-gray-800`
- **States:** `hover:bg-gray-100`, `focus:ring-2`, `focus:ring-blue-500`
- **Responsive:** `grid-cols-1`, `md:grid-cols-2`
- **Badges:** `px-3`, `py-1`, `rounded-full`, `font-semibold`
- **Shadows:** `shadow`, `shadow-lg`

## Error Handling

All pages include:
- **Loading State:** Animated spinner while fetching data
- **Error State:** Red alert box with error message
- **Empty State:** Gray box indicating no data found

## Integration with Main App

The dashboard is integrated into `src/App.jsx`:

```jsx
<Routes>
  {/* Dashboard Routes - No Header/Footer */}
  <Route path="/dashboard/*" element={<DashboardRoutes />} />
  
  {/* Main Site Routes - With Header/Footer */}
  {/* ... other routes ... */}
</Routes>
```

Dashboard routes are separate from main site routes and don't include Header/Footer.

## Navigation

The sidebar automatically highlights the active route using React Router's `NavLink` component with TailwindCSS active styles.

---

**Last Updated:** November 30, 2025
