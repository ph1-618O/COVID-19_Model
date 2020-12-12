// ################### D3 Bar Chart Student Example from Class Repo #####################
var xVals = ["beer", "wine", "martini", "margarita",
"ice tea", "rum & coke", "mai tai", "gin & tonic"];
var yVals = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];

var rXVals1 = [1, 2, 3, 4, 5];
var rYVals1 = [1, 3, 5, 5];

var rXVals2= [1, 2, 3, 4, 5];
var rYVals2 = [5, 4, 18, 22, 10];

var bX1 = [1, 2, 3, 4];
var bY1 = [10, 11, 12, 13];
var markerSize = [400, 600, 800, 1000];

var bX2 = [5, 4, 3, 8];
var bY2 = [18, 10, 6, 13];


var bX3 = [2, 4, 11, 44];
var bY3 = [6, 13, 10, 24];

var bX4 = [8, 10, 14, 25];
var bY4 = [5, 7, 18, 34];



//######################### D3 Bar Chart #####################
const createBar = function(xVals, yVals, divID){
var trace1 = {
    x: xVals,
    y: yVals,
    type: "bar"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  };
  
  Plotly.newPlot(divID, data, layout);

//######################### D3 Regression #####################
const createRegression = function(rXVals1, rYVals1, rXVals2, rYVals2, divID){
var trace1 = {
    x: rXVals1,
    y: rYVals1,
    type: "scatter"
};

var trace2 = {
  x: rXVals2,
  y: rYVals2,
    type: "scatter"
};

var data = [trace1, trace2];
Plotly.newPlot(divID, data);
}
};

// const createBubble = function(divID, bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4, markerSize){
// var trace1 = {
//   x: bX1,
//   y: bY1,
//   text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//   mode: 'markers',
//   marker: {
//     size: markerSize,
//     sizemode: 'area'
//   }
// };

// var trace2 = {
//   x: bX2,
//   y: bY2,
//   text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
//   mode: 'markers',
//   marker: {
//     size: [400, 600, 800, 1000],
//     //setting 'sizeref' to lower than 1 decreases the rendered size
//     sizeref: 2,
//     sizemode: 'area'
//   }
// };

// var trace3 = {
//   x: bX3,
//   y: bY3,
//   text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
//   mode: 'markers',
//   marker: {
//     size: [400, 600, 800, 1000],
//     //setting 'sizeref' to less than 1, increases the rendered marker sizes
//     sizeref: 0.2,
//     sizemode: 'area'
//   }
// };

// // sizeref using above formula
// var desired_maximum_marker_size = 40;
// var size = [400, 600, 800, 1000];
// var trace4 = {
//   x: bX4,
//   y: bY4,
//   text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
//   mode: 'markers',
//   marker: {
//     size: size,
//     //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
//     sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
//     sizemode: 'area'
//   }
// };

// var data = [trace1, trace2, trace3, trace4];

// var layout = {
//   title: 'Bubble Chart Size Scaling',
//   showlegend: false,
//   height: 600,
//   width: 600
// };

// Plotly.newPlot(divID, data, layout);
// }


//Calling Plot functions
createBar("#bar_graph", xVals, yVals)
createRegression("#linRegress", xVals1, yVals1, rXVals1, rxVals2)
// createBubble("#bubble", bX1, bY1, bX2, bY2, bX3, bY3, bX4, bY4, markerSize)

