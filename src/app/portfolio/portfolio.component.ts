import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portImg = ["assets/images/port1.png", "assets/images/port2.png", "assets/images/port3.png", "assets/images/port3.png", "assets/images/port1.png", "assets/images/port2.png"]
  imgDisplay:string=''
  showImg(img: string) {
    this.imgDisplay=img 
  }
  close(){
    this.imgDisplay = ''
  }
}
