import { AfterViewInit, Component } from '@angular/core';
import { DashboardDateFilter, DashboardLink, DateField, DateLinkFilter, FunnelChartVisualization, LinkFilter, NumberField, PivotVisualization, RdashDocument, RestServiceBuilder, TextField, UrlLink, VisualizationLinker } from '@revealbi/dom';
import { RevealSdkSettings, DashboardViewerOptions, MenuItem, SeriesColorRequestedArgs } from '@revealbi/ui';

RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RevealUIAngularDemo';
  dashboard: any;
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

  constructor() {
    this.generateDashboard().then(dashboard => {
      this.dashboard = dashboard;
    });
  }

  //use the DOM to create a new dashboard
  async generateDashboard() {
    const excelDataSourceItem = new RestServiceBuilder("http://dl.infragistics.com/reportplus/reveal/samples/Samples.xlsx")
    .setTitle("Excel Data Source")
    .setSubtitle("Marketing Sheet")
    .useExcel("Marketing")
    .setFields([
        new DateField("Date"),
        new NumberField("Spend"),
        new NumberField("Budget"),
        new NumberField("CTR"),
        new NumberField("Avg. CPC"),
        new NumberField("Traffic"),
        new NumberField("Paid Traffic"),
        new NumberField("Other Traffic"),
        new NumberField("Conversions"),
        new TextField("Territory"),
        new TextField("CampaignID"),
        new NumberField("New Seats"),
        new NumberField("Paid %"),
        new NumberField("Organic %")
    ])
    .build();

    const document = new RdashDocument("Linking Dashboard");
        
    document.filters.push(new DashboardDateFilter());

    const funnel = new FunnelChartVisualization("Funnel Chart", excelDataSourceItem).setLabel("CampaignID").setValue("Conversions");

    const linkedDocument = await RdashDocument.load("Campaigns");
    const filter = linkedDocument.filters.find(f => f.title === "CampaignID")!;

    const linker = new VisualizationLinker();
    linker.links = [
        new UrlLink("Open URL", "https://www.brianlagunas.com/[CampaignID]"),
        new DashboardLink("Open Dashboard", "Campaigns", 
            [ 
                new LinkFilter("Campaigns Filter", filter.id, filter.title),  
                new DateLinkFilter() 
            ])
    ]
    funnel.linker = linker;

    const pivot = new PivotVisualization("New Seats by Campaign ID", excelDataSourceItem).setRow("CampaignID").setValues("CTR", "Avg. CPC", "New Seats");
    pivot.linker = new VisualizationLinker()
        .addUrl("Open URL", "https://www.brianlagunas.com/[CampaignID]")
        .addDashboard("Open Dashboard", "Campaigns", [ new LinkFilter("Campaigns Filter", filter.id, filter.title),  new DateLinkFilter() ]);
    
    document.visualizations = [funnel, pivot];

    return document;
  }
}
