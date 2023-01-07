# Reveal SDK Canary Samples

The samples in this repo demonstrate the the future API of the Reveal SDK. All work here will eventualy become the next evolution of the Reveal SDK.

The RevealView will be evetually replaced by the new DashboardViewer. The DashboardViewer relies on the "options pattern" to control the various elements of the viewer control.

**Available options**

```
interface ViewerOptions {
    canEdit: boolean;
    canSave: boolean;
    canSaveAs: boolean;
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
            items: ViewerMenuItem[];
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
            items: ViewerMenuItem[];
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