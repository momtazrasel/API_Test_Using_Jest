const api = require("../utils/config");

class TaskAPI {
  /**
   * Create a new task
   * @param {Object} taskData - Payload like { boardId, name, order }
   * @returns {Object} - The created task response
   */
  async createTask(taskData) {
    try {
      const response = await api.post("/tasks", taskData);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Delete a task by ID
   * @param {number|string} taskId
   * @returns {number} - HTTP status code
   */
  async deleteTask(taskId) {
    try {
      const response = await api.delete(`/tasks/${taskId}`);
      return response.status;
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Optional: Get task by ID
   */
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
