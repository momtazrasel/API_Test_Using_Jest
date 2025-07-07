// test/task.test.js
const taskAPI = require("../pages/TaskAPI");

describe("Task API Tests", () => {
  let createdTaskId;

  test("Create a new task", async () => {
    const taskData = {
      title: "Test Task",
      description: "This is a test task",
    };

    const response = await taskAPI.createTask(taskData);
    createdTaskId = response.id;

    expect(response).toHaveProperty("id");
    expect(response.title).toBe(taskData.title);
  });

  test("Delete the created task", async () => {
    expect(createdTaskId).toBeDefined();

    const status = await taskAPI.deleteTask(createdTaskId);
    expect(status).toBe(200); // or 204 depending on API design
  });
});
