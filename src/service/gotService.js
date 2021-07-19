class GotClass {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} + , received ${res.status}`);
    }
    return await res.json();
  };

  getAllBooks = async () => {
    return await this.getResource(`/books/`);
  };

  getBook = async (id) => {
    return await this.getResource(`/books/${id}/`);
  };

  getAllCharacters = async () => {
    return await this.getResource(`/characters?page=5&pageSize=10`);
  };

  getCharacter = async (id) => {
    return await this.getResource(`/characters/${id}`);
  };

  getAllHouses = async () => {
    return await this.getResource(`/houses/`);
  };

  getHouse = async (id) => {
    return await this.getResource(`/houses/${id}/`);
  };
}

const gotService = new GotClass();

export default gotService;
