const bookSearch = async (query) => {
  try {
    const data = await fetch("http://localhost:8080/search?q=" + query).then(
      (res) => res.json()
    );
    return data.items;
  } catch (error) {
    console.log(error);
    alert("Server Error");
    return [];
  }
};

export { bookSearch };
