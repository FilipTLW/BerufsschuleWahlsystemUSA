import {Component, inject} from '@angular/core';
import {QuizResult, QuizService} from "../quiz.service";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    MatButton,
    MatRadioButton,
    MatRadioGroup,
    MatDialogContent,
    MatDialogActions,
    MatDialogModule,
    MatIcon
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  readonly dialogRef = inject(MatDialogRef<ResultComponent>);
  readonly dialogData = inject<QuizResult>(MAT_DIALOG_DATA);
  data: QuizResult;
  correctCount: number;
  percentage: number;

  constructor(protected quizService: QuizService, private router: Router) {
    this.data = this.dialogData!;
    this.correctCount = this.quizService.quizzes[this.data.id].questions.filter((question, index) => question.correctAnswerIndex === this.data.answers[index]).length;
    this.percentage = this.correctCount / this.quizService.quizzes[this.data.id].questions.length;
    if (this.percentage >= 0.6) {
      const completed: number[] = JSON.parse(localStorage.getItem('completed') ?? '[]');
      completed.push(this.data.id);
      localStorage.setItem('completed', JSON.stringify(completed));
    }
  }

  home() {
    this.dialogRef.close();
    void this.router.navigate(['']);
  }
}
