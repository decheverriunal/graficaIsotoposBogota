d3.csv("https://raw.githubusercontent.com/decheverriunal/graficaIsotoposBogota/main/BASE_ISOTOPOS_SUBTERRANEA_COMPLETA.csv").then(function(d) {
    let deut2h = d.map((val) => { return Number(val.DEUT_2H) })
    let oxig18 = d.map((val) => { return Number(val.OXIG_18) })

    let lineaY = [-19.8, -32.01, -36.02, -40.03, -44.04, -48.05, -52.06, -56.07, -60.08, -64.09, -68.1, -72.11, -76.12, -80.13, -84.14, -88.15, -92.16, -148.3]
    let lineaX = [-4, -5.5, -6, -6.5, -7, -7.5, -8, -8.5, -9, -9.5, -10, -10.5, -11, -11.5, -12, -12.5, -13, -20]

    let puntos = {
        x: deut2h,
        y: oxig18,
        name: "Composicion isotopica del agua subterranea",
        mode: 'markers',
        type: 'scatter',
        marker: { 
            size: 5,
            color: 'rgba(45, 229, 12, 0.7)',
            line: {
                color: 'rgba(50, 150, 25, 1)',
                width: 1
            }
        }
    };

    let linea = {
        x: lineaY,
        y: lineaX,
        name: "Linea meteorica global",
        mode: 'lines',
        marker: { 
            color: 'rgba(229, 23, 12, 0.9)',
        },
        color: 'rgba(229, 23, 12, 0.9)',
      };
    
    let data = [puntos, linea];

    console.log(this)
    console.log(this)

    let layout = {
        autosize: true,
        //width: Math.min(this.innerWidth,this.innerHeight)*0.9,
        //height: Math.min(this.innerWidth,this.innerHeight)*0.9,
        margin: {
            t: 0,
            l: 0,
            r: 0,
            b: 0,
            pad: 0
          },
        legend: {
            x: 0,
            xanchor: 'left',
            y: -0.3,
            yanchor: 'down',
            bgcolor: 'rgba(0, 0, 0, 0)',
            //orientation: 'h'
        },
        //font: {size: screen.availWidth/50},
        xaxis: {
            range: [-91, -32],
            linecolor: '#636363',
            linewidth: 1,
            automargin: true,
        },
        yaxis: {
            range: [-13, -5.5],
            linecolor: '#636363',
            linewidth: 1,
            automargin: true,
        }
    };

    var config = {
        responsive: true
    }
      
    Plotly.newPlot('myPlot', data, layout, config);

    console.log(d)
})