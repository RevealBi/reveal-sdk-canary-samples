# Reveal SDK Canary Samples

The samples in this repo demonstrate the the future API of the Reveal SDK. All work here will eventualy become the next evolution of the Reveal SDK.

The RevealView will be evetually replaced by the new DashboardViewer. The DashboardViewer relies on the "options pattern" to control the various elements of the viewer control.

```js
//load dashboard on creation
const dv = new DashboardViewer("#viewer", "Sales");

//provide dashboard object
const dashboard = await $.ig.RVDashboard.loadDashboard("Sales");
const dv = new DashboardViewer("#viewer", dashboard);

//provide options
const dv = new DashboardViewer("#viewer", "Sales", {
    canSaveAs: false,
    dataSources: [
        { type: "REST", title: "Sales by Category", subtitle: "Excel2Json", url: "https://excel2json.io/api/share/6e0f06b3-72d3-4fec-7984-08da43f56bb9" },
    ],
    header: {
        menu: {
            items: [
                {
                    title: "My Menu Item", click: () => {
                        console.log("I clicked this");
                    }
                }
            ]
        }
    },
});

```

**DashboardViewer Options**

```
interface DashboardViewerOptions {
    canEdit: boolean;
    canSave: boolean;
    canSaveAs: boolean;
    dataSources: [
        { type: string, id: string, title: string, subtitle: string}
    ]
    startInEditMode: boolean;
    startWithNewVisualization: boolean;

    header: {
        showHeader: boolean;
        canAddVisualization: boolean;
        menu: {
            showMenu: boolean;
            showExportToImage: boolean;
            showExportToExcel: boolean;
            showExportToPowerPoint: boolean;
            showExportToPdf: boolean;
            showRefresh: boolean;
            items: MenuItem[];
        }
    }

    filters: {
        interactiveFiltering: boolean;
        showFilters: boolean;
        canAddDateFilter: boolean;
        canAddDashboardFiter: boolean;
    }

    dataSourceDialog: {
        showSearch: boolean;
    }

    visualizations: {
        canMaximize: boolean;
        categoryGroupingSeparator: string;
        crosshairs: boolean;
        hoverTooltips: boolean;
        showChangeChartType: boolean;
        showStatisticalFunctions: boolean;
        menu: {
            showCopy: boolean;
            showDuplicate: boolean;
            items: MenuItem[];
        }
    }

    editor: {
        chartTypes: ChartType[];
        defaultChartType: ChartType;        
        canAddPostCalculatedFields: boolean;        
        showAddCalculatedFields: boolean;
        showDataBlending: boolean;
        showEditDataSource: boolean;
        showMachineLearning: boolean;
    }
}
```

The new VisualizationViewer component is used to view only a single visualization.

```js
//by title
new VisualizationViewer("#viewer", "Sales", "New vs Renewal Sales");

//by index
new VisualizationViewer("#viewer", "Sales", 1);

//provide options
const vv = new VisualizationViewer("#viewer", "Sales", "New vs Renewal Sales", {
    showChangeChartType: true,
    menu: {
        showMenu: true,
        items: [
            {
                title: "My Custom Item", click: (viz) => {
                    console.log(`I clicked viz with title: ${viz.title}`);
                }
            }
        ]
    }
});
```

**VisualizationViewer Options**

```
export interface VisualizationViewerOptions {
    showFilters: boolean;
    categoryGroupingSeparator: string;
    crosshairs: boolean;
    hoverTooltips: boolean;
    showChangeChartType: boolean;
    showStatisticalFunctions: boolean;
    menu: {
        items: MenuItem[];
        showCopy: boolean;
        showDuplicate: boolean;
        showExportToExcel: boolean;
        showExportToImage: boolean;
        showMenu: boolean;
        showRefresh: boolean;
    }
}
```