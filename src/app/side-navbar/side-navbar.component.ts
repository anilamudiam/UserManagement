import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @ViewChild('mySidebar')
  mySidebar: ElementRef;
  constructor() { }
  openNav() {
      this.mySidebar.nativeElement.style.width = "160px";
  }

  closeNav() {
      this.mySidebar.nativeElement.style.width = "0";
  }
  ngOnInit() {
  }

}
