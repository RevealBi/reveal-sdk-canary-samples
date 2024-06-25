import React, { useEffect } from 'react';
import './App.css';
import { RevealViewOptions, RevealSdkSettings } from '@revealbi/ui';
import { RvRevealView } from '@revealbi/ui-react';
import { RestServiceBuilder, DateField, NumberField, TextField, RdashDocument, DashboardDateFilter, FunnelChartVisualization, VisualizationLinker, UrlLink, DashboardLink, LinkFilter, DateLinkFilter, PivotVisualization } from '@revealbi/dom';

function App() {

  RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";

  const [dashboard, setDashboard] = React.useState<any>("Sales");

  const options: RevealViewOptions = {
    filters: {
      showFilters: true,
    },
    header: {
      menu: {
        items: [
          { title: "Item 1", click: () => alert("Item 1") },
          { title: "Item 2", click: () => alert("Item 2") },
          { title: "Item 3", click: () => alert("Item 3") },
        ]
      }
    },
  }

  return (
    <div style={{height: '100%'}}>
      <RvRevealView dashboard={dashboard} options={options}></RvRevealView>
    </div>
  );
}

export default App;
