// Theme toggle
document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Save trip to localStorage
document.getElementById("tripForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const trip = {
    destination: document.getElementById("destination").value,
    start: document.getElementById("startDate").value,
    end: document.getElementById("endDate").value,
    budget: document.getElementById("budget").value
  };
  const trips = JSON.parse(localStorage.getItem("trips") || "[]");
  trips.push(trip);
  localStorage.setItem("trips", JSON.stringify(trips));
  document.getElementById("confirmation").textContent = "✅ Trip saved!";
  this.reset();
});

// Load trips
window.onload = function () {
  const tripList = document.getElementById("tripList");
  if (tripList) {
    const trips = JSON.parse(localStorage.getItem("trips") || "[]");
    tripList.innerHTML = trips.map(t =>
      `<div class="card">
        <h3>${t.destination}</h3>
        <p>${t.start} to ${t.end}</p>
        <p>Budget: $${t.budget}</p>
      </div>`
    ).join("") || "<p>No trips saved.</p>";
  }

  const dests = document.getElementById("destinations");
  if (dests) {
    const places = ["Paris", "Tokyo", "Cairo", "Sydney"];
    dests.innerHTML = places.map(p =>
      `<div class="card">
        <h3>${p}</h3>
        <p>Explore this amazing destination!</p>
      </div>`
    ).join("");
  }
};
