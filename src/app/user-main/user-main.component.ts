import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { UsersListService } from '../users-list.service';
import { SearchListPipe } from '../search-user.pipe';


@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
public editUserIndex : number = -1;
public editUserObj:any;
public userList : any;
public selectedUser;
public showForm: boolean = false;
constructor(private userslistservice : UsersListService) { }

toggleUserForm(){
    this.showForm = !this.showForm;
    this.editUserObj = "";
    this.editUserIndex = -1;
 }

editUser(i:number,user:any){
  this.editUserIndex = i
  this.showForm = true;
  this.editUserObj = user;
}

deleteUser(i){
  if(confirm("Are you sure to delete this user ?" )) {
    this.userList.splice(i,1);
  }else{
    return  this.userList
  }
}

addUpdateUserList(newUser){
  let userObj = {
    id : newUser.userId,
    name : newUser.userName,
    number : newUser.userNumber,
    address : newUser.userAddress
  }
  if(this.editUserIndex >= 0){
    this.userList[this.editUserIndex] = userObj; 
  }else{
    this.userList.push(userObj);
  }
  this.editUserIndex = -1;
  this.showForm = false;
}

  ngOnInit() {
    this.userList = this.userslistservice.usersList;
  }
}
