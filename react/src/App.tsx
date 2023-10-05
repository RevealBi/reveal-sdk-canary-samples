import React, { useEffect } from 'react';
import { DashboardViewer, RevealSdkSettings } from '@revealbi/ui';
import './App.css';

RevealSdkSettings.serverUrl = "https://samples.revealbi.io/upmedia-backend/reveal-api/";

function App() {
  
  useEffect(() => {
    var dv = new DashboardViewer("#revealView", "Sales", {
      dataSources: [
        { type: "REST", title: "Sales by Category", subtitle: "Excel2Json", url: "https://excel2json.io/api/share/6e0f06b3-72d3-4fec-7984-08da43f56bb9" },
        {
            type: "MicrosoftSqlServer", id: "MySQLServer", title: "My SQL Server", items: [
                { table: "Products", title: "My Products Table" },
                { table: "Orders", title: "My Orders Table" },
                { table: "OrderDetails", title: "My OrderDetails Table" },
            ]
        },
      ]
    });
  }, [])

  return (
    <div id="revealView" style={{height: "100vh", width: "100%"}}></div>
  );
}

export default App;