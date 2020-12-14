var monthToShow = "september"

function getData() {
    Promise.all([d3.csv("../static/data/state_cases.csv"), d3.csv("../static/data/state_deaths.csv")])
        .then(function (files) {
            var cases = files[0];
            var deaths = files[1];
            //   console.log(Object.keys(cases));
            //   console.log(Object.values(cases));
            function unpack(rows, key) {
                return rows.map(function (row) {
                    return row[key];
                });
            }
            //   console.log(unpack(cases, labels));
            //   console.log(unpack(cases, month));
            var states = unpack(cases, "code");
            var values = unpack(cases, monthToShow);
            createPleth(states, values, states);
        })
        .catch(function (err) {
            //show error
            console.log(err);
        });
}
const createPleth = function (locations, values, text) {
    var data = [{
        type: "choropleth",
        locationmode: "USA-states",
        locations: locations,
        z: values,
        text: text,
        zmin: 0,
        zmax: 17000,
        colorscale: [
            [0, "#edf8b1"],
            [0.2, "#c7e9b4"],
            [0.4, "#7fcdbb"],
            [0.6, "#41b6c4"],
            [0.7, "#1d91c0"],
            [0.8, "#225ea8"],
            [1, "#253494"],
        ],
        colorbar: {
            tickfont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            title: "CASES",
            thickness: 20,
            line: 0,
        },
        marker: {
            line: {
                color: "#c0c0c0",
                /*'rgb(255,255,255)',*/
                width: 0.2,
            },
        },
    }, ];
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
            pad: 4,
        },
        title: "COVID-19",
        geo: {
            scope: "usa",
            showlakes: true,
            lakecolor: "rgb(255,255,255)",
        },
        font: {
            family: "Gotham Rounded SSm A, Gotham Rounded SSm B, Helvetica Neue, Helvetica, Arial, sans-serif",
            size: 18,
            color: "#000000",
        },
        // sliders: [
        //   {
        //     currentvalue: {
        //       prefix: "Year: ",
        //     },
        //     steps: frames.map((f) => ({
        //       label: f.code,
        //       method: "animate",
        //       args: [
        //         [f.code],
        //         {
        //           frame: {
        //             duration: 0,
        //           },
        //         },
        //       ],
        //     })),
        //   },
        // ],
    };
    Plotly.newPlot("pleth", {
        data: data,
        layout: layout,
        // frames: frames,
        config: {
            showLink: false,
        },
    });
};
getData();