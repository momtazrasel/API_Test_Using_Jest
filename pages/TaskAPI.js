const api = require("../utils/config");

class TaskAPI {
  async createTask(taskData) {
    const res = await api.post("/tasks", taskData);
    return res.data; // returns the created task
  }

  async deleteTask(taskId) {
    const res = await api.delete(`/tasks/${taskId}`);
    return res.status;
  }
}

module.exports = new TaskAPI();
