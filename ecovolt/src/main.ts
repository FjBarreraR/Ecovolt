import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
