import { Component } from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  links: {[key: string]: {display: string, url: string}[]} = {
    "Informationen": [
      {
        "display": "Der Weg ins Weiße Haus: Wie funktioniert das Wahlsystem in den USA?",
        "url": "https://www.deutschlandfunk.de/der-weg-ins-weisse-haus-wie-funktioniert-das-wahlsystem-in-100.html"
      },
      {
        "display": "Präsidentschaftswahl in den Vereinigten Staaten",
        "url": "https://de.wikipedia.org/wiki/Pr%C3%A4sidentschaftswahl_in_den_Vereinigten_Staaten"
      },
      {
        "display": "Electoral College",
        "url": "https://de.wikipedia.org/wiki/Electoral_College"
      },
      {
        "display": "Präsident der Vereinigten Staaten",
        "url": "https://de.wikipedia.org/wiki/Pr%C3%A4sident_der_Vereinigten_Staaten"
      },
      {
        "display": "Präsidentschaftswahl in den Vereinigten Staaten 2024",
        "url": "https://de.wikipedia.org/wiki/Pr%C3%A4sidentschaftswahl_in_den_Vereinigten_Staaten_2024#Voraussichtliche_Kandidatin"
      },
      {
        "display": "USA und ihre Bundesstaaten",
        "url": "https://chatgpt.com"
      },
      {
        "display": "Präsidentschaftswahlen in den USA",
        "url": "https://chatgpt.com"
      },
      {
        "display": "Electoral College in den USA",
        "url": "https://chatgpt.com"
      },
      {
        "display": "Wahl des Repräsentantenhauses und des Senats in den USA",
        "url": "https://chatgpt.com"
      },
      {
        "display": "Wahl 2024 in den USA",
        "url": "https://chatgpt.com"
      }
    ],
    "Programmierung": [
      {
        "display": "Angular Material",
        "url": "https://v16.material.angular.io"
      },
      {
        "display": "Angular Material Icons",
        "url": "https://klarsys.github.io/angular-material-icons/"
      },
      {
        "display": "StackEdit",
        "url": "https://stackedit.io/app#"
      },
      {
        "display": "Markdown to HTML",
        "url": "https://markdowntohtml.com/"
      },
      {
        "display": "Angular",
        "url": "https://angular.dev/"
      },
      {
        "display": "PDFMe",
        "url": "https://github.com/pdfme/pdfme"
      },
      {
        "display": "Moment.js",
        "url": "https://momentjs.com/"
      }
    ],
    "Bilder": [
      {
        "display": "Patriot Day America",
        "url": "https://pptmon.com/patriot-day-america/"
      },
      {
        "display": "USA Flag Icon",
        "url": "https://image.similarpng.com/very-thumbnail/2021/04/Waving-United-states-flag-icon-isolated-on-transparent-background-PNG.png"
      },
      {
        "display": "USA Map",
        "url": "https://www.pngall.com/wp-content/uploads/12/USA-Map-PNG-Photo.png"
      },
      {
        "display": "Wallpaper",
        "url": "https://4kwallpapers.com/images/walls/thumbs_2t/11886.jpg"
      },
      {
        "display": "USA Weltkarte",
        "url": "https://www.kinderweltreise.de/fileadmin/user_upload/nordamerika/USA/Land/usa_lage_welt.png"
      },
      {
        "display": "United States Capitol",
        "url": "https://de.m.wikipedia.org/wiki/Datei:United_States_Capitol_-_west_front.jpg"
      },
      {
        "display": "Kalifornien",
        "url": "https://www.expedia.de/Kalifornien.dx206"
      },
      {
        "display": "Texas",
        "url": "https://www.expedia.de/Texas.dx245"
      },
      {
        "display": "New York",
        "url": "https://www.tourlane.de/nordamerika/usa/new-york/"
      },
      {
        "display": "Freiheitsstatue",
        "url": "https://usa-entdecker.de/new-york-sehenswuerdigkeiten/freiheitsstatue/"
      },
      {
        "display": "Grand Canyon Reisezeit",
        "url": "https://www.tourlane.de/nordamerika/usa/beste-reisezeit-grand-canyon/"
      },
      {
        "display": "USA Wahl 2020",
        "url": "https://www.forschung-und-lehre.de/fileadmin/user_upload/Rubriken/Politik/2020/11-20/USA-Wahl_c_dpa_223894812_955.jpg"
      },
      {
        "display": "Joe Biden Rücktritt",
        "url": "https://images.tagesschau.de/image/182511c7-0c7e-4064-bfeb-e6cd65e87450/AAABkNZ2e7Y/AAABjwnlXhk/original/biden-rucktritt-100.jpg"
      },
      {
        "display": "US-Senat",
        "url": "https://images.tagesschau.de/image/7c007758-a434-4421-a3c4-1090d725d340/AAABhnbbbLM/AAABjwnlMRA/16x9-768/us-senat-133.jpg"
      },
      {
        "display": "Capitol Building",
        "url": "https://cdn.prod.www.spiegel.de/images/f0336bd3-a320-43b6-9016-4b567505a966_w960_r1.778_fpx56_fpy49.97.jpg"
      },
      {
        "display": "Kamala Harris",
        "url": "https://bilder.deutschlandfunk.de/65/f4/84/eb/65f484eb-5f8d-4d31-b9ac-ea73a70d03d4/us-vizepraesidentin-kamala-harris-100-1920x1080.jpg"
      },
      {
        "display": "US Präsidentschaftswahl 2016 Ergebnisse",
        "url": "https://de.statista.com/graphic/1/630994/endergebnis-der-us-praesidentschaftswahl-2016-nach-anzahl-der-waehlerstimmen.jpg"
      },
      {
        "display": "Kongresswahlbezirk Karte",
        "url": "https://de.wikipedia.org/wiki/Kongresswahlbezirk#/media/Datei:Congressional_districts_118th_Congress_2023.svg"
      }
    ]
  }
  protected readonly Object = Object;
}
