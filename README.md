# LeadFlow

LeadFlow is a full-stack lead management CRM designed to help businesses capture, organize, and track potential customer inquiries from a centralized workspace.

The platform provides a public-facing lead capture website and a secure admin dashboard where teams can manage incoming leads throughout their workflow.

## ✨ Features

### Public Website

* Modern SaaS-style landing page
* Responsive design
* Lead capture form
* Client-side form validation
* Project budget selection
* Project requirement submission
* Success and error feedback

### Lead Management

* Create new leads
* View all leads
* Search leads
* Filter leads by status
* View detailed lead information
* Update lead status
* Track lead creation dates

### Admin Authentication

* Secure admin login
* Password hashing with bcrypt
* JWT-based authentication
* HttpOnly cookie authentication
* Protected backend routes
* Protected frontend routes
* Get current authenticated admin
* Admin logout

### Admin Dashboard

* Lead statistics
* Total leads overview
* New leads
* Contacted leads
* Closed leads
* Centralized lead management
* Responsive admin interface

### Error & State Handling

* Form validation
* API error handling
* Loading states
* Empty states
* Success states
* Global backend error handling
* Invalid MongoDB ObjectId handling
* Mongoose error handling

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cookie-based authentication
* CORS
* dotenv

### Development & Deployment

* Git
* GitHub
* Thunder Client / Postman
* Vercel
* Render
* MongoDB Atlas


---

## 🔄 Application Workflow

```text
Potential Customer
       │
       ▼
Public Landing Page
       │
       ▼
Lead Capture Form
       │
       ▼
Frontend Validation
       │
       ▼
POST /api/leads
       │
       ▼
MongoDB
       │
       ▼
Lead Created
       │
       ▼
Admin Dashboard
       │
       ├── View Lead
       ├── Search Lead
       ├── Filter by Status
       └── Update Status
                │
                ▼
        New → Contacted → Closed
```

---


## 🔐 Authentication Flow

LeadFlow uses JWT-based authentication with HttpOnly cookies.

```text
Admin Login
     │
     ▼
Backend Validates Credentials
     │
     ▼
Password Verified
     │
     ▼
JWT Generated
     │
     ▼
JWT Stored in HttpOnly Cookie
     │
     ▼
Protected Routes
     │
     ▼
Auth Middleware Validates Token
```

The authentication system includes:

* Password hashing
* JWT authentication
* HttpOnly cookies
* Protected API routes
* Protected frontend routes
* Current admin verification
* Logout

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nikhilvishwakarma077/leadflow.git
```

```bash
cd leadflow
```

---

### 2. Setup Backend

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
CLIENT_URL=
```

### Frontend

```env
VITE_API_BASE_URL=
```


---

## 🧪 Testing

The backend APIs can be tested using:

* Thunder Client
* Postman

Important flows to test:

* Admin registration/setup
* Admin login
* Admin logout
* Get current admin
* Create lead
* Get all leads
* Search leads
* Filter leads by status
* Get lead by ID
* Update lead status
* Invalid request handling
* Unauthorized access handling

---

## 📄 License

This project is created for learning, development, and portfolio purposes.
