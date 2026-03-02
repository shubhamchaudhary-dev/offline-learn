---

# 📘 Offline Learn CLI

---

````markdown
# 🚀 Offline Learn CLI

> “Most learning platforms depend on the cloud — we built one that survives without it.”

Offline Learn CLI is an **offline-first, terminal-based learning platform** designed for low-connectivity environments.  
It allows students to download courses locally, take quizzes, track progress, export PDFs, and even share content peer-to-peer — all without internet access.

---

## 🌍 Why This Project?

Many students around the world face unreliable internet connectivity.  
Most modern learning platforms require constant online access.

Offline Learn ensures:

- 📚 Learning continues without internet
- ⚡ Instant local access
- 🎯 Interactive quizzes
- 🏆 Gamified progress tracking
- 📡 LAN-based peer sharing
- 🌍 Optional global leaderboard sync

---

## 🎥 Demo Video

<p align="center">
  <a href="https://www.youtube.com/watch?v=GVgb1UgsC_E">
    <img src="https://img.youtube.com/vi/GVgb1UgsC_E/maxresdefault.jpg" width="800" alt="Offline Learn Demo Video"/>
  </a>
</p>

<p align="center">
  ▶️ Click the image above to watch the full demo
</p>

---

## 🖼 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/ef4dfb82-dd23-4552-8013-8b9b95c15238" width="900"/>
</p>

<p align="center"><b>Terminal Dashboard</b></p>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/af924237-90f8-430d-b171-be0c637c8508" width="900"/>
</p>

<p align="center"><b>Progress Dashboard</b></p>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/2173bf0e-97a4-4a7c-b25e-3c65327818b3" width="900"/>
</p>

<p align="center"><b>PDF Export</b></p>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/ff4955cd-e331-4569-a213-2c3aa58a48a9" width="900"/>
</p>

<p align="center"><b>QR Code Sharing</b></p>


---

## ✨ Features

### 📚 Multi-Course Learning
- Mathematics
- Physics
- Biology
- Computer Science
- English Grammar

Each course includes:
- Structured topics
- Multiple quiz questions

---

### 📝 Interactive Quiz Engine
- Terminal-based UI
- Instant feedback
- Score tracking
- Persistent storage

---

### 📊 Progress Tracking
- Score history
- Performance analytics
- Lightweight local database (LowDB)

---

### 🏅 Gamification
- Perfectionist Badge
- Scholar Badge
- Consistent Learner Badge
- Dashboard visualization

---

### 📄 PDF Export
- Professionally formatted course PDF
- Saved inside `/exports`
- Print-ready learning material

---

### 🌍 Global Leaderboard (Optional Online Mode)
- Sync scores when internet is available
- Compare global performance
- Lightweight Express backend

---

### 📡 Peer-to-Peer LAN Sharing
- Share courses over local network
- QR code generation
- No internet required
- Instant transfer using Socket.io

---

## 🏗 Architecture

Built With:

- Node.js
- Commander.js (CLI routing)
- Fuse.js (Search)
- LowDB (Local database)
- Blessed + Blessed-Contrib (Dashboard UI)
- PDFKit (PDF export)
- Express (Leaderboard API)
- Socket.io (P2P sharing)

Design Principles:

- Offline-first
- Lightweight JSON storage
- Modular architecture
- Minimal latency
- Zero external API dependency

---

## 📦 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/offline-learn.git
cd offline-learn
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Globally

```bash
npm install -g .
```

---

## 🚀 Usage

### Show Help

```bash
offline-learn
```

---

### Fetch a Course

```bash
fetch math
```

---

### List Downloaded Courses

```bash
list
```

---

### Search Topics

```bash
search quadratic
```

---

### Take Quiz

```bash
test math
```

---

### View Progress

```bash
progress
```

---

### Open Dashboard

```bash
dashboard
```

---

### Export PDF

```bash
export math
```

PDF will be saved in:

```
/exports/
```

---

### Start Leaderboard Server

```bash
node server.js
```

View leaderboard:

```bash
leaderboard
```

---

### Share Course (Host)

```bash
share math
```

---

### Join Shared Course

```bash
join http://localhost:5000
```

---

## 📁 Project Structure

```
offline-learn/
│
├── bin/
├── content/
├── exports/
├── lib/
│   ├── commands/
│   ├── services/
│   └── utils/
├── storage/
├── server.js
├── package.json
└── README.md
```

---

## 🧠 Future Improvements

* ⏱ Timed Exam Mode
* 🤖 AI-generated quizzes
* 🌐 Course marketplace
* 👤 User authentication
* 📜 Certificate generation
* 📦 USB distribution mode
* 🌍 Multi-language support

---

## 📜 License
Shubham Chaudhary

## 🏁 Final Statement

Offline Learn transforms the command line into a complete offline education ecosystem.

Education continues — anytime, anywhere.

