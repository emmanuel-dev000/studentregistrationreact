import axios from "axios";

export const DELETE_ERROR_MESSAGE = "ID was not found. Please try again.";
export default async function DeleteStudentById(id: number) {
    let deleteMessage = DELETE_ERROR_MESSAGE;
    if (isNaN(id) || id < 0) {
        return DELETE_ERROR_MESSAGE;
    }
    await axios.delete(`http://localhost:8080/api/v1/students/${ id }`)
        .then(res => deleteMessage = res.data);
    return "Delete successful";
}