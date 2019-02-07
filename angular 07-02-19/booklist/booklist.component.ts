import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
public bookdetails:any=[
{title:"10174", author:"Big B",publisher:"MCA LE",image:"ic_propic3.png",dept:"Computer Science"},
{title:"10179",author:"Micromanzer",publisher:"MCA REG",image:"ic_propic2.png",dept:"Computer Application"},
{title:"10170",author:"Sachin Jose",publisher:"Mtech",image:"ic_propic4.png",dept:"Computer Application"}];
  
selbook:any;
addbook(data:any){
  this.selbook=data;

  }
constructor() { }

  ngOnInit() {
  }

}
