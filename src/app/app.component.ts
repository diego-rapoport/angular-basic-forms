import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'forms'
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendForm() {
    if (!this.form.valid) {
      alert('Form not valid!')
    }
  }
}
