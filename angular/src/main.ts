import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { defineRevealSdkWrappers } from "reveal-sdk-wrappers";
defineRevealSdkWrappers();

declare let $: any;
$.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
