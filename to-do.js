const display = document.getElementById("display");
const input = document.getElementById("input");
const historyContainer = document.getElementById("historyContainer");

let history = [];

function handleSubmit() {
  if (!display || !input) return;

  display.innerText += input.value;
  input.value = "";
}

function handleSave() {
  if (!display || !input) return;

  const value = display.innerText !== "" ? display.innerText : input.value;

  if (value.trim() === "") return;

  history.push(value);
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();

  display.innerText = "";
  input.value = "";
}
function renderHistory() {
  if (!historyContainer) return;

  historyContainer.innerHTML = "";

  history.forEach((item, index) => {
    const div = document.createElement("div");
    div.className =
      "bg-indigo-500/40 w-full border-2 border-indigo-500 flex items-center justify-between px-3 py-2 rounded select-none";

    const textSpan = document.createElement("span");
    textSpan.innerText = item;
    textSpan.className = "text-gray-800 font-medium cursor-pointer";
    textSpan.addEventListener("click", () => handleOpen(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "cursor-pointer";

    deleteBtn.innerHTML = `
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
</svg>

    `;

    deleteBtn.addEventListener("click", () => {
      history.splice(index, 1);
      localStorage.setItem("history", JSON.stringify(history));
      renderHistory();
    });

    div.appendChild(textSpan);
    div.appendChild(deleteBtn);
    historyContainer.appendChild(div);
  });
}
function handleOpen(index) {
  try {
    display.innerText = "";
    display.innerText += history[index];
  } catch (err) {
    console.log(err);
  }
  console.log("open");
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("history");
  if (saved) {
    history = JSON.parse(saved);
    renderHistory();
  }
});

async function wasim() {
  try {
    const response = await fetch(
      "https://mlkpg6w1-3000.inc1.devtunnels.ms/api/texts",
    );
    const data = await response.json();
    display.innerText = JSON.stringify(data);
  } catch (error) {
    console.error(error);
  }
}
async function sendData() {
  try {
    const response = await fetch(
      "https://mlkpg6w1-3000.inc1.devtunnels.ms/api/texts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: [input.value],
        }),
      },
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


wasim();
