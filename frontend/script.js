async function searchInventory() {
    const q = document.getElementById('query').value;
    const category = document.getElementById('category').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    // Build the URL with query parameters
    const url = `http://localhost:3000/search?q=${q}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultsBody = document.getElementById('resultsBody');
        const noResults = document.getElementById('noResults');
        const resultsTable = document.getElementById('resultsTable');
        
        resultsBody.innerHTML = "";

        if (data.length === 0) {
            noResults.style.display = "block";
            noResults.innerHTML = `
                <div class="empty-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <h3>No items found</h3>
                <p>Try adjusting your search filters.</p>`;
            resultsTable.style.display = "none";
        } else {
            noResults.style.display = "none";
            resultsTable.style.display = "table";
            data.forEach(item => {
                const row = `<tr>
                    <td>${item.productName}</td>
                    <td><span class="category-badge ${item.category.toLowerCase()}">${item.category}</span></td>
                    <td class="price-cell">$${item.price}</td>
                    <td>${item.supplier}</td>
                </tr>`;
                resultsBody.innerHTML += row;
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Make sure your backend server is running!");
    }
}