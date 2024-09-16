// src/app/components/person-form/person-form.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.isEditMode = data ? true : false;

    this.personForm = this.fb.group({
      FirstName: [data ? data.FirstName : '', Validators.required],
      LastNameP: [data ? data.LastNameP : '', Validators.required],
      LastNameM: [data ? data.LastNameM : '', Validators.required],
      Address: [data ? data.Address : '', Validators.required],
      Phone: [data ? data.Phone : '', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.personForm.valid) {
      this.dialogRef.close(this.personForm.value);
    }
  }

}
