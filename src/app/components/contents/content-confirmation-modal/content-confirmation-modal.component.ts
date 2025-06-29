import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-confirmation-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './content-confirmation-modal.component.html',
  styleUrl: './content-confirmation-modal.component.css',
})
export class ContentConfirmationModalComponent {
  isConfirmed: boolean = false;
  nameCurrent: string = '';
  listName: string[] = [];
  maximumQuotas: number = 7;
  registrationSent: boolean = false;

  saveName() {
    const nombreTrim = this.nameCurrent.trim();
    if (
      nombreTrim &&
      this.listName.length < this.maximumQuotas &&
      !this.listName.includes(nombreTrim)
    ) {
      this.listName.push(nombreTrim);
      this.nameCurrent = '';
    }
  }

  deleteName(index: number) {
    this.listName.splice(index, 1);
  }

  confirmSend() {
    if (this.listName.length < this.maximumQuotas) {
      const confirmacion = confirm(
        `Solo estás registrando ${this.listName.length} de ${this.maximumQuotas} cupos. ¿Estás seguro? No podrás modificar esto después.`
      );
      if (!confirmacion) return;
    }

    this.send();
  }

  send() {
    alert('Asistentes confirmados: ' + this.listName.join(', '));
    this.registrationSent = true;
  }
}
