import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,  Routes } from '@angular/router';

import { UsersListService } from './users-list.service';

import { AppComponent } from './app.component';
import { UmHeaderComponent } from './um-header/um-header.component';
import { UserMainComponent } from './user-main/user-main.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SearchListPipe } from './search-user.pipe';
import { UmFooterComponent } from './um-footer/um-footer.component';

const appRoutes : Routes = [
  {path : '', component:UserMainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UmHeaderComponent,
    UserMainComponent,
    SearchListPipe,
    AddUserFormComponent,
    SideNavbarComponent,
    UmFooterComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ UsersListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
