import { Component, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from "./Shared/navbar/navbar";
import { InicioBundle } from "./Bundles/inicio-bundle/inicio-bundle";
import { SobreNosotros } from "./Bundles/sobre-nosotros/sobre-nosotros";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Navbar, InicioBundle, SobreNosotros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecovolt');
}
