const taskAPI = require('../pages/TaskAPI');

describe('API Test Flow: Create Board → Create List → Delete List', () => {
  let boardId;
  let listId;

  test('Create board and list', async () => {
    const result = await taskAPI.createBoardAndList('Test Board', 'Test List', 3);
    boardId = result.boardId;
    listId = result.listId;

    expect(boardId).toBeDefined();
    expect(listId).toBeDefined();
    console.log('✅ Created board:', boardId, 'and list:', listId);
  });

  test('Delete created list', async () => {
    const response = await taskAPI.deleteList(listId);
    expect([200, 204]).toContain(response.status);
    console.log('🗑️ Deleted list with ID:', listId);
  });
});
