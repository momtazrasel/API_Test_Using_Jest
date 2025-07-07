const taskAPI = require("../pages/TaskAPI");
const generateTask = require("../utils/generateTask");

describe("Task API Tests with Dynamic Data", () => {
  let createdTaskId;
  let taskPayload;

  test("Create a new dynamic task", async () => {
    taskPayload = generateTask();

    const response = await taskAPI.createTask(taskPayload);
    createdTaskId = response.id;

    console.log("Created Task:", response);

    expect(response).toHaveProperty("id");
    expect(response.name).toBe(taskPayload.name);
    expect(response.boardId).toBe(taskPayload.boardId);
  });

  test("Delete the created task", async () => {
    expect(createdTaskId).toBeDefined();
    const status = await taskAPI.deleteTask(createdTaskId);
    expect([200, 204]).toContain(status);
  });
});
