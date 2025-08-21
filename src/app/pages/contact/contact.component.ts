import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public email: string = "aep.designsolutions@gmail.com"

  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(
      'service_sekzynt',
      'template_3px7sfd',
      e.target as HTMLFormElement,
      { publicKey: 'hr-2Arl25Z7ZbuI6q' }
    )
    .then((res: EmailJSResponseStatus) => {
      alert('The email has been successfully sent');
      (e.target as HTMLFormElement).reset();
    })
    .catch(err => {
      alert('Failed to send the email');
    });
  }
}
