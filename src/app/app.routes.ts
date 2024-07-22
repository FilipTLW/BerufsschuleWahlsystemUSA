import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsaBasicsComponent} from "./usa-basics/usa-basics.component";
import {ElectoralCollegeComponent} from "./electoral-college/electoral-college.component";
import {PresidentElectionsComponent} from "./president-elections/president-elections.component";
import {SenatoryComponent} from "./senatory/senatory.component";
import {Elections2024Component} from "./elections-2024/elections-2024.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usa-basics', component: UsaBasicsComponent},
  {path: 'president-elections', component: PresidentElectionsComponent},
  {path: 'electoral-college', component: ElectoralCollegeComponent},
  {path: 'senatory', component: SenatoryComponent},
  {path: 'elections-2024', component: Elections2024Component}
];
