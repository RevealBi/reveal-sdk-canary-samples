import { Component } from '@angular/core';
import { RevealSdkSettings, DashboardViewerOptions, MenuItem } from '@revealbi/ui';

RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RevealUIAngularDemo';
  dashboard: string = "Sales";
  options: DashboardViewerOptions = {
    filters: {
      showFilters: false,
    },
    header: {
      menu: {
        showMenu: true,
        items: [
          { title: "Item 1", click: () => alert("Item 1") },
          { title: "Item 2", click: () => alert("Item 2") },
          { title: "Item 3", click: () => alert("Item 3") },
        ]
      }
    },
  }  
}
