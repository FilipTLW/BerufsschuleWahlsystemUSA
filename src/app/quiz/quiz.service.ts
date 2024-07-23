import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizResult {
  id: number;
  answers: {[key: number]: number};
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  get quizzes(): {[id: number]: Quiz} {
    return {
      "1": {
        "title": "Die USA und ihre Bundesstaaten",
        "description": "Fragen zu den USA und ihren Bundesstaaten",
        "questions": [
          {
            "question": "Über welche Fläche erstrecken sich die USA?",
            "answers": [
              "357.588 km²",
              "9.834.000 km²",
              "51.513.980 km²",
              "143.446.060 km²"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "In welchem US-Bundesstaat befindet sich das Silicon Valley?",
            "answers": [
              "Texas",
              "Michigan",
              "Kalifornien",
              "New York"
            ],
            "correctAnswerIndex": 2
          },
          {
            "question": "Welcher Staat grenzt südlich an die USA?",
            "answers": [
              "Kanada",
              "Brasilien",
              "Vereinigtes Königreich",
              "Mexiko"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "Welche Staatsform ist die USA?",
            "answers": [
              "Föderale Republik",
              "Volksrepublik",
              "Aristokratische Republik",
              "Konstitutionelle Monarchie"
            ],
            "correctAnswerIndex": 0
          },
          {
            "question": "Welche staatliche Institution repräsentiert die Exekutive?",
            "answers": [
              "Senat",
              "Oberstes Gericht",
              "Repräsentantenhaus",
              "Präsident"
            ],
            "correctAnswerIndex": 3
          }
        ]
      },
      "2": {
        "title": "Präsidentschaftswahl in der USA",
        "description": "Fragen zur Präsidentschaftswahl in den USA",
        "questions": [
          {
            "question": "Wer ist der aktuelle Präsident der USA?",
            "answers": [
              "Donald Trump",
              "Barack Obama",
              "Joe Biden",
              "Kamala Harris"
            ],
            "correctAnswerIndex": 2
          },
          {
            "question": "Wie oft wird der Präsident in den USA gewählt?",
            "answers": [
              "Alle 2 Jahre",
              "Alle 4 Jahre",
              "Alle 5 Jahre",
              "Alle 6 Jahre"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Ab welchem Alter darf man in den USA wählen?",
            "answers": [
              "16 Jahre",
              "18 Jahre",
              "21 Jahre",
              "25 Jahre"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Wer wählt den Präsidenten der USA?",
            "answers": [
              "Ex-Präsident",
              "Kongress",
              "Electoral College",
              "Jeder US-Bürger"
            ],
            "correctAnswerIndex": 2
          },
          {
            "question": "An welchem Tag findet in den USA die Wahl immer statt?",
            "answers": [
              "Der erste Dienstag nach dem ersten Montag im November",
              "Der erste Sonntag nach dem ersten Montag im November",
              "Der erste Sonntag nach dem ersten Montag im Dezember",
              "Der erste Dienstag nach dem ersten Montag im Dezember"
            ],
            "correctAnswerIndex": 0
          }
        ]
      },
      "3": {
        "title": "Das Electoral College",
        "description": "Fragen zum Electoral College der USA",
        "questions": [
          {
            "question": "Was ist die Funktion des Electoral College?",
            "answers": [
              "Wählt den Senat und das Repräsentantenhaus",
              "Wählt den Präsidenten",
              "Macht Gesetzesvorschläge an den Präsidenten",
              "Wird bei Stimmgleichheit hinzugezogen"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Aus wie vielen Menschen besteht das Electoral College?",
            "answers": [
              "51",
              "270",
              "435",
              "538"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "Wozu führt die Wahl durch das Electoral College anstatt durch das Volk?",
            "answers": [
              "Mehr Einfluss für die Unter- und Mittelschicht",
              "Mehr Einfluss für größere, urbane Zonen",
              "Mehr Einfluss für die reiche Oberschicht",
              "Mehr Einfluss für kleinere Staaten"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "In welchem Jahr wurde das Electoral College in den USA eingeführt?",
            "answers": [
              "1776",
              "1787",
              "1803",
              "1866"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "In welchem Monat stimmen die Wahlmänner ab?",
            "answers": [
              "Oktober",
              "November",
              "Dezember",
              "Januar"
            ],
            "correctAnswerIndex": 2
          }
        ]
      },
      "4": {
        "title": "Wahl des Repräsentantenhauses und des Senats",
        "description": "Fragen zur Wahl des Repräsentantenhauses und des Senats in den USA",
        "questions": [
          {
            "question": "Wie beträgt die Amtszeit der Abgeordneten des Repräsentantenhauses?",
            "answers": [
              "Alle 2 Jahre",
              "Alle 4 Jahre",
              "Alle 5 Jahre",
              "Alle 6 Jahre"
            ],
            "correctAnswerIndex": 0
          },
          {
            "question": "Wie beträgt die Amtszeit der Abgeordneten des Senates?",
            "answers": [
              "Alle 2 Jahre",
              "Alle 4 Jahre",
              "Alle 5 Jahre",
              "Alle 6 Jahre"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "Wer wählt den Senat und das Repräsentantenhaus in den USA?",
            "answers": [
              "Präsident",
              "Electoral College",
              "Abgeordnete der Bundesstaaten",
              "Jeder Bürger"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "Was ist keine Aufgabe des Repräsentantenhauses?",
            "answers": [
              "Gesetzgebung",
              "Ratifizierung von Verträgen",
              "Bewilligung des Haushalts",
              "Amtsenthebungsverfahren"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Was ist keine Aufgabe des Senats?",
            "answers": [
              "Gesetzgebung",
              "Ratifizierung von Verträgen",
              "Bewilligung des Haushalts",
              "Amtsenthebungsverfahren"
            ],
            "correctAnswerIndex": 2
          }
        ]
      },
      "5": {
        "title": "Aussicht auf die Wahlen 2024",
        "description": "Fragen zu den Wahlen in den USA im Jahr 2024",
        "questions": [
          {
            "question": "Wann findet die Wahl in 2024 statt?",
            "answers": [
              "1. November",
              "5. November",
              "8. November",
              "11. November"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Wer kandidiert für die Republikaner in 2024?",
            "answers": [
              "Joe Biden",
              "Kamala Harris",
              "Ron Desantis",
              "Donald Trump"
            ],
            "correctAnswerIndex": 3
          },
          {
            "question": "Wer kandidiert für die Demokraten in 2024?",
            "answers": [
              "Joe Biden",
              "Kamala Harris",
              "Ron Desantis",
              "Donald Trump"
            ],
            "correctAnswerIndex": 1
          },
          {
            "question": "Wann wird der/die neue Präsident:in eingeschworen?",
            "answers": [
              "November",
              "Dezember",
              "Januar",
              "Februar"
            ],
            "correctAnswerIndex": 2
          },
          {
            "question": "Welche Staaten sind in dieser Wahl besonders entscheidend?",
            "answers": [
              "Ring States",
              "Swing States",
              "King States",
              "Sing States"
            ],
            "correctAnswerIndex": 1
          }
        ]
      }
    }
  }
  constructor() { }
}
