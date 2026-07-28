# LeadFlow

LeadFlow is a full-stack lead management SaaS platform that helps businesses capture, organize, search, and track potential customer inquiries from one centralized dashboard.

The project uses **C0deMine** as the visual foundation, **Pipedrive** as the functional CRM reference, and **Close** as inspiration for SaaS product positioning.

---

## 1. Product Requirements Document

### Product Goal

Build a simple and professional lead management platform that allows businesses to collect leads through a public website and manage them through a secure admin dashboard.

### Main Users

* **Visitors:** Submit their information through the lead capture form.
* **Admins:** Log in and manage submitted leads.

### Core Features

* SaaS-style landing page
* Lead capture form
* Client-side and server-side validation
* MongoDB lead storage
* Admin authentication
* Protected admin dashboard
* View all leads
* Search leads
* View lead details
* Update lead status
* Lead statistics

### Lead Status Workflow

`New → Contacted → Closed`

---

## 2. Technical Architecture Document

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* RESTful APIs
* JWT-based authentication
* Mongoose

### Database

* MongoDB

### Architecture

```text
User
  ↓
React Frontend
  ↓
Express REST API
  ↓
Authentication & Validation
  ↓
Controllers
  ↓
Mongoose Models
  ↓
MongoDB
```

### Main API Operations

* Register/Login Admin
* Submit Lead
* Get Leads
* Search Leads
* Get Lead Details
* Update Lead Status

The application follows a modular structure with separate routes, controllers, models, middleware, validation, and authentication logic.

---

## 3. Security & Access Document

### Authentication

* Admin authentication uses token-based authentication.
* Passwords are securely hashed before storage.
* JWT is used to authenticate admin requests.

### Authorization

* Admin dashboard routes are protected.
* Only authenticated admins can access lead management features.
* Backend APIs verify authentication before allowing protected operations.

### Validation

* Client-side validation provides immediate feedback.
* Server-side validation ensures that invalid data cannot be stored.
* API errors are handled gracefully.

### Protected Data

Lead management data is accessible only to authenticated administrators.

---

## 4. Frontend Specification Document

### Public Landing Page

The landing page will include:

* Navbar
* Hero section
* Product introduction
* Features/value sections
* Lead management workflow
* Lead capture form
* Call-to-action section
* Footer

### Lead Capture Form

The form collects:

* Name
* Email
* Budget Range
* Message

Form data is validated before being submitted to the backend.

### Admin Dashboard

The dashboard will include:

* Admin authentication
* Dashboard overview
* Lead statistics
* Searchable lead list
* Lead details
* Status management
* Logout functionality

### Design Direction

The UI will use a modern SaaS aesthetic inspired by C0deMine, with:

* Clean layouts
* Strong typography
* Structured sections
* Consistent spacing
* Responsive design
* Original LeadFlow branding

---

## 5. Feature Ticket List

### Authentication

* [ ] Create admin registration
* [ ] Create admin login
* [ ] Implement JWT authentication
* [ ] Protect admin routes
* [ ] Add logout functionality

### Public Website

* [ ] Build responsive landing page
* [ ] Create hero section
* [ ] Create feature sections
* [ ] Create lead capture form
* [ ] Add client-side validation

### Lead Management

* [ ] Create lead database model
* [ ] Create lead submission API
* [ ] Add server-side validation
* [ ] Display all leads
* [ ] Search leads
* [ ] View lead details
* [ ] Update lead status
* [ ] Add lead statistics

### UI/UX

* [ ] Implement responsive design
* [ ] Add loading states
* [ ] Add error states
* [ ] Add empty states
* [ ] Add success/error notifications
* [ ] Add required Digital Heroes footer credit

### Deployment & Documentation

* [ ] Deploy frontend
* [ ] Deploy backend
* [ ] Configure cloud MongoDB
* [ ] Test production application
* [ ] Create detailed README
* [ ] Add GitHub repository
* [ ] Add live URLs
