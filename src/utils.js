const axios = require("axios");

const bookSearch = async (query) => {
  try {
    const data = await fetch("http://localhost:8080/search?q=" + query).then(
      (res) => res.json()
    );
    return data.items;
  } catch (error) {
    console.log(error);
    alert("Connection Error (search)");
    return [];
  }
};

const getLibrary = async () => {
  try {
    const data = await fetch("http://localhost:8080/library?user=a").then(
      (res) => res.json()
    );
    let dataArray = [];
    Object.keys(data).map((key) => dataArray.push(data[key]));
    return dataArray;
  } catch (error) {
    console.log(error);
    alert("Connection Error (get)");
    return [];
  }
};

const addToLibrary = async (bookId) => {
  try {
    return axios({
      method: "post",
      url: "http://localhost:8080/add",
      data: {
        userId: "a",
        bookId: bookId,
      },
    });
  } catch (error) {
    console.log(error);
    alert("Connection Error (add)");
  }
};

const removeFromLibrary = async (bookId) => {
  try {
    return axios({
      method: "delete",
      url: "http://localhost:8080/remove",
      data: {
        userId: "a",
        bookId: bookId,
      },
    });
  } catch (error) {
    console.log(error);
    alert("Connection Error (add)");
  }
};

const arrayToString = (array) => {
  if (array === undefined) return "";
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += array[i];
    string += ", ";
  }
  return string.slice(0, -2);
};

const stringToArray = (string) => {
  return string.split(", ");
};

const getISBN13 = (industryIdentifiers) => {
  industryIdentifiers = industryIdentifiers.map((id) => {
    if (id.type === "ISBN_13") return id.identifier;
    return null;
  });
  const a = industryIdentifiers.filter((element) => element != null)[0];
  return a;
};

const setISBN13 = (industryIdentifiers, ISBN13) => {
  return industryIdentifiers.map((id) => {
    if (id.type === "ISBN_13") {
      id.identifier = ISBN13;
    }
    return id;
  });
};

const editBook = async (bookId, bookData) => {
  try {
    return axios.put("http://localhost:8080/edit", {
      userId: "a",
      bookId: bookId,
      bookData: bookData,
    });
  } catch (error) {
    console.log(error);
    alert("Connection Error (add)");
  }
};

const bookInLibrary = (bookId, library) => {
  if (!library) return false;
  for (let i = 0; i < library.length; i++) {
    if (library[i].id === bookId) return true;
  }
  return false;
};

export {
  bookSearch,
  getLibrary,
  addToLibrary,
  removeFromLibrary,
  editBook,
  stringToArray,
  arrayToString,
  getISBN13,
  setISBN13,
  bookInLibrary,
};
