// Choropleth Visualisation (Compare LGAs)
var vg_1 = "choropleth_map.json";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);


// Bar Chart Visualisation 1 (Biggest Killers in Victoria)
var vg_2 = "causes_bar_chart.json";

vegaEmbed("#barchart_killers", vg_2).then(function(result) {

}).catch(console.error);


// Bar Chart Visualisation 2 (Death Rate In Age Brackets)
var vg_3 = "age_bracket_bar_chart.json";

vegaEmbed("#barchart_agebrackets", vg_3).then(function(result) {


}).catch(console.error);