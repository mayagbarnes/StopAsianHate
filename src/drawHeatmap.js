import HeatmapBackground from "./heatmap_background";
import * as d3 from "d3";
import Attacks from "./heatmap";

const CONSTANTS = {
  shoulderWidth: 800,
  headHeight: 700,
};

export function drawHeatMap() {
  let svg = d3
    .select(".heat-map-modal")
    .append("svg")
    .attr("width", CONSTANTS.shoulderWidth)
    .attr("height", CONSTANTS.headHeight);

  const heatmap = new HeatmapBackground(svg);
  heatmap.render();

  const hexes = new Attacks(svg);
  hexes.render();
}


// export const showHeatMap = function () {
//   const showButton = document.getElementById("show-heatmap");
//   const modal = document.querySelector(".heat-map-modal");
//   const backdrop = document.querySelector(".backdrop");

//   showButton.addEventListener("click", function () {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
//   });

//   const showAnchor = document.getElementById("anchor-show-heatmap");

//   showAnchor.addEventListener("click", function () {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
//   });
// };
