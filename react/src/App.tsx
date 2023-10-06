import React from 'react';
import './App.css';
import { Dashboard, DashboardViewerOptions, RevealSdkSettings } from '@revealbi/ui';
import { DashboardViewer } from '@revealbi/ui-react';

function App() {

  RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";

  const dashboard: string | Dashboard = "Sales";
  const options: DashboardViewerOptions = {
    filters: {
      showFilters: false,
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
    <div className="App">
      <DashboardViewer dashboard={dashboard} options={options}></DashboardViewer>
    </div>
  );
}

export default App;
