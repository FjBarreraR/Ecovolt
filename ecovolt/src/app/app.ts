import { Component, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from "./Shared/navbar/navbar";
import { InicioBundle } from "./Bundles/inicio-bundle/inicio-bundle";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Navbar, InicioBundle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecovolt');
}
