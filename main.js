let addFetch = document.querySelector(".list");
let btn = document.querySelector(".btn");
let a;
let backBtn = document.querySelector(".back_btn");
const url = "https://jsonplaceholder.typicode.com/posts";
function addText() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      a = data.map((item) => {
        return `
        <div class="list_container">
        <li>${item.id}</li>
        <li>${item.title}</li>
        <li>${item.body}</li>
        </div>
`;
      });
      addFetch.innerHTML = a;
    });
}

function render() {
  addFetch.innerHTML = "";
}

btn.addEventListener("click", addText);

backBtn.addEventListener("click", render);
