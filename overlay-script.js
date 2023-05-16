// gallery



function switchImage(container, thumbnail) {
  // Get the main image element
  var mainImage = container.querySelector('.overlay-gallery #overlay-main-img');

  // Update the main image source with the thumbnail's source
  mainImage.src = thumbnail.src;

  // Remove the 'active' class from all thumbnails
  var thumbnails = container.querySelectorAll('.overlay-thumbnail');
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
  }

  // Add the 'active' class to the clicked thumbnail
  thumbnail.classList.add('active');
}

// Attach a click event listener to each thumbnail in the overlay
var thumbnails = document.querySelectorAll('.overlay-thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function(event) {
    // Find the overlay container element
    var container = event.target.closest('.overlay');

    // Switch the main image
    switchImage(container, event.target);
  });
}







// const mainImg = document.getElementById("overlay-main-img");
//   const thumbnails = document.querySelectorAll(".overlay-thumbnail");
  
//   for (let i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].addEventListener("click", function() {
//       mainImg.src = this.src;
//     });
//   }



//   function off(className) {
//     document.getElementsByClassName(className).style.display = "none";
//   }


