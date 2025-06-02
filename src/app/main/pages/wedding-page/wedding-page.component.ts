import { Component } from '@angular/core';
import { BannerHomeComponent } from "../../../components/wedding-components/banner-home/banner-home.component";
import { WeddingCountdownComponent } from "../../../components/wedding-components/wedding-countdown/wedding-countdown.component";
import { EventScheduleComponent } from "../../../components/wedding-components/event-schedule/event-schedule.component";

@Component({
  selector: 'app-wedding-page',
  standalone: true,
  imports: [BannerHomeComponent, WeddingCountdownComponent, EventScheduleComponent],
  templateUrl: './wedding-page.component.html',
})
export class WeddingPageComponent {

}
