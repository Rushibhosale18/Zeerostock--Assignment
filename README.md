# Zeerostock Assignment – Inventory System

## 🚀 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Database (Part B):** SQLite / PostgreSQL
* **Tools:** VS Code, Postman

---

## ✨ Features

### Part A: Inventory Search

* Search products by name (case-insensitive)
* Filter by category
* Filter by price range (min & max)
* Combine multiple filters
* Display results in list/table
* Show "No results found" when empty

### Part B: Inventory Database

* Add suppliers (`POST /supplier`)
* Add inventory (`POST /inventory`)
* Get inventory (`GET /inventory`)
* Validation:

  * Supplier must exist
  * Quantity ≥ 0
  * Price > 0
* Group inventory by supplier with total value



## 📸 Screenshots

### 🔍 Inventory Search UI

![Uploading Screenshot (56).png…]()


### 📊 Filtered Results

![Uploading Screenshot (58).png…]()



### 🔧 API Testing (Postman)

![Uploading Screenshot (57).png…]()


## ▶️ How to Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Run Backend

```bash
cd backend
npm install
node server.js
```

### 3. Run Frontend

* Open `frontend/index.html` in your browser

---

## 🎯 Conclusion

This project demonstrates the implementation of a complete inventory management and search system with both frontend and backend integration.



