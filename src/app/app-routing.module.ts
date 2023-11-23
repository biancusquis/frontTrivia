import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoTriviaComponent } from './invitado-trivia/invitado-trivia.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

const routes: Routes = [
  { path: '', component: InvitadoTriviaComponent }, // Página principal
  { path: 'qr-code', component: QrCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
