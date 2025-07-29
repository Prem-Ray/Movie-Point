# 🎬 Movie Point

A sleek, local-data movie app built with **React + Vite** and styled using **Tailwind CSS**.

> 🔌 No external APIs — all data is locally managed.

---

## 🚀 Features

- 🔍 Search & filter movies
- ❤️ Add/remove favorites (stored in `localStorage`)
- 🎥 Optional sticky background video
- ❌ "No movies found" fallback UI
- 🌘 Dark, glassmorphic interface
- ⚛️ Global state via Context API

---

## 📦 Tech Stack

- React 19 + JSX
- Vite
- Tailwind CSS
- React Icons / Lucide
- React Router DOM

---

## 📁 Folder Structure

```

Movie-Point/
├── public/            # Static assets (icon, movie.mp4)
├── src/
│   ├── components/    # MovieCard, NavBar
│   ├── context/       # MovieContext.jsx
│   ├── pages/         # Home.jsx, Favourites.jsx, Nothing.jsx
│   ├── services/      # Movies.jsx (local movie data)
├── index.html
├── vite.config.js
└── README.md

````

---

## 🛠️ Setup

```bash
git clone https://github.com/Prem-Ray/Movie-Point.git
cd Movie-Point
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview built app
````

---

## 📤 Deployment

* [Netlify](https://moviepointer.netlify.app/)

---

## 👨‍💻 Author

**Premanshu Ray**
🔗 [GitHub](https://github.com/Prem-Ray)
