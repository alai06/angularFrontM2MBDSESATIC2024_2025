import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsService } from './shared/assignments.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, 
    MatIconModule, RouterLink,MatSidenavModule, FormsModule,MatToolbarModule,MatList,MatListItem,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titre = 'Premier projet Angular';
  opened = false;

  constructor(private assignmentsService: AssignmentsService,private authService : AuthService,private router : Router) {}

  login(){
    if(!this.authService.loggedIn){
      this.authService.logIn();
    }
    else{
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }
  genererDonneesDeTest() {
    console.log("Génération des données de test");
    //this.assignmentsService.peuplerBD()

    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("Toutes les données de test ont été insérées");

      // Je navigue vers la page qui affiche la liste des assignments
      window.location.href = '/home';
    });
    
  }
}
