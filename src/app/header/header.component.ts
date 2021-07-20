import { Component, OnInit,HostListener } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavOpen:boolean=false;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector(".container-fluid");
    let element2 = document.querySelector(".navbar");
     if (window.pageYOffset > 150) {
       
       element.classList.add('navbar-bgcolor-scroll');
       element2.classList.add('navbar-bgcolor-scroll');
     } 
     else{
      element.classList.remove('navbar-bgcolor-scroll');
      element2.classList.remove('navbar-bgcolor-scroll');
     }
  }
  headerClk(option:number){
    if(option==1){
      this.scroller.scrollToAnchor("aboutId");
    }
    else if(option==2){
      this.scroller.scrollToAnchor("expId");
    }
    else if(option==3){
      this.scroller.scrollToAnchor("projectId");
    }
    else if(option==4){
      this.scroller.scrollToAnchor("skillsId");
    }
    else if(option==5){
      this.scroller.scrollToAnchor("eduId");
    }
    else if(option==6){
      this.scroller.scrollToAnchor("contactMe");
    }
  }
  openNav(){
    this.isNavOpen=!this.isNavOpen;
    let navIcon=document.querySelector(".navbar-toggler");
    let nameText=document.querySelector(".navbar-brand");
    if(this.isNavOpen==true){
      document.getElementById('navbar-icon-cross').style.backgroundImage='url("./assets/del.png")';
      navIcon.classList.add('navbarTranslate');
      nameText.classList.add('navbarNameTranslate');
    }
    else{
      let icon=document.getElementById('navbar-icon-cross');
      icon.style.backgroundImage='url("./assets/menu.png")';
      icon.style.height='18px';
      navIcon.classList.remove('navbarTranslate');
      nameText.classList.remove('navbarNameTranslate');
    }
  }
}
