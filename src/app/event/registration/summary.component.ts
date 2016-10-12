import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: 'summary.component.html',
  styles: []
})

export class SummaryComponent {
  @Input() event: Object;
}
