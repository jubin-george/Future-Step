import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() title:string;
  @Input() author:string;
  @Input() publisher:string;
  @Input() image:string;
  @Input() dept:string;
  @Output() sendbook:EventEmitter<any>= new EventEmitter();
  
  selectbook(){
    let selectedbook:any={swtitle:this.title,sauthor:this.author,spublisher:this.publisher,
      simage:this.image
      ,sdept:this.dept};
    this.sendbook.emit(selectedbook);
  }
  constructor() { }

  ngOnInit() {
  }

}
