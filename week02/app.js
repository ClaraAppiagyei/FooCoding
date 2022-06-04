
'use strict';
/*
{
  const bookTitles = [
    'home_decor',
    'grandmas_recipes',
    'around_the_world',
    'travel_to_italy',
    'bake_with_me',
    'learn_italian',
    'learn_french',
    'learn_swedish',
    'cooking_for_beginners',
    'beautiful_homes',
  ];
}*/

const bookInfo = {

  home_decor: {
    title: 'Home Decor',
    language: 'English',
    published: '2017',
  },

  grandmas_recipes: {
    title: 'Grandmas Recipes',
    language: 'English',
    published: '1998',
  },

  around_the_world:{
    title: 'Around the World',
    language: 'English',
    published: '2016',
  },

  travel_to_italy: {
    title: 'Travel to Italy',
    language: 'English/Italian',
    published: '2008',
  },

  bake_with_me:{
    title: 'Bake with me',
    language: 'English',
    published: '2019',
  },

  learn_italian: {
    title: 'Learn Italian',
    language: 'Italian/English',
    published: '2011',
  },

  learn_french: {
    title: 'Learn French',
    language: 'French/English',
    published: '2011',
  },

  learn_swedish: {
    title: 'Learn Swedish',
    language: 'Swedish/Englsih',
    published: '2011',
  },

  cooking_for_beginners: {
    title: 'Cooking for beginners',
    language: 'English',
    published: '2021',
  },

  beatiful_homes: {
    title: 'Beautiful Homes',
    language: 'English',
    published: '2022',
  }
};

console.log(bookInfo);

const bookCovers = {
  home_decor: 'home_decor.JPG',
  grandmas_recipes: 'grandmas_recipes.JPG',
  around_the_world: 'around_the_world.JPG',
  travel_to_italy: 'travel-to-italy.JPG',
  bake_with_me: 'bake_with_me.JPG',
  learn_italian: 'learn_italian.JPG',
  learn_french: 'learn_french.JPG',
  learn_swedish: 'learn_swedish.JPG',
  cooking_for_beginners: 'cooking_for_beginners.JPG',
  beautiful_homes: 'beautiful_homes.JPG'
};

const h1 = document.createElement("h1");
h1.setAttribute("id", "h1");
h1.textContent = "Top 10 books to read on your vacation";
document.body.appendChild(h1);

const bookContainer = document.createElement("div");
bookContainer.setAttribute("class", "book-container");
document.body.appendChild(bookContainer);

function getBookList() {
  const bookListContainer = document.createElement("ul");
  bookListContainer.setAttribute("class", "book-list-container");
  bookContainer.appendChild(bookListContainer);

  for (const key in bookInfo) {
    let bookList = document.createElement("li");
    bookList.setAttribute("class", "novel");
    bookListContainer.appendChild(bookList);

    let bookTitle = document.createElement("h2");
    bookTitle.innerText = bookInfo[key].title;
    bookList.appendChild(bookTitle);

    let bookDate = document.createElement("p");
    bookDate.innerText = "Published: " + bookInfo[key].published;
    bookList.appendChild(bookDate);

    let bookLanguage = document.createElement("p");
    bookLanguage.innerText = "Language: " + bookInfo[key].language;
    bookList.appendChild(bookLanguage);
  }
}
getBookList();