function myFunction() {
  var x = document.getElementById("myLinks");
  const elements = document.getElementsByClassName("main");
  if (x.style.display === "block") {
    x.style.display = "none";
    for (const element of elements) {
      element.style.display = 'flex';
    }
    document.getElementById("footer").style.display="flex";
  } else {
    x.style.display = "block";
    for (const element of elements) {
      element.style.display = 'none';
    }
    document.getElementById("footer").style.display="none";
  }
}