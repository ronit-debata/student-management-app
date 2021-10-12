import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentData:Array<student> = [];
  constructor(private http:HttpClient) { }

  saveStudent(student:student){
    this.studentData.push(student)
    return this.http.post(`https://616151d7e46acd001777c008.mockapi.io/students`,student)
  }

  getAllUser(){
    return this.http.get<Array<student>>(`https://616151d7e46acd001777c008.mockapi.io/students`)
  }

  getUserByID(id:number){
    return this.http.get<student>(`https://616151d7e46acd001777c008.mockapi.io/students/${id}`)
  }

  updateUserById(userId:number,userdata:student){
    return this.http.put(`https://616151d7e46acd001777c008.mockapi.io/students/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://616151d7e46acd001777c008.mockapi.io/students/${id}`)
  }
}