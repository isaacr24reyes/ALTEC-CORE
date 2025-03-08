import { Component } from '@angular/core';
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  public formGroup!: UntypedFormGroup;
  onSubmit() {

  }
}
