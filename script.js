// Fetch live disaster news using an API (mock example here)
document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "Fetching live updates...";
    
    // Example data - Replace with an actual API
    const mockData = [
      { title: "Flood Alert in Region A", timestamp: "2025-01-20" },
      { title: "Earthquake Reported in Region B", timestamp: "2025-01-19" }
    ];
  
    setTimeout(() => {
      newsContainer.innerHTML = mockData.map(news => `
        <div>
          <h3>${news.title}</h3>
          <p>${news.timestamp}</p>
        </div>
      `).join("");
    }, 1000);
  });
  
  // Initialize Interactive Map
  function initMap() {
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.innerHTML = "Map feature coming soon!";
  }
  
  initMap();
  