let selectedCategory = null;
let selectedQuestions = [];

function selectCategory(cat) {
  selectedCategory = cat;
  selectedQuestions = [...questions[cat]];
  document.querySelectorAll('.categories button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.categories button[onclick*="${cat}"]`).classList.add('active');
}

function startGroupMode() {
  if (!selectedCategory) return alert("Please select a category first.");
  const count = prompt("How many players? (2–5)");
  if (!count || isNaN(count) || count < 2 || count > 5) return;
  const players = [];
  for (let i = 0; i < count; i++) {
    const name = prompt(`Enter name for Player ${i + 1}`);
    if (!name) return;
    players.push(name);
  }
  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("category", selectedCategory);
  window.location.href = "game.html";
}

function startPrivateRoom() {
  if (!selectedCategory) return alert("Please select a category first.");
  const id = Math.random().toString(36).substring(2, 8);
  localStorage.setItem("players", JSON.stringify(["You", "Partner"]));
  localStorage.setItem("category", selectedCategory);
  window.location.href = `game.html?room=${id}&category=${selectedCategory}`;
}
