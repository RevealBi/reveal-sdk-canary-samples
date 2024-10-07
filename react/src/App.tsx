import React, { useEffect } from 'react';
import './App.css';
import { RevealViewOptions } from 'reveal-sdk-wrappers';
import { RvRevealView } from 'reveal-sdk-wrappers-react';

function App() {

  const [dashboard, setDashboard] = React.useState<any>("Marketing");

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

  useEffect(() => {
    $.ig.RVDashboard.loadDashboard("Sales", (dashboard: any) => {
      setDashboard(dashboard);
    });
  }, []);

  return (
    <div style={{height: '100%'}}>
      <RvRevealView dashboard={dashboard} options={options}></RvRevealView>
    </div>
  );
}

export default App;
