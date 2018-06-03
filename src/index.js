import React from "react";
import { render } from "react-dom";
import data from "./data";
import ResponsiveTable from "./Components/ResponsiveTable";

const styles = {
  container: {
    margin: 0,
    "background-color": "#c7c7c7",
    "font-family": ["Roboto", "sans-serif"]
  },
  h2: {
    "text-align": "center",
    padding: "1em"
  }
};

const App = () => (
  <div style={styles.container}>
    <h2 style={styles.h2}>Responsive Table</h2>
    <ResponsiveTable data={data} />
  </div>
);

render(<App />, document.getElementById("root"));
