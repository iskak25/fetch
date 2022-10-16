let fech = document.querySelector(".fech");
let a;
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    a = data.map((item) => {
      return `<li>${item.id}</li>
      <li>${item.title}</li>
      <li>${item.body}</li>
      `;
    });
    fech.innerHTML = a;
  });
