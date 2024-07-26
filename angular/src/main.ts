import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { RevealSdkSettings } from '@revealbi/ui';

RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
