import axios from "axios";

export async function getNotes() {
  try {
    const response = await axios.get(`/api/notes`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
