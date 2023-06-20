import axios from "axios";
import { Student } from "../types/Student";

export default async function RegisterStudent(registerStudent: Student) {
    const { data } = await axios.post("http://localhost:8080/api/v1/students", {
            studentId: registerStudent.studentId,
            name: registerStudent.name,
            middlename: registerStudent.middlename,
            lastname: registerStudent.lastname,
            address: registerStudent.address,
            email: registerStudent.email,
            phoneNumber: registerStudent.phoneNumber
        }, {
            headers: { 
                "Content-Type": "application/json"
            }
        }
    );
    return data;
}