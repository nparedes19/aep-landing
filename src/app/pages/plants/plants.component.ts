import { Component } from '@angular/core';

@Component({
  selector: 'app-plants',
  standalone: false,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent {
  public email: string = 'Feel free to reach out at aep.architecture@gmail.com —'
}
