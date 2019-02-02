import { stringify } from '@angular/core/src/util';

export class student{
    id:number;
    name:string;
    password:string;
    status:number;
    constructor(){
        this.name='';
        this.password='';
       
    }
}