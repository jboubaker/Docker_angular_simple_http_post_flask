import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui_container'


  
  sentiment: string;

  handleClick() {
console.log('Clic on Predict' + this.sentiment)
}
}
