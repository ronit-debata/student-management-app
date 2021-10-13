import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { student } from '../model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-see-attendance',
  templateUrl: './see-attendance.component.html',
  styleUrls: ['./see-attendance.component.css']
})
export class SeeAttendanceComponent implements OnInit {

  presentStudentList:Array<student> = []
  currDate=new Date().toISOString().slice(0,10);
  date=this.currDate;
  searchForm:FormGroup;
  constructor(private studentService:StudentService, private attendanceservice: AttendanceService,public datepipe:DatePipe,private router:Router) {
  this.searchForm= new FormGroup({
    attendancedate: new FormControl(),
  });
  }
  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.presentStudentList= [];
     this.attendanceservice.getAll().subscribe((data)=>{
      data.forEach((student)=>{
        if(student.date==this.date){
          console.log(student);
          student.present.forEach((studentdata) => {
            this.presentStudentList.push(studentdata);
          });
        }
      })
     })
  }
  changeDate(){
    this.loadData();
  }

}