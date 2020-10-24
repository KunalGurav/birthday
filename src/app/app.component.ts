import {AfterViewInit, Component, OnInit} from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: string;
  isCountDownFinished: boolean;
  startDate = new Date(2020, 9, 25, 0, 0, 0, 0);

  ngOnInit(): void {
    // this.isCountDownFinished = true;
    if (this.startDate.getTime() < Date.now()) {
      this.isCountDownFinished = true;
    } else {
      this.startCountDown(this.startDate);
      this.isCountDownFinished = false;
    }
  }

  startCountDown(startDate: Date) {
    setInterval(() => {
      let diffInSeconds = Math.abs((startDate.getTime() - Date.now()) / 1000);
      console.log('Diff In seconds', diffInSeconds);

      // calculate days
      const days = Math.floor(diffInSeconds / 86400);
      diffInSeconds -= days * 86400;
      console.log('calculated days', days);

      // calculate hours
      const hours = Math.floor(diffInSeconds / 3600) % 24;
      diffInSeconds -= hours * 3600;
      console.log('calculated hours', hours);

      // calculate minutes
      const minutes = Math.floor(diffInSeconds / 60) % 60;
      diffInSeconds -= minutes * 60;
      console.log('minutes', minutes);

      const seconds = Math.floor(diffInSeconds);
      console.log('Seconds', seconds);

      let difference = '';
      if (days > 0) {
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;
      }

      difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

      difference += (minutes === 0 || hours === 1) ? `${minutes} minutes, ` : `${minutes} minutes, `;

      difference += (seconds === 0 || seconds === 1) ? `${seconds} second` : `${seconds} seconds`;

      this.counter = difference;
    }, 1000);
  }
}
