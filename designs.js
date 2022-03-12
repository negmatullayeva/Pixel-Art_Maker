document.addEventListener("DOMContentLoaded", () => {
  var formSize = document.querySelector("#sizePicker");
  var inputHeight = document.querySelector("#inputHeight");
  var inputWidth = document.querySelector("#inputWidth");
  var colorPicker = document.querySelector("#colorPicker"); //var colorWell;

  formSize.addEventListener("click", (e) => {
    e.preventDefault();

    var heightLength = Number(inputHeight.value);
    var widthLength = Number(inputWidth.value);
    var pixelCanvas = document.querySelector("#pixelCanvas");

    if (pixelCanvas.hasChildNodes()) {
      function removeCh() {
        if (pixelCanvas.hasChildNodes()) {
          pixelCanvas.removeChild(pixelCanvas.firstChild);
          removeCh();
        }
      }
      removeCh();
      for (let i = 0; i < heightLength; i++) {
        var tr = document.createElement("tr");
        for (let j = 0; j < widthLength; j++) {
          var td = document.createElement("td");
          tr.appendChild(td);
        }
        if (tr.hasChildNodes()) {
          pixelCanvas.appendChild(tr);
        }
      }
    } else {
      for (let i = 0; i < heightLength; i++) {
        var tr = document.createElement("tr");
        for (let j = 0; j < widthLength; j++) {
          var td = document.createElement("td");
          td.classList.add("white");
          tr.appendChild(td);
        }
        if (tr.hasChildNodes()) {
          pixelCanvas.appendChild(tr);
        }
      }
    }

    colorPicker.addEventListener("change", watchColorPicker, false);

    var yul;
    function watchColorPicker(event) {
      yul = event.target.value;
      document.querySelectorAll("td").forEach(function (p) {
        if (p.classList[0] === "white") {
          p.classList.remove("white");
        }
      });
    }
    document.querySelectorAll("td").forEach(function (p) {
      p.addEventListener("click", () => {
        p.style.backgroundColor = String(yul);
      });
    });
  });
});
