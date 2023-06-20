import axios from "axios";
import { Student } from "../types/Student";

export default async function EditStudent(id: number, student: Student) {
    const { data } = await axios.patch(`http://localhost:8080/api/v1/students/${id}`, student)
        .then(res => res.data);
    return data;
}