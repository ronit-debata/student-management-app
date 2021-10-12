import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { attendance } from './model';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  attendanceData:Array<attendance> = [];
  constructor(private http:HttpClient) { }

  saveAttendance(attendance:attendance){
    this.attendanceData.push(attendance)
    return this.http.post(`https://616151d7e46acd001777c008.mockapi.io/attendance`,attendance)
  }
  getAll(){
    return this.http.get<Array<attendance>>('https://616151d7e46acd001777c008.mockapi.io/attendance')
  }

}