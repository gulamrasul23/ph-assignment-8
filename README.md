# HERO.IO - Apps Management Website

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

---

## About the Project
**HERO.IO** is a streamlined apps management dashboard designed to showcase modern front-end development techniques. It provides a clean, visual interface for browsing, filtering, and managing a collection of applications in a highly responsive environment.

---

## Project Overview
The primary goal of this project is to demonstrate proficiency in **React.js** and **Tailwind CSS** by creating a dynamic user interface. Unlike traditional full-stack apps, HERO.IO focuses on high-performance client-side data handling by fetching and rendering information from a local `JSON` data source.

---

## Key Features
- **Dynamic App Listing** — Renders a collection of apps using high-quality visual cards.
- **Advanced Filtering & Sorting** — Users can quickly find apps based on specific categories or criteria.
- **Real-time Data Rendering** — Data is efficiently fetched from local JSON files located in the public directory.
- **Fully Responsive UI** — Optimized for a seamless experience across mobile, tablet, and desktop devices.
- **Interactive Components** — Features hover effects, smooth transitions, and a user-friendly navigation system.
- **Modern UI/UX** — Built with DaisyUI components for a polished, professional aesthetic.

---

## Tech Stack
**Frontend:** React.js · Tailwind CSS · DaisyUI  
**Icons:** Lucide React / FontAwesome  
**Data Management:** Local JSON Fetching  
**Deployment:** Netlify  

---

## Project Architecture
This application is a **pure front-end project**. 
* **No Database:** Data is stored in a static `.json` file within the `public/` folder.
* **No Authentication:** Designed for public access to demonstrate UI/UX and data filtering logic.
* **State Management:** Uses React Hooks (`useState`, `useEffect`) to manage the filtering and display of the app list.

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gulamrasul23/ph-assignment-8.git
   cd ph-assignment-8
   npm install
  ```
2. Run the application:

```bash
npm run dev
```

---
## Folder Structure

```plaintext
ph-assignment-8/
├── public/
│   └── alldata.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── hooks/
└── package.json
```

---
## Contact

**Live URL:** [Live Site](https://ph-8-assignment.netlify.app/)
<br>
**Email:** [Gulam Rasul](gulamrasulrahim23@gmail.com)
<br>
**Portfolio:** [Portfolio](https://github.com/gulamrasul23)
