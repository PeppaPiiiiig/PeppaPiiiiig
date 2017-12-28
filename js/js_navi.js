window.onload = function () {
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    a.onmouseover = function () {
        b.style.display = "block";
    }
    a.onmouseout = function () {
        b.style.display = "none";
    }
}