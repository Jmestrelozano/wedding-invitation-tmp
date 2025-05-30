import { Component } from '@angular/core';
import { BannerHomeComponent } from "../../../components/wedding-components/banner-home/banner-home.component";
import { EventDetailsComponent } from "../../../components/wedding-components/event-details/event-details.component";

@Component({
  selector: 'app-wedding-page',
  standalone: true,
  imports: [BannerHomeComponent, EventDetailsComponent],
  templateUrl: './wedding-page.component.html',
})
export class WeddingPageComponent {

}
