import React, { useEffect } from 'react';
import './App.css';
import { RevealViewOptions, RevealSdkSettings } from '@revealbi/ui';
import { RvDialog, RvRevealView } from '@revealbi/ui-react';

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
      <RvDialog title='My Dialog' open={true}>
        <p>Hello!</p>
      </RvDialog>
    </div>
  );
}

export default App;
