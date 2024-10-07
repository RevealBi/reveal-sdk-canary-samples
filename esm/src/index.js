import { defineRevealSdkWrappers } from "reveal-sdk-wrappers";
defineRevealSdkWrappers();

$.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

const options = {
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
};

const revealView = document.getElementById("viewer");
revealView.options = options;
