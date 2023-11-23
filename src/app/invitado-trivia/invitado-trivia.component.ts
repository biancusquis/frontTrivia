import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invitado-trivia',
  templateUrl: './invitado-trivia.component.html',
  styleUrl: './invitado-trivia.component.css'
})
export class InvitadoTriviaComponent {
  
  constructor(private router: Router) { }

  iniciarChatWhatsApp() {
    // Redirige a WhatsApp con el número de teléfono proporcionado
    window.location.href = 'https://wa.me/1125509130';
  }

}
