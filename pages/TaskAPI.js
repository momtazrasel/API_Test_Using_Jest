const boardAPI = require('../api/board.api');
const listAPI = require('../api/list.api');

class TaskAPI {
  async createBoardAndList(boardName, listName, order = 1) {
    const board = await boardAPI.createBoard(boardName);
    const list = await listAPI.createList(board.id, listName, order);
    return { boardId: board.id, listId: list.id };
  }

  async deleteList(listId) {
    return await listAPI.deleteList(listId);
  }
}

module.exports = new TaskAPI();
