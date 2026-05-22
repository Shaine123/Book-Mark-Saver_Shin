const bookMarkName = document.getElementById("bookmark-name");
const bookMarkUrl = document.getElementById("bookmark-url");
const addBtn = document.getElementById("add-btn");
const bookMarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookMarks);

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

    createBookMarkItem(name, url);
    saveToStoStorage(name, url);
  }
}

function saveToStoStorage(name, url) {
  const bookMarks = getBookMarksFromStorage();

  bookMarks.push({
    name,
    url,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
}

function getBookMarksFromStorage() {
  const bookMarkList = JSON.parse(localStorage.getItem("bookmarks"));

  return bookMarkList ? bookMarkList : [];
}

function createBookMarkItem(name, url) {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("bookmark-item");

  const link = document.createElement("a");

  link.href = url;
  link.textContent = name;

  const btn = document.createElement("button");

  btn.textContent = "Remove";
  btn.classList.add("remove-btn");

  div.append(link);
  div.append(btn);

  li.append(div);
  bookMarkList.append(li);
}

function loadBookMarks() {
  const bookMarks = getBookMarksFromStorage();

  bookMarks.forEach((bookmark) => {
    createBookMarkItem(bookmark.name, bookmark.url);
  });
}
