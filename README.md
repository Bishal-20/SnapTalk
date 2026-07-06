# 💬 SnapTalk

A modern real-time chat application built with the **MERN Stack**, designed for seamless one-to-one and group conversations. SnapTalk delivers a fast, secure, and responsive messaging experience with real-time communication powered by **Socket.IO**.

🌐 **Live Demo:** https://snaptalk-w0xq.onrender.com

> **Note:** The application may take a few seconds to load on the first visit because the backend is hosted on Render's free tier.

## ✨ Features
* 🔐 Secure JWT Authentication
* 👤 User Registration & Login
* 💬 Real-Time One-to-One Chat
* ⚡ Instant Message Delivery
* 🟢 Online/Offline User Status
* 🖼️ Image Sharing
* 📷 Cloudinary Image Uploads
* 🔔 Keyboard Sound Effects
* 📧 Email Verification
* 🛡️ Arcjet Security Protection
* 📱 Fully Responsive Design

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Zustand
* React Router
* Axios
* Socket.IO Client
* Tailwind CSS
* DaisyUI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT Authentication
* bcrypt
* Cloudinary
* Resend
* Arcjet

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Bishal-20/SnapTalk.git
cd SnapTalk
```

### 2. Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

RESEND_API_KEY=

EMAIL_FROM=

ARCJET_KEY=
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```


## 👨‍💻 Author

**Bishal Barman**

GitHub: https://github.com/Bishal-20

