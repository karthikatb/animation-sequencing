const box = document.getElementById("box");

box.classList.add("fade");

box.addEventListener("animationend", (e) => {
  if (e.animationName === "fade") {
    box.className = "move";
  } else if (e.animationName === "move") {
    box.className = "rotate";
  } else if (e.animationName === "rotate") {
    box.className = "color";
  }
});