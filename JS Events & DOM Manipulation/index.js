const btn = document.getElementById("submitBtn");
const input = document.getElementById("input");
const div = document.getElementById("container");
const deleteBtn = document.getElementById("deleteBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return alert("please fill the Input!");
  console.log(text);
  let html = `<div><span> ${text} </span><button class="deleteBtn"> Delete </button> </div> 
`;
  div.insertAdjacentHTML("afterbegin", html);
  input.value = "";
});

div.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
});
