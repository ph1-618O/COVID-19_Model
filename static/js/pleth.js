// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '-' + dd + '-' + yyyy;
// document.write(today);
function getData(labels, month) {
    Promise.all([
        d3.csv('../static/data/state_cases.csv'),
        d3.csv('../static/data/state_deaths.csv'),
    ]).then(function (files) {
        var cases = files[0]
        var deaths = files[1];

        console.log(Object.keys(cases));
        console.log(Object.values(cases))


        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        console.log(unpack(cases, labels))
        console.log(unpack(cases, month))

        // console.log(cases);
        // cases.forEach(function(month){
        //     console.log(month)
        // });
        var code = unpack(cases, labels)
        var month = unpack(cases, month)
        createPleth(code, month, code)
        // for (const [k, v] of Object.entries(cases)) {
        //     console.log(`${k}, ${v}`);
        //     console.log(k)
        //     for (const[v2] of Object.values(k)){
        //         console.log(v2)
        //     }

        //console.log(`${key}: ${value}`);
        //}
    }).catch(function (err) {
        //show error
        console.log(err)
    });

    const createPleth = function (locations, values, text) {
        var data = [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: locations,
            z: values,
            text: text,
            zmin: 0,
            zmax: 17000,
            colorscale: [
                [0, '#edf8b1'],
                [0.2, '#c7e9b4'],
                [0.4, '#7fcdbb'],
                [0.6, '#41b6c4'],
                [0.7, '#1d91c0'],
                [0.8, '#225ea8'],
                [1, '#253494']
            ],
            colorbar: {
                tickfont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                title: 'CASES',
                thickness: 20,
                line: 0
            },
            marker: {
                line: {
                    color: '#c0c0c0',
                    /*'rgb(255,255,255)',*/
                    width: 0.2
                }
            }
        }];
    }


    var layout = {
        // paper_bgcolor: 'rgba(0,0,0,0)',
        // plot_bgcolor: 'rgba(0,0,0,0)',
        // opacity: 0.5,
        autosize: true,
        width: 500,
        height: 500,
        margin: {
            l: 50,
            r: 50,
            b: 0,
            t: 0,
            pad: 4
        },
        title: 'COVID-19',
        geo: {
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
        },
        font: {
            family: 'Gotham Rounded SSm A, Gotham Rounded SSm B, Helvetica Neue, Helvetica, Arial, sans-serif',
            size: 18,
            color: '#000000',
        }
    };

    Plotly.newPlot("pleth", data, layout, {
        showLink: false
    });
}

d3.select('#months').on('click', function () {

    getData(filter, month)

})



Plotly.newPlot('myDiv', {
    data: [{
        x: [1, 2, 3],
        y: [2, 1, 3],
        line: {
            color: 'red',
            simplify: false,
        }
    }],
    layout: {
        sliders: [{
            pad: {
                t: 30
            },
            x: 0.05,
            len: 0.95,
            currentvalue: {
                xanchor: 'right',
                prefix: 'color: ',
                font: {
                    color: '#888',
                    size: 20
                }
            },
            transition: {
                duration: 500
            },
            // By default, animate commands are bound to the most recently animated frame:
            steps: [{
                label: 'red',
                method: 'animate',
                args: [
                    ['red'], {
                        mode: 'immediate',
                        frame: {
                            redraw: false,
                            duration: 500
                        },
                        transition: {
                            duration: 500
                        }
                    }
                ]
            }, {
                label: 'green',
                method: 'animate',
                args: [
                    ['green'], {
                        mode: 'immediate',
                        frame: {
                            redraw: false,
                            duration: 500
                        },
                        transition: {
                            duration: 500
                        }
                    }
                ]
            }, {
                label: 'blue',
                method: 'animate',
                args: [
                    ['blue'], {
                        mode: 'immediate',
                        frame: {
                            redraw: false,
                            duration: 500
                        },
                        transition: {
                            duration: 500
                        }
                    }
                ]
            }]
        }],
        updatemenus: [{
            type: 'buttons',
            showactive: false,
            x: 0.05,
            y: 0,
            xanchor: 'right',
            yanchor: 'top',
            pad: {
                t: 60,
                r: 20
            },
            buttons: [{
                label: 'Play',
                method: 'animate',
                args: [null, {
                    fromcurrent: true,
                    frame: {
                        redraw: false,
                        duration: 1000
                    },
                    transition: {
                        duration: 500
                    }
                }]
            }]
        }]
    },
    // The slider itself does not contain any notion of timing, so animating a slider
    // must be accomplished through a sequence of frames. Here we'll change the color
    // and the data of a single trace:
    frames: [{
        name: 'red',
        data: [{
            y: [2, 1, 3],
            'line.color': 'red'
        }]
    }, {
        name: 'green',
        data: [{
            y: [3, 2, 1],
            'line.color': 'green'
        }]
    }, {
        name: 'blue',
        data: [{
            y: [1, 3, 2],
            'line.color': 'blue'
        }]
    }]
});





// var getData = function() {
//     return Math.random();
// }

// Plotly.plot('line', [{
//     y: [getData()],
//     type: line
// }]);

// setInterval(function(){
//     Plotly.extendTraces('line', {y:[[getData()]]}, [0])
//     cnt++;

//     if(cnt > 500){
//         Plotly.relayout('chart',{
//             xaxis:{
//                 range:[cnt-500, cnt]
//             }
//         });
//     }
// }, 15);