import React from "react";
import Filter from "./components/filter-list/filter-list";

function App() {
  
const words = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];
  return (
    <Filter words={words} />
  );
}

export default App;

