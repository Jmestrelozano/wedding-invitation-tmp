import { Component } from '@angular/core';
import { EventCardComponent } from '../../cards/event-card/event-card.component';

@Component({
  selector: 'app-event-schedule',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.css',
})

export class EventScheduleComponent {}
