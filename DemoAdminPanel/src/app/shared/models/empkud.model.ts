export class EmployeeKud{
    id:number;
    name:string;
    gander:string;
    email?:string;
    phoneNumber?:number;
    contactPreferance:string;
    dateOfBirth:Date;
    department:string;
    isActive:boolean;
    photoPath?:string;
}

export class FormBuildInput{
    inputType:string;
    label:string;
    constructor(public inputTypeUser:string, public myLabel:string){
        this.inputType=inputTypeUser;
        this.label=myLabel;
    }
}