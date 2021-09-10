var vg_1 = "daily_cost_bar_chart.vg.json";  // var pts to the json file we created for the chart

// the code below embeds the chart in vg_1 in the div with id bar_chart
vegaEmbed("#bar_chart", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
