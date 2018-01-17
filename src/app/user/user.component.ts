import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userform: FormGroup;
  education: string[];
  constructor(private fb:FormBuilder) { 
    this.userform = this.fb.group({
      'userName': ['', [Validators.required, Validators.minLength(6)]],
      'userPaswrd': ['', Validators.required],
      'userGender' : ['', Validators.required],
      'userEducation': ['', Validators.required],
      'termsNcondition': ['', Validators.required]
    });

    this.education = ['MSC', 'MCA', 'BSC', 'BCA']
  }

  ngOnInit() {
  }
  
  get userName(){
    return this.userform.get('userName')
  }
  get userPaswrd(){
    return this.userform.get('userPaswrd')
  }
  get userGender(){
    return this.userform.get('userGender')
  }
  get userEducation(){
    return this.userform.get('userEducation')
  }
  get termsCond(){
    return this.userform.get('termsCond')
  }

  checkifChecked(): void {
    console.log(this.userform.value.termsCond)
  }

  saveUser(uf){
    console.log(uf);
  }

}
