const api = require("../utils/config");

class TaskAPI {
  async createTask(taskData) {
    try {
      const response = await api.post("/tasks", taskData);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error.response?.data || error.message);
      throw error;
    }
  }

  async deleteTask(taskId) {
    try {
      const response = await api.delete(`/tasks/${taskId}`);
      return response.status;
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message);
      throw error;
    }
  }

  async getTaskById(taskId) {
    try {
      const response = await api.get(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching task:", error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = new TaskAPI();
