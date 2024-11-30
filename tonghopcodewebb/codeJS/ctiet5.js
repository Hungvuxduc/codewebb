document.querySelectorAll(".thumbnail").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("mainImage").src = this.src;
  });
});
