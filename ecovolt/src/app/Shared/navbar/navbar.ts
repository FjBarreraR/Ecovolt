import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar, MatToolbarRow } from '@angular/material/toolbar';


@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatToolbarRow],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
