const api = require('./baseApi');

class ListAPI {
  async createList(boardId, name, order = 1) {
    const response = await api.post('lists', {
      boardId,
      name,
      order
    });
    return response.data;
  }

  async deleteList(listId) {
    return await api.delete(`lists/${listId}`);
  }
}

module.exports = new ListAPI();
