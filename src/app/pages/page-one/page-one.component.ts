import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';
  selected =''
  select_2 = ''
  public webs(){
    document.getElementById(this.selected)?.setAttribute ("display","flex")
  }
  public change_color(){
    document.getElementById(this.selected)?.setAttribute ("fill",this.select_2)
  }
  public close_old(){
    document.getElementById(this.selected)?.setAttribute ("display","none")
  }
}
