Plotly.newPlot('line', {
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