function myFunction() {
  let wheat = document.getElementById("wheat").value;
  let goodEarth = document.getElementById("goodEarth").value;
  let cost = document.getElementById("cost").value;
  let square = document.getElementById("square").value;
  var total = +wheat + +goodEarth + +cost + +square;
  document.getElementById("totalPrice").innerHTML = total;
}

