import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  // get data from parent to modify button component

  @Input () id:string ="";
  @Input () name:string ="";
  @Input() displayText:string = '';

  @Output() triggerToastr:EventEmitter<void> = new EventEmitter<void>();

  showToastr(){
     this.triggerToastr.emit(); // allows parent to interact with button when clicked  
  }

}
