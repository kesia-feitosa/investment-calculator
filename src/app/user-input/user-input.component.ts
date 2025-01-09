import { Component, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Input({ required: true }) user!: User;
}
