const api = require('./baseApi');

class BoardAPI {
  async createBoard(name) {
    const response = await api.post('boards', { name });
    return response.data;
  }
}

module.exports = new BoardAPI();
