const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("task-counter");

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("done");
    const remaining = list.querySelectorAll("li:not(.done)").length;
    counter.textContent = remaining === 1 ? "1 task left" : remaining + " tasks left";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "×";
  removeBtn.className = "remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    const remaining = list.querySelectorAll("li:not(.done)").length;
    counter.textContent = remaining === 1 ? "1 task left" : remaining + " tasks left";
  });

  li.append(span, removeBtn);
  list.append(li);

  const remaining = list.querySelectorAll("li:not(.done)").length;
  counter.textContent = remaining === 1 ? "1 task left" : remaining + " tasks left";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  input.value = "";
  input.focus();
});
