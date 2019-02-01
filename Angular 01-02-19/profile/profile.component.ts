import { Component, OnInit } from '@angular/core';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;

  constructor() { 
    this.user={name:'Jubin',
    job:'Student',
    Address:'mnjkbjbjh',
    Phone:['5646565494','4654946465','7794541565']
    };
  }
  togglecheck(){
    this.check=!this.check;
  }
  ngOnInit() {
  }

}
