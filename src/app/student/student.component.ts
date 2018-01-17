import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentName: string;
  studentPwd: string;
  studentGender: string;
  studentEducation:string[];
  termsNcond: string;

  constructor() { 
    this.studentEducation = ['M.Sc','MBA', 'Ph.d', 'LLM','MCA','B.E'];
  }

  ngOnInit() {
  }

  saveSubmit (sf){
    console.log(sf)
  }

}
