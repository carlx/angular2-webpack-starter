import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'event-description',
  templateUrl: 'event-description.component.html',
  styles: []
})

export class EventDescriptionComponent {
  @Input() event;

}
