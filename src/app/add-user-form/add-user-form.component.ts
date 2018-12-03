import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
public userModel :any = {userName:"",userNumber :"" ,userAddress :""};
@Input() editUserObj: any;
@Output () cancelFormToSend = new EventEmitter();
@Output () submitFormToSend = new EventEmitter();
  constructor() {  
   }
  cancelForm(){
  this.cancelFormToSend.emit('');
  }
  submitForm(){
    console.log("sample");
    let userModel = Object.assign({},this.userModel);
    this.submitFormToSend.emit(userModel);
  }
  ngOnInit() { 
    if(this.editUserObj && this.editUserObj.name){
      this.userModel = {
        userName:this.editUserObj.name,
        userNumber:this.editUserObj.number,
        userAddress:this.editUserObj.address,
      } 
    }
  }
  

}
