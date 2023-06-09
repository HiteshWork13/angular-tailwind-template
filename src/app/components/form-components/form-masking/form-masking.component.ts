import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  NgControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-form-masking',
  templateUrl: './form-masking.component.html',
  styleUrls: ['./form-masking.component.scss'],
})
export class FormMaskingComponent implements OnInit {
  form: FormGroup;
  phoneMask = '(000) 000 00 00';

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [''],
    });
  }
}
