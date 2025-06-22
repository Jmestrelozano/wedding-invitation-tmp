import { Component } from '@angular/core';
import { TitleCoupleComponent } from "../../ui/title-couple/title-couple.component";

@Component({
  selector: 'app-confirmations',
  standalone: true,
  imports: [TitleCoupleComponent],
  templateUrl: './confirmations.component.html',
  styleUrl: './confirmations.component.css'
})
export class ConfirmationsComponent {

}
