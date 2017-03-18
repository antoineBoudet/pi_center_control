import {Component, Input} from '@angular/core';

@Component({
  selector: 'resumeComponent',
  styleUrls: ['./resume.component.css'],
  templateUrl: './resume.component.html'
})
export class ResumeComponent {
    @Input() specVideo: any;

    constructor () {}
    ngOnInit () {}
}
