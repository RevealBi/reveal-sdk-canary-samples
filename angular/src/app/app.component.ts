import { Component } from '@angular/core';
import { DataSourcesRequestedArgs, RevealViewOptions } from 'reveal-sdk-wrappers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RevealUIAngularDemo';
  open: boolean = true;
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

  dataSourcesRequested = (args: DataSourcesRequestedArgs) => {
    console.log(args);
    const restDataSource = new $.ig.RVRESTDataSource();
    restDataSource.url = "https://excel2json.io/api/share/6e0f06b3-72d3-4fec-7984-08da43f56bb9";
    restDataSource.title = "Sales by Category";
    restDataSource.subtitle = "Excel2Json";
    restDataSource.useAnonymousAuthentication = true;

    return { dataSources: [restDataSource], dataSourceItems: [] };
  }
}
