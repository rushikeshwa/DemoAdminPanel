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
    selectedOption = [];

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

    profileForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: [''],
        inputType: this.formBuilder.array([
            // this.formBuilder.control('')
        ])
    });

    get inputType() {
        return this.profileForm.get('inputType') as FormArray;
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }

    label = [];
    addLabel(newLabel: string) {
        if (newLabel != null) {
            this.label.push(newLabel);
            this.inputType.push(this.formBuilder.control(''));
            this.selectedOption.push();
        }
    }

    onReset() {
        this.inputType.clear();
        this.profileForm.reset();
        // this.heroes.reset
    }
}
