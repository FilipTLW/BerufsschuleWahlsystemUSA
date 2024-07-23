import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";
import {QuizResult, QuizService} from "./quiz.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ResultComponent} from "./result/result.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    MatRadioGroup,
    MatRadioButton,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  notFound: boolean = false;

  id: number = -1;

  formGroup: FormGroup = new FormGroup([]);

  constructor(private activatedRoute: ActivatedRoute, protected quizService: QuizService, private dialog: MatDialog) {
    activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.notFound = isNaN(id) || id === undefined || id === null || !Object.keys(this.quizService.quizzes).includes(id.toString());
      if (this.notFound) return;
      this.id = id;
      this.quizService.quizzes[id].questions.forEach((_, index) => this.formGroup.addControl(index.toString(), new FormControl()));
    });

  }

  submit() {
    this.dialog.open(ResultComponent, <MatDialogConfig<QuizResult>>{
      data: {
        id: this.id,
        answers: this.formGroup.getRawValue()
      },
      disableClose: true
    });
  }
}
