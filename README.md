# 📝 Noteworthy - MERN Note-Taker & Editor ✨

> *Capture your thoughts, edit your ideas, and keep your life organized with a touch of magic!* 🚀✨

Welcome to **Noteworthy**! A full-featured, sleek, and interactive MERN stack web application built for creating, reading, editing, and managing your daily notes, ideas, and strictly confidential master plans 🤫.

---

## 🌟 Key Features

- 📝 **Create Notes:** Jot down thoughts instantly with rich formatting options!
- 📖 **Read & View:** Clean, readable, grid and list layout for all your notes.
- ✏️ **Real-Time Editor:** Edit existing notes seamlessly whenever inspiration strikes.
- 🗑️ **Delete & Clean Up:** Unclutter your mind (and database) by deleting outdated notes with one click.
- 📌 **Pin Favorites:** Keep your important notes front and center!
- 🔍 **Instant Search:** Quickly filter notes by title, tags, or content.
- 🌙 **Dark Mode Support:** Easy on the eyes for those late-night genius sessions 🦉.

---

## 🛠️ Tech Stack

Built with the powerful **MERN** stack:

| Technology | Role | Icon |
| :--- | :--- | :---: |
| **MongoDB** | NoSQL Database for flexible document storage | 🍃 |
| **Express.js** | Fast & minimalist backend web framework | 🚂 |
| **React.js** | Dynamic and interactive UI frontend component library | ⚛️ |
| **Node.js** | JavaScript runtime environment for backend logic | 🟢 |

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running on your machine! 💻

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher) 🟢
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI) 🍃
- `npm` or `yarn` package manager 📦

---

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/noteworthy-mern.git
   cd noteworthy-mern
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../client
   npm install
   ```

---

### 🔐 Environment Variables

Create a `.env` file in the `server/` directory and add the following config:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/noteworthy
JWT_SECRET=super_secret_key_shhh 🤫
```

---

### ▶️ Running the Application

1. **Start the Backend Server:**
   ```bash
   cd server
   npm run dev
   ```
   *(Backend starts on `http://localhost:5000` 🚂)*

2. **Start the Frontend Application:**
   ```bash
   cd client
   npm start
   ```
   *(Frontend opens on `http://localhost:3000` ⚛️)*

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/notes` | Get all notes 📚 |
| `GET` | `/api/notes/:id` | Get single note by ID 🔎 |
| `POST` | `/api/notes` | Create a new note ➕ |
| `PUT` | `/api/notes/:id` | Update / Edit an existing note ✏️ |
| `DELETE` | `/api/notes/:id` | Delete a note 🗑️ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 🎉
Feel free to check out the [issues page](../../issues).

1. Fork the Project 🍴
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`) 🌿
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`) 💬
4. Push to the Branch (`git push origin feature/AmazingFeature`) 🚀
5. Open a Pull Request 📩

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information. 📄

---

<p align="center">
  Made with ❤️, ☕, and JavaScript! Happy Note-Taking! 📝✨
</p>
