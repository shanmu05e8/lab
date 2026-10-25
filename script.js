
function add() {
let n = document.getElementById("name").value;
let r = document.getElementById("roll").value;
if (n && r) {
document.getElementById("list").innerHTML +=
"<li>" + n + " - " + r + "</li>";
}
}
