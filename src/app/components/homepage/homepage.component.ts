import { AfterViewInit, Component, OnInit, ComponentFactoryResolver, ViewChild,  ElementRef, ViewContainerRef } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ButtonComponent } from '../button/button.component';

interface buttonInterface{
  id?: string,
  name: string,
  displayText?: string,
  text?: string | undefined,
  }

  const Components:any = {
    Button1: ButtonComponent,
    Button2: ButtonComponent,
  }

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,AfterViewInit{

  headerText:string = 'Component Interaction';

  buttons:Array<buttonInterface> = [
    {name:'Button1'},
    {name:'Button2'}
  ];

  displayText:string ='';

  btnTexts = [
    'hello',
    'test'
  ]

  constructor(private toast: NgToastService) {}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
  }

  showToastr(getDisplayText?:any){
    this.toast.info({detail:"NOTIFICATION",summary:`${getDisplayText} was clicked`,duration:3000});
  }

 

}

