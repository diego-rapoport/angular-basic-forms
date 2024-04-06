import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import {
  FormArray,
  FormBuilder,
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
    password: ['', [Validators.required, Validators.minLength(8)]],
    socials: this.fb.array([]),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  sendForm() {
    if (!this.form.valid) {
      this.form.markAllAsTouched()
    }
  }

  get socials(): FormArray {
    return this.form.get('socials') as FormArray
  }

  newSocial(): FormGroup {
    return this.fb.group({ name: ['', Validators.required] })
  }

  addSocial() {
    this.socials.push(this.newSocial())
  }

  removeSocial(i: number) {
    this.socials.removeAt(i)
  }
}
