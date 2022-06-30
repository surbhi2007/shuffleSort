myFunction({ target: { innerText: "Sort" } });
document.addEventListener("click", myFunction);

function myFunction(evt) {
  document.getElementById("main").innerHTML = "";
  let elm = [
    { color: "#6F98A8", value: 1, className: "one" },
    { color: "#2B8EAD", value: 2, className: "two" },
    { color: "#2F454E", value: 3, className: "three" },
    { color: "#2B8EAD", value: 4, className: "four" },
    { color: "#2F454E", value: 5, className: "five" },
    { color: "#BFBFBF", value: 6, className: "six" },
    { color: "#BFBFBF", value: 7, className: "seven" },
    { color: "#6F98A8", value: 8, className: "eight" },
    { color: "#2F454E", value: 9, className: "nine" },
  ];
  

  if (evt.target.innerText == "Shuffle") {
    elm = elm.sort((a, b) => 0.5 - Math.random());
  }

  for (let i =0; i < elm.length; i++) {
    const iDiv = document.createElement("div");
    iDiv.innerText = elm[i].value;
    iDiv.className = elm[i].className;
    iDiv.style.backgroundColor = elm[i].color;
    document.getElementById("main").append(iDiv);
  }
}
