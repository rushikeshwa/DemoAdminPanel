import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

    ngOnInit() {

    }
    // variable declaration
    selectedOption = [];
    label = [];

    options = [
        { name: "text" },
        { name: "email" },
        { name: "password" },
        { name: "date" },
        { name: "file" },
        { name: "url" },
        { name: "number" }
    ]

    constructor(private formBuilder: FormBuilder) { }

    // form group 
    profileForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        inputType: this.formBuilder.array([
        ])
    });

    // validation
    get inputType() {
        return this.profileForm.get('inputType') as FormArray;
    }

    //submit form 
    onSubmit() {
        console.warn(this.profileForm.value);
    }

    // add label in input field
    addLabel(newLabel: string) {
        if (newLabel != null) {
            this.label.push(newLabel);
            this.inputType.push(this.formBuilder.control(''));
        }
    }
    // Reset all form 
    onReset() {
        this.inputType.clear();
        this.profileForm.reset();
    }
}
