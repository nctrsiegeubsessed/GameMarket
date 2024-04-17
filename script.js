// Отримання необхідних елементів
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Функція відкриття вікна
btn.onclick = function() {
  modal.style.display = "block";
}

// Функція закриття вікна
span.onclick = function() {
  modal.style.display = "none";
}

// Закриття вікна при кліку поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}