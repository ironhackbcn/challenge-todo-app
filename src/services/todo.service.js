import AxiosCredentials from "./ApiCredentials.service";

export async function createTODOtask(values) {
  try {
    return await AxiosCredentials.post("/todos", values).then((data) => data);
  } catch (error) {
    console.log(error);
  }
}

export async function listTODOtask() {
  try {
    const tasks = await AxiosCredentials.get("/todos").then(({ data }) => data);
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTODOtask(id) {
  try {
    await AxiosCredentials.delete(`/todos/${id}`).then((data) => data);
  } catch (error) {
    console.log(error);
  }
}

export async function editTODOtask(id, values) {
  try {
    await AxiosCredentials.put(`/todos/${id}`, values).then(({data}) => data);
  } catch (error) {
    console.log(error);
  }
}
