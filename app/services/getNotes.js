import axios from "axios";

export async function getNotes() {
  try {
    const response = await axios.get(`${process.env.CLIENT_URL}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
