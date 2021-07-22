import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {

    // variable declaration
    selectedField: boolean = true;
    submitButton: boolean = false
    dataArray = [];


    constructor(private formBuilder: FormBuilder) { }

    // add input type and label form group
    addInputandLabel = new FormGroup({
        inputTypeUser: new FormControl(''),
        myLabel: new FormControl('')
    })
    // Main form group where all dynamic field added 
    mainForm = this.formBuilder.group({
        inputType: this.formBuilder.array([])
    });


    // method to create new form field
    addInputTypeLabel() {
        this.dataArray.push(this.addInputandLabel.value);
        this.inputType.push(this.formBuilder.control(''));
        this.selectedField = false;
        this.submitButton = true;
    }

    // input type option object array
    options = [
        { name: "text" },
        { name: "email" },
        { name: "password" },
        { name: "date" },
        { name: "file" },
        { name: "url" },
        { name: "number" }
    ]


    // validation
    get inputType() {
        return this.mainForm.get('inputType') as FormArray;
    }

    //submit form 
    onSubmit() {
        console.warn(this.mainForm.value);
    }

    // Reset all form 
    onReset() {
        this.addInputandLabel.reset();
        this.mainForm.reset();
    }
}
