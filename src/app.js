const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => li.classList.toggle("done"));

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "×";
  removeBtn.className = "remove";
  removeBtn.addEventListener("click", () => li.remove());

  li.append(span, removeBtn);
  list.append(li);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  if (text.length > 0) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    span.addEventListener("click", () => li.classList.toggle("done"));
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.className = "remove";
    removeBtn.addEventListener("click", () => li.remove());
    li.append(span, removeBtn);
    list.append(li);
  }

  input.value = "";
  input.focus();
});
