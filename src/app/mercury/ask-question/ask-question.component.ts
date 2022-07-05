import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  message: string = 'please enter the question';
  questionStr: any = '';
  bgColor: string = 'red';
  categories = [
    { name: 'Universe', abbrev: 'AZ' },
    { name: 'Earth', abbrev: 'CA' },
    { name: 'Mars', abbrev: 'CO' },
    { name: 'Neptune', abbrev: 'NY' },
    { name: 'Milkyway', abbrev: 'PA' },
  ];
  
  error: boolean;
  faqForm: FormGroup;

  constructor() {
    console.log("constructor", new Date())
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", new Date())
  }

  // Run multiple times when ever change detection runs. 
  // Example Input field is populated ngModel binding is invoked 
  ngDoCheck(): void {
    console.log("ngDoCheck", new Date())
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", new Date())
  }

  // after the constructor 
  // Component Object is created 
  // Runs one time
  ngOnInit(): void {
    console.log("ngOnInit", new Date());
    this.faqForm = new FormGroup({
      category: new FormControl(this.categories),
      question: new FormControl(null, Validators.required) 
    });
  }

  questionControl(): FormControl<any> {
    return this.faqForm.get('faqForm') as FormControl;
  }

  onSubmit(formData: any): void {
    if (formData.question != null) {
      this.questionStr = formData.question;
    } else {
      this.error = true;
      this.message = 'Please enter question';
    }

  }

  onHandleError() {
    this.error = false;
  }
}
