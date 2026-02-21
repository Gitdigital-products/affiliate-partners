async function loadPartners() {
    try {
        const response = await fetch('partners.json');
        const partners = await response.json();
        const grid = document.getElementById('partner-grid');

        grid.innerHTML = partners.map(p => `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
                <p><strong>${p.commission} Commission</strong></p>
                <a href="${p.link}" class="btn">View Details</a>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error loading partners:", error);
    }
}
loadPartners();

