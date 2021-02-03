import { Component } from '@angular/core';
import { PredictionResult } from './PredictionResult';
import { PredictService } from './PredictService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui_container'

  output: JSON;
  obj: any;
  
  sentiment: string;
  sentiments: string[];
  predictionResult : PredictionResult ;
  strpredictionResult: string;

  constructor(private predictService: PredictService)
{


}

  handleClick() {
console.log('Clic on Predict' + this.sentiment)
this.sentiments = [this.sentiment]
console.log("tableau " + this.sentiments)
console.log("taille tableau " + this.sentiments.length)
this.obj = 
{
"x":this.sentiments
};

this.output = <JSON>this.obj;

console.log("json " + this.output )
this.predictService.predict(this.output )
  .subscribe((resp: PredictionResult) => {

    this.predictionResult = resp
    this.strpredictionResult = this.predictionResult[1]
   console.log(this.predictionResult);

});
}
}
