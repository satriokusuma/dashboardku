Highcharts.setOptions({
    colors: ['#4baee3','#bbbbbb']
});
  var Total = 0;
  var chart_akuntingifs = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-akuntingIFS',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 200,
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
                showInLegend: true
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
                fontWeight: 500,
                whiteSpace: 'nowrap',
              },
            align: 'left',
            verticalAlign: 'bottom',
            layout: 'horizontal',
            symbolWidth: 10,
            symbolHeight: 10,
           
        },
        series: [{
            name: 'Total',
            colorByPoint: true,
            // innerSize: '50%',
            data: [{
                name: 'Profit',
                y: 300000000,
                
               
            }, {
                name: 'Loss',
                y: 100000000,
                sliced: true,
                selected: true,
               
            }
            ]
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
    colors: ['#4baee3', '#bbbbbb'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_areaAkuntingIfs = new Highcharts.chart({
        chart: {
            renderTo: 'area-akuntingIFS', 
            backgroundColor: null,
            type: 'area',
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            labels: {
            style: {
            fontSize: '12px',
            color: '#43425D',
            fontWeight:'bold'
            }
            }, 
            title: {
                text: null
            },
            min: 5,
            max:11,
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
            text: 'Division'
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
            series: {
                label: {
                connectorAllowed: false
                },
            },
            line: {
                cursor: 'pointer',
                showInLegend: true,
            }
        },

        series:[{
            name: 'Profit',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 119931, 167133, 154175,200000]
        }, {
            name: 'Loss',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 219931, 187133, 195555,50000]
        }, 
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
            chartOptions: {
                xAxis: [{
                    categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                }]
            }
        }  
    });


