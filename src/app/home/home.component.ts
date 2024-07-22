import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCard,
    MatCardTitle,
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  completed: number[] = [];

  ngOnInit(): void {
    if (localStorage.getItem('completed') !== null) {
      this.completed = JSON.parse(localStorage.getItem('completed')!);
    }
  }

}
