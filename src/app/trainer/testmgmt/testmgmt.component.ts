import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-testmgmt',
  templateUrl: './testmgmt.component.html',
  styleUrl: './testmgmt.component.css'
})
export class TestmgmtComponent {

  constructor(public http:HttpClient, public app:AppComponent){}

  tests:any[]=[];
  load()
  {
    let url=this.app.baseUrl+'giveTests';
    this.http.get(url).subscribe((data:any)=>
    {
      this.tests=data;
    });
  }

  name:string='';
  start:Date=new Date();
  end:Date=new Date();
  questioncount:number=0;
  passingcount:number=0;

  add()
  {
    let obj={
      "name":this.name,
      "start":this.start,
      "end":this.end,
      "questioncount":this.questioncount,
      "passingcount":this.passingcount
    }

    let url=this.app.baseUrl+'addTest';
    this.http.post(url,obj).subscribe((data:any)=>
    {
      this.tests.push(data);
    });
  }
}
