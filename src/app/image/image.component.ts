import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  scrollToContact(){
    
    this.scroller.scrollToAnchor("contactMe");
  }
  getCv(){
    window.open('./../../assets/Sonam_SDE_1YOE.pdf', '_blank');
  }
}
