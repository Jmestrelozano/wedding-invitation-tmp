import { Component } from '@angular/core';
import { TitleCoupleComponent } from '../../ui/title-couple/title-couple.component';
import { ModalComponent } from '../../common/modal/modal.component';
import { ContentConfirmationModalComponent } from '../../contents/content-confirmation-modal/content-confirmation-modal.component';

@Component({
  selector: 'app-confirmations',
  standalone: true,
  imports: [
    TitleCoupleComponent,
    ModalComponent,
    ContentConfirmationModalComponent,
  ],
  templateUrl: './confirmations.component.html',
  styleUrl: './confirmations.component.css',
})
export class ConfirmationsComponent {
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
