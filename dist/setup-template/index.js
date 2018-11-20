import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog-guide";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
