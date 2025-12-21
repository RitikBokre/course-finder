const sidebar = document.querySelector(".sidebar");
const eventCardEl = document.querySelector(".event-card");
const arrowButtons = document.querySelectorAll(".arrow-btn");
let activeEventIndex = 0;
const events = [
  {
    name: "Webinar on Study in Canada",
    date: "7 Jan, 2023",
    location: "University of New York",
    organizer: "Ankur Gupta",
    imageUrl: "./assests/people.png",
  },
  {
    name: "Workshop on Application Process",
    date: "15 Feb, 2023",
    location: "London School of Economics",
    organizer: "Priya Singh",
    imageUrl:
      "https://farm3.staticflickr.com/2927/33167804003_b19f5cd800_k.jpg?momo_cache_bg_uuid=14ad3de7-af7f-4ff0-a8bd-a2caeca10135",
  },
  {
    name: "Seminar on Scholarship Opportunities",
    date: "10 Mar, 2023",
    location: "University of Toronto",
    organizer: "Rahul Mehta",
    imageUrl:
      "https://momentum.photos/img/ef01c478-ba3b-4ee8-9d00-ee250a653e4a.jpg?momo_cache_bg_uuid=c23df098-5850-4fb4-89fb-dadeb421d4ef",
  },
];

function renderCard() {
  const event = events[activeEventIndex];
  eventCardEl.innerHTML = ` 
            <div class="event-image"><img alt="Event Image" src="${event.imageUrl}"></div>
            <div class="event-content">
              <div class="event-title">${event.name}</div>
              <div class="event-meta">📅 ${event.date}</div>
              <div class="event-meta"><img src="./assests/countries.svg" alt="location icon"> ${event.location}</div>
              <div class="event-meta">👤 By: ${event.organizer}</div>
              <button class="btn-register">Register Now</button>
            </div>`;
  if (activeEventIndex === 0) {
    arrowButtons[0].disabled = true;
  } else {
    arrowButtons[0].disabled = false;
  }
  if (activeEventIndex === events.length - 1) {
    arrowButtons[1].disabled = true;
  } else {
    arrowButtons[1].disabled = false;
  }
}

renderCard();

arrowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.arrow;
    if (direction === "left") {
      activeEventIndex = activeEventIndex - 1;
    } else if (direction === "right") {
      activeEventIndex = activeEventIndex + 1;
    }
    renderCard();
  });
});

function toggleSidebar() {
  const overlay = document.querySelector(".sidebar-overlay");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
}

sidebar.addEventListener("click", (e) => {
  const listItem = e.target.closest(".nav-item");
  if (listItem) {
    const currentActive = sidebar.querySelector(".nav-item.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    listItem.classList.add("active");
  }
});
