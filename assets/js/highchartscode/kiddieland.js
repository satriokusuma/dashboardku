Highcharts.setOptions({
    colors: ['#54e346', '#4baee3']
});
  var Total = 0;
  var chart_fnb = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-kiddie',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 220,
        },
        tooltip: {
            followTouchMove: true,
            useHTML: true,
        },   
        title: {
            text: ''
        },
        credits: {
        enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                size: 100
            }
        },
       legend: {
            useHTML: true,
            labelFormatter: function() {
                Total += this.y;
                return '<div><span style="color:#fff;">'+ this.name +' : '+'Rp.'+'</span><span style="color:#fff;">'+ this.y +'</span></div>';
            },
            itemStyle: {
                fontSize: '11px',
                fontWeight: 300,
                whiteSpace: 'nowrap',
              },
            align: 'left',
            verticalAlign: 'bottom',
            layout: 'horizontal',
            symbolWidth: 10,
            symbolHeight: 10,
           
        },
        series: [{
            name: 'Total Omset',
            colorByPoint: true,
            // innerSize: '50%',
            data: [{
                name: 'RMS',
                y: 300000000,
                sliced: true,
                selected: true,
               
            }, {
                name: 'IFS',
                y: 400000000,
            }]
        }],
        navigation: {
            buttonOptions: {
                verticalAlign: 'top',
                align: 'left',
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    menuItems: ['downloadXLS','viewData','downloadPDF']
                }
            }
        } 
});

Highcharts.setOptions({
    colors: ['#ffabe1','#888888'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});
let dataZone = [
    [23934, 22503, 27177, 69658, 27031, 19931, 37133, 54175, 19931, 167133, 154175,20000], 
    [24916, 24064, 29742, 79851, 32490, 30282, 38121, 40434, 219931, 187133, 195555,50000]
];
function formatterZone(baseSeries) {
    return Highcharts.numberFormat(this.y / dataZone[baseSeries][this.point.index] * 100,0) + '%'
}
var chart_bar = new Highcharts.chart({
    chart: {
        renderTo: 'line-kiddieLand',
        type: 'bar',
        backgroundColor: null,
        // height: 300,   
    },
    xAxis: {
        categories:['R35 CILEGON KL', 'R35 CILEGON KL', 'R35 CILEGON KL', 'R35 CILEGON KL', 'R75 SERANG KL', 'R31 KL', 'R75 SERANG KL', 'R75 SERANG KL', 'R75 SERANG KL', 'R75 SERANG KL', 'R75 SERANG KL','R75 SERANG KL'],
        labels: {
        style: {
        fontSize: '10px',
        color: '#43425D',    
        }
      
        }, 
        title: {
            text: null
        },
        min: 0,
        max:4,
        scrollbar: {
        enabled: true,
        barBackgroundColor: '#dbdbdb',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: '#dbdbdb',
        buttonBorderWidth: 0,
        buttonArrowColor: 'black',
        buttonBorderRadius: 7,
        rifleColor: 'black',
        trackBackgroundColor: '#ebebeb',
        trackBorderWidth: 1,
        trackBorderColor: 'silver',
        trackBorderRadius: 7,
        size: 8
        },
    
    },
   
    yAxis: {
        min:0,
        title: false,  
        gridLineColor: null, 
    },
    title: {
        text: 'ZONE 2000'
    },
    credits: {
    enabled: false
    },
    tooltip: {
        formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
        '<b>'+ 'Total :' +'</b>'+' '+' ' +'<b>'+'Rp. '+ this.y + '</b>'+'<br/>'
        }
    },
    plotOptions: {
        bar: {
            states: {
                hover: {
                color: '#4baee3',  
                }
            },
            cursor: 'pointer',
            showInLegend: true,
            borderWidth: 0.,
            dataLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    fontSize:'12px',
                    color:'#848ccf'
                }
                
              }
        },
    },

    series:[
        {
        name:'Omset Sale',
        data: dataZone[0],
        dataLabels: {
            align: 'left',
            zIndex: 1,
            formatter: function() {
              return formatterZone.call(this, 1);
            }
          }
        },
        {
        name:'Target Sale',
        data: dataZone[1],
        dataLabels: {
           enabled:false
          }
        }
    ],

    navigation: {
        buttonOptions: {
            verticalAlign: 'top',
        }
    },
    exporting: {
        sourceWidth: 1200,  
        buttons: {
            contextButton: {
                menuItems: ['downloadXLS','viewData','downloadPDF']
            }
        },
    }  
});