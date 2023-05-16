// filterObjects("all");


// function filterObjects(c){
//     var x, i;
//     x = document.getElementsByClassName(card);
//     if (c == "all") c == "";
//     for (i = 0; i < x.length; i++){
//         removeClass(x[i], "show");
//         if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")


//     }
// }


// function addClass(element, name){
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++){
//         if (arr1.indexOf(arr2[i]) == -1){
//             element.className += " " + arr2[i];
//         }
//     }
// }


// function removeClass(element, name){
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split("");
//     for (i = 0; i < arr2.length; i++){
//         while (arr1.indexOf(arr2[i]) > -1){
//              arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }







// overlay





function on(filename, className) {
  // create semi-transparent background
  const backgroundElement = document.createElement('div');
  backgroundElement.className = 'overlay-background';
  document.body.appendChild(backgroundElement);

  fetch(filename)
    .then(response => response.text())
    .then(html => {
      const overlayElement = document.createElement('div');
      overlayElement.innerHTML = html;
      overlayElement.className = className; // use a class instead of an ID
      document.body.appendChild(overlayElement);

      const styleElement = document.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.href = './overlay-style.css';
      document.head.appendChild(styleElement);

      // show overlay
      document.getElementsByClassName(className)[0].style.display = "block";
    });

  // show semi-transparent background
  document.getElementsByClassName('overlay-background')[0].style.display = "block";
}

function off(className) {
  // hide overlay
  var overlay = document.getElementsByClassName(className)[0]; // select the overlay element by class
  overlay.parentNode.removeChild(overlay);

  // hide semi-transparent background
  var background = document.getElementsByClassName('overlay-background')[0];
  background.parentNode.removeChild(background);
}





// FILTER

// // Get the container element
// const container = document.getElementById("container");

// // Get all the filter buttons
// const filterButtons = document.querySelectorAll("#buttons .btn");

// // Loop through the filter buttons and add event listeners
// filterButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     // Get the category from the button's data-category attribute
//     const category = button.dataset.category;

//     // Loop through all the cards and hide the ones that don't match the category
//     container.querySelectorAll(".card").forEach(card => {
//       if (category === "all" || card.classList.contains(category)) {
//         card.classList.remove("hide");
//       } else {
//         card.classList.add("hide");
//       }
//     });

//     // Add the active class to the clicked button and remove it from the others
//     filterButtons.forEach(btn => btn.classList.remove("active"));
//     button.classList.add("active");
//   });
// });




function filterObjects(category) {
  // Get all the objects
  var objects = document.getElementsByClassName("card");

  // If the category is "all", show all objects
  if (category == "all") {
      for (var i = 0; i < objects.length; i++) {
          objects[i].style.display = "flex";
      }
  } else {
      // Otherwise, hide objects that don't belong to the selected category and show those that do
      for (var i = 0; i < objects.length; i++) {
          if (objects[i].classList.contains(category)) {
              objects[i].style.display = "flex";
          } else {
              objects[i].style.display = "none";
          }
      }
  }
}

// Show all objects when the "Show all" button is clicked
function showAll() {
  filterObjects("all");
}

// Add event listeners to all the category buttons
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
      filterObjects(this.getAttribute("data-category"));
  });
}



/* function on(filename, className) {
    // create semi-transparent background
    const backgroundElement = document.createElement('div');
    backgroundElement.className = 'overlay-background';
    document.body.appendChild(backgroundElement);
  ​
    fetch(filename)
      .then(response => response.text())
      .then(html => {
        const overlayElement = document.createElement('div');
        overlayElement.innerHTML = html;
        overlayElement.className = className; // use a class instead of an ID
        document.body.appendChild(overlayElement);
  ​
        const styleElement = document.createElement('link');
        styleElement.rel = 'stylesheet';
        styleElement.href = './overlay-style.css';
        document.head.appendChild(styleElement);
  ​
        // show overlay
        document.getElementsByClassName(className)[0].style.display = "block";
      });
  ​
    // show semi-transparent background
    document.getElementsByClassName('overlay-background')[0].style.display = "block";
  }
  ​
  function off(className) {
    // hide overlay
    var overlay = document.getElementsByClassName(className)[0]; // select the overlay element by class
    overlay.parentNode.removeChild(overlay);
  ​
    // hide semi-transparent background
    var background = document.getElementsByClassName('overlay-background')[0];
    background.parentNode.removeChild(background);
  }
  ​
  Collapse */