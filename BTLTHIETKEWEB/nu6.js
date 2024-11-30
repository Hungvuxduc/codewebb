 // JavaScript to change main image when a thumbnail is clicked
      document.querySelectorAll(".thumbnail").forEach((img) => {
        img.addEventListener("click", function () {
          document.getElementById("mainImage").src = this.src;
        });
      });