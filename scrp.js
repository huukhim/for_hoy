const heartBtn = document.getElementById('heartBtn');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close');

heartBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});
document.getElementById("hoverButton").addEventListener("click", function() {
    alert("hong ún thì thoii~~");
    this.innerHTML = "khum";
});

document.getElementById("hoverButton1").addEventListener("click", function() {
    alert("sao zị hic hic zay thoi vậy :((");
});
const button = document.getElementById('hoverButton');

button.addEventListener('mouseover', function() {
  button.textContent = 'khum';
});

button.addEventListener('mouseout', function() {
  button.textContent = 'cóa';
});