function generateTask(boardId = 2, order = 1) {
  return {
    boardId,
    name: `task_${Date.now()}`,
    order,
  };
}

module.exports = generateTask;
