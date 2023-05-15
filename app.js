const body = document.body;
const btn = document.createElement("button");
body.append(btn);

btn.textContent = "click";
btn.addEventListener("click", () => {
  alert("집가고싶다");
});
body.style.display = "flex";
body.style.height = "90vh";
body.style.alignItems = "center";
body.style.justifyContent = "center";

btn.style.width = "400px";
btn.style.height = "200px";
