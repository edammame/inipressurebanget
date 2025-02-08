function show() {
  let image = document.getElementById("box");
  image.src = "https://i.ebayimg.com/images/g/I88AAOSwmFBde3RN/s-l500.jpg";
  document.getElementById("pizzabox").style.display = "none";
  document.getElementById("text").innerHTML = "here's your pizza";
}

function chpz() {
  alert("Your Pizza Is Ready To Bake");
}

function spotify(link) {
  console.log(link.value);
  window.open("https://open.spotify.com", "_blank");
}

function games(link) {
  console.log(link.value);
  window.open("https://www.sonsaur.com/", "_blank");
}

function going(link) {
  console.log(link.value);
  window.open(
    "https://youtube.com/playlist?list=PLk_UmMfvZDx21Z9eEQ9DcIlUfZp1uwEup",
    "_blank"
  );
}
