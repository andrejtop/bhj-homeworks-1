let counter = 0;
let cookie = document.getElementById("cookie");
let cookieWidth = cookie.width;
let cookieHeight = cookie.height;

document.getElementById("cookie").addEventListener("click", () => {
  counter++;

  cookieWidth = cookieWidth === 100 ? 200 : 100;
  cookieHeight = cookieHeight === 100 ? 200 : 100;

  cookie.width = cookieWidth;
  cookie.height = cookieHeight;

  document.getElementById("clicker__counter").innerHTML = counter;
});