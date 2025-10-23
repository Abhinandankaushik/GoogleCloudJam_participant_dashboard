# GDG GECB Cloud Study Jam Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

A dynamic **leaderboard and participant dashboard** for the **GDG on Campus GECB Cloud Study Jam**.  
This project uses Node.js and Express to serve a CSV-based dashboard with sorting, searching, and participant tracking.

---

## ✨ Features

* 📈 **Real-time Statistics:** Summary cards show total participants, redeemed codes, eligible participants, and total swag earners.
* 🏆 **Top 3 Leaderboard:** Automatically displays the top 3 participants based on the number of skill badges completed.
* 📊 **Sortable Participant Table:** Sort participants based on **Skill Badges Completed** and **Access Code Redemption Status**.
* 🔍 **Search Functionality:** Quickly search participants by name or email.
* 🎁 **CSV Upload for Admin:** Admin can upload a new CSV file to update the leaderboard.
* 📱 **Fully Responsive:** Built with Tailwind CSS for mobile and desktop layouts.
* 🚀 **Simple Backend:** Node.js + Express reads `data.csv` and serves the frontend.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS, JavaScript  
* **Backend:** Node.js, Express  
* **Data:** `data.csv`  

---

## 📁 Project Structure
``` 
gdg-leaderboard/
│
├── server.js # Node.js backend
├── data.csv # Participant data
└── public/
└── index.html # Frontend dashboard
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Abhinandankaushik/gdg-leaderboard.git
    cd gdg-leaderboard
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the server:**
    ```bash
    node server.js
    ```

4. **Open the dashboard:**
    Open your browser and go to:
    ```
    http://localhost:3000
    ```

---

## 🛠️ Admin CSV Upload

1. Access the **admin interface** at:

http://localhost:3000/admin

1. Enter the admin password: 
2. Upload a new CSV file.
3. The old `data.csv` content will be replaced automatically, and the dashboard will reflect the updated data.

---

## 📊 CSV Data Format

The CSV file should contain these columns (case-sensitive):

* `User Name`  
* `User Email`  
* `Access Code Redemption Status` (Yes/No)  
* `# of Skill Badges Completed` (Number)  
* `# of Arcade Games Completed` (Number)  
* `All Skill Badges & Games Completed` (Yes/No)  
* `Google Cloud Skills Boost Profile URL`  
* `Names of Completed Skill Badges` (Comma-separated)  
* `Names of Completed Arcade Games` (Comma-separated)  

---

## 🌐 Deployment

You can deploy your dashboard to **Render**, **Railway**, or any Node.js supported hosting service:

1. Push your code to GitHub.
2. Connect the repo on **Render.com** or **Railway.app**.
3. Set the start command:  
4. Deploy. Your live dashboard URL will be provided.

---

## 👤 Author

Made with ❤️ by **Abhinandan Kaushik**  
* GDG on Campus Lead, GECB  
* [GitHub](https://github.com/Abhinandankaushik)  
* [LinkedIn](https://www.linkedin.com/in/abhinandan16/)  
