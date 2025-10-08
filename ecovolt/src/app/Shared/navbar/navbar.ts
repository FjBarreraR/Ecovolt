import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar, MatToolbarRow } from '@angular/material/toolbar';


@Component({
  selector: 'app-navbar',
  imports: [MatToolbar, MatToolbarRow, MaterialModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
