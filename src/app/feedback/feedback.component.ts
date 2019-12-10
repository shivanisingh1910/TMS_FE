import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { FeedbackResolver } from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackmodelobj:FeedbackResolver;

  constructor(public newObj:FeedbackService) { }
  Submit()
  {
    var data=this.newObj.postfeedback(this.feedbackmodelobj).subscribe((data)=>{
      console.log(data);
  })
}

  ngOnInit() {
   
  }

}
