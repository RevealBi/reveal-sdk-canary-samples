import { Component } from '@angular/core';
import { RevealViewOptions } from 'reveal-sdk-wrappers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RevealUIAngularDemo';
  open:boolean = true;
  dashboard: any = "Sales";
  options: RevealViewOptions = {
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
