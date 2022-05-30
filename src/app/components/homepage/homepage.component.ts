import { Component, OnInit} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ButtonServiceService } from 'src/app/button-service.service';
import { ButtonComponent } from '../button/button.component';

export interface buttonInterface{
  id?: string,
  name: string,
  displayText: string,
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
export class HomepageComponent implements OnInit{

  headerText:string = 'Component Interaction';

  buttons:Array<buttonInterface> = [];

  displayText:string ='';

  constructor(private toast: NgToastService, private buttonService: ButtonServiceService) {}
  
  ngOnInit(): void {
    this.buttonService.getData().subscribe(
      (buttons: buttonInterface[]) => {
        this.buttons = buttons;
      }
    )
  }

  showToastr(getDisplayText?:any){
    this.toast.info({detail:"NOTIFICATION",summary:`${getDisplayText} was clicked`,duration:3000});
  }

}

