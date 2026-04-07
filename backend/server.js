const express = require('express'); // 1. Import Express
const cors = require('cors');       // 2. Import CORS

const app = express();              // 3. CREATE THE APP (This was missing!)
const PORT = 3000;

app.use(cors());                    // 4. Now use CORS
app.use(express.json());

const inventory = [
    { id: 1, productName: "Office Chair", category: "Furniture", price: 150, supplier: "Global Corp" },
    { id: 2, productName: "Gaming Desk", category: "Furniture", price: 250, supplier: "Build-It Co" },
    { id: 3, productName: "Monitor Stand", category: "Electronics", price: 45, supplier: "Tech Hub" },
    { id: 4, productName: "Wireless Mouse", category: "Electronics", price: 25, supplier: "Logi-Store" },
    { id: 5, productName: "LED Lamp", category: "Home", price: 30, supplier: "Bright-Life" },
    { id: 6, productName: "Standing Desk", category: "Furniture", price: 500, supplier: "Office Max" },
    { id: 7, productName: "USB-C Cable", category: "Electronics", price: 15, supplier: "Tech Hub" },
    { id: 8, productName: "Bookshelf", category: "Furniture", price: 120, supplier: "WoodWorks" },
    { id: 9, productName: "Ergonomic Keyboard", category: "Electronics", price: 85, supplier: "TypeRight" },
    { id: 10, productName: "Water Bottle", category: "Fitness", price: 20, supplier: "FitGear" }
];

app.get('/search', (req, res) => {
    let results = [...inventory];
    const { q, category, minPrice, maxPrice } = req.query;

    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
        return res.status(400).json({ message: 'Invalid price range' });
    }

    if (q) {
        results = results.filter(item => 
            item.productName.toLowerCase().includes(q.toLowerCase())
        );
    }

    if (category && category !== "All") {
        results = results.filter(item => 
            item.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (minPrice) {
        results = results.filter(item => item.price >= Number(minPrice));
    }

    if (maxPrice) {
        results = results.filter(item => item.price <= Number(maxPrice));
    }

    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});