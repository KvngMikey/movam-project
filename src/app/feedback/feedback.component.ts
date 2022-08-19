import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  reportSubmitted;

  constructor(private dataService: DataService) {
    this.dataService.reportSubmitted.subscribe((data) => {
      this.reportSubmitted = data;
    });
  }

  ngOnInit(): void {}
}
