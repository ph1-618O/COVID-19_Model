// ################### D3 Bar Chart Student Example from Class Repo #####################

d3.select("#covid_bar_graph")
var trace1 = {
    x: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  };
  
  Plotly.newPlot("plot", data, layout);

// ######################### D3 Scatter Chart Example from Class Repo #####################
// I heard something about a scatter plot so I stuck it in here.

var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumbersBetween0and9(5),
    type: "scatter"
};

// Create our second trace
var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: randomNumbersBetween0and9(5),
    type: "scatter"
};

// The data array consists of both traces
var data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);

// ######################### D3 Line Chart Example from Class Repo #####################

d3.select("covid_linear_regression_plot")
  var trace1 = {
    x: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "line"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  };
  
  Plotly.newPlot("plot", data, layout);