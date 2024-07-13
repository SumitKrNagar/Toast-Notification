let btn = document.getElementsByClassName("btn");
let c = document.getElementsByClassName("cont")[0];

let count = 0;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", call);
  function call() {
    move();
    msg();
  }

  let k = i;

  function move() {
    btn[k].classList.add("move");
    setTimeout(() => {
      btn[k].classList.remove("move");
    }, 100);
  }

  function msg() {
    count++;

    if (count >= 3) {
      c.firstChild.remove();
    }

    let d = document.createElement("div");
    d.setAttribute("class", "msg");
    d.innerHTML = btn[k].innerHTML;
    let d2 = document.createElement("div");
    d2.setAttribute("class", "bar");

    let im = document.createElement("img");
    if (k == 0) {
      im.setAttribute("src", "icons/success.png");
      d2.setAttribute("style", "background-color: green;");
    } else if (k == 1) {
      im.setAttribute("src", "icons/warning.png");
      d2.setAttribute("style", "background-color: rgb(193, 193, 33);");
    } else if (k == 2) {
      im.setAttribute("src", "icons/error.png");
      d2.setAttribute("style", "background-color: red;");
    } else if (k == 3) {
      im.setAttribute("src", "icons/invalid.png");
      d2.setAttribute("style", "background-color: rgb(244, 86, 86);");
    }
    im.setAttribute("alt", "image");

    d.appendChild(d2);
    d.appendChild(im);
    c.appendChild(d);

    setTimeout(() => {
      d.remove();
      count--;
    }, 5000);
  }
}
