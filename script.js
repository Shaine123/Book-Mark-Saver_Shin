const bookMarkName = document.getElementById("bookmark-name");
const bookMarkUrl = document.getElementById("bookmark-url");
const addBtn = document.getElementById("add-btn");
const bookMarkList = document.getElementById("bookmark-list");

// document.addEventListener("DOMContentLoaded", loadFromStorage);

addBtn.addEventListener("click", addToStorage);

function addToStorage() {
  const name = bookMarkName.value.trim();
  const url = bookMarkUrl.value.trim();

  if (!name && !url) {
    alert("Please enter Bookmark Name or Bookmark URL");
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return;
    }

    console.log("valid");
  }
}
