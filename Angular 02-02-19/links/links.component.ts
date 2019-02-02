import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { NgForm } from '@angular/forms';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  student=new student();
  isRegistered=false;
  constructor(private applyService: NewsService) {
    
  }

  ngOnInit() {
  }
registration(f:NgForm){
  this.applyService.store(this.student).subscribe(
    data => {this.isRegistered=true;
    console.log('registered successfully');
  f.reset();
},
(err) => {this.isRegistered=false;}
  );
}
}
