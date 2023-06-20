import axios from "axios";
import { useState, useEffect } from "react";
import { Student } from "../types/Student";

export default function GetAllStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/students")
      .then(res => setStudents(res.data));
  }, []);
  return students;
}