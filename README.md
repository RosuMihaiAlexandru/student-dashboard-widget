# 📚 Student Dashboard Widget

A standalone widget built with **Next.js**, **TypeScript**, and **TailwindCSS** that provides a clean and interactive student dashboard.

---

## ✨ Features

- **Top Tab Bar** with 3 tabs: `Assignments`, `Resources`, `Messages`
- **Accordion Dropdowns** showing 3 mock items per tab
- **"View All" Side Panel** with 10 dummy items per tab
- **"Mark as Done" Button** to remove items from the side panel
- **Unread Badge** shown on tabs when items are not marked as done
- **Persistence** with `localStorage` (state saved across refreshes)
- Fully **modular components**: TabBar, Accordion, SidePanel, StudentDashboard, ListItem

---

## 🛠 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Persistence**: localStorage

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/RosuMihaiAlexandru/student-dashboard-widget.git
cd student-dashboard-widget
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧪 Demo Flow

1. Click on any tab to open the accordion dropdown.
2. Click "View All" to open the side panel from the right.
3. Use "Mark as Done" to remove items and clear unread badges.
4. Refresh the page — everything persists!

---

## 📁 Components

- `TabBar.tsx` – Renders top navigation with unread badges
- `Accordion.tsx` – Renders mock items under each tab
- `SidePanel.tsx` – Right-hand panel with detailed items
- `StudentDashboard.tsx` – Main widget container that ties everything together
- `ListItem.tsx` – Represents individual items in the side panel with a "Mark as Done" button

---

