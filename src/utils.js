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

const getLibrary = async (query) => {
  try {
    const data = await fetch(
      "http://localhost:8080/library?user=" + query
    ).then((res) => res.json());
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
    return await axios({
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
  console.log("Removing");
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

export { bookSearch, getLibrary, addToLibrary, removeFromLibrary };
