document.querySelector("img.menu").addEventListener("click", (e) => {
  console.log(e.target);
});

// margin top for most recent section cause of the fixed header
document.body.offsetWidth <= 550
  ? (document.getElementById("mostRecent").style.marginTop = `${
      document.getElementById("head").offsetHeight + 34
    }px`)
  : null;
