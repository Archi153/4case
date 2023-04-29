import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
/*   public show_popular(){
    let pop = document.getElementById("popular");
    if (pop != null){
      pop.style.display='flex'
    }
    let pop_btn = document.getElementById("pop_btn");
    if (pop_btn != null){
      pop_btn.style.backgroundColor='#210549';
    }
  } */

  popToggled = false;
  public togglebgc(){
    this.popToggled=!this.popToggled;
  }
}