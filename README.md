# 📝 Fullstack Note App (Node.js + MySQL)

## 📌 Description

This is a simple fullstack Note App where users can:

* Add notes
* View notes
* Edit notes
* Delete notes

The project uses:

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **Database:** MySQL
---
## 🚀 Features
* Create new notes
* Display all notes from database
* Edit existing notes
* Delete notes
* Data stored permanently using MySQL
---
## 🛠️ Technologies Used

* Node.js
* Express.js
* MySQL
* HTML5
* CSS3
* JavaScript (Fetch API)
---
## 📁 Project Structure

```
project/
│── backend/
│   └── server.js
│
│── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup MySQL Database

Open MySQL and run:

```sql
CREATE DATABASE notes_app;

USE notes_app;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note TEXT
);
```

---

### 4. Configure Database Connection

In `server.js`, update:

```js
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "notes_app"
});
```

---

### 5. Run the server

```
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /notes     | Get all notes |
| POST   | /notes     | Add new note  |
| PUT    | /notes/:id | Update note   |
| DELETE | /notes/:id | Delete note   |

---

## 🧠 How It Works

1. User interacts with frontend
2. Frontend sends request using Fetch API
3. Backend (Express) processes request
4. MySQL stores/retrieves data
5. Response sent back to frontend

---

## 📸 Screenshots (Optional)

<img width="1844" height="705" alt="image" src="https://github.com/user-attachments/assets/17d22452-5cf9-4de6-b160-53ba2b9b5c5a" />


---

## 🔮 Future Improvements

* User authentication (login/register)
* Search functionality
* Better UI design
* Deploy online (Render / Railway / Vercel)

---

## 👩‍💻 Author

*Kalkidan Tamene

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
