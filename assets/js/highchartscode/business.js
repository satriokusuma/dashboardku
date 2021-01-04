Highcharts.setOptions({
    colors: ['#fdb827','#b8de6f','#ffabe1']
});
  var Total = 0;
  var chart_rms = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-rms',
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
                fontWeight: 700,
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
                name: 'Play Zone',
                y: 300000000,
               
            }, {
                name: 'Zone',
                y: 400000000,
            },{
                name: 'Kiddie',
                y: 200000000, 
                sliced: true,
                selected: true,
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
    colors: ['#fdb827','#b8de6f','#ffabe1']
});
  var Total = 0;
  var chart_ifs = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-ifs',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 220,
        },
        tooltip: {
            followTouchMove: true
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
            }
        },
       legend: {
            useHTML: true,
            labelFormatter: function() {
                Total += this.y;
                return '<div><span>'+ this.name +' : '+'Rp.'+'</span><span style="color:#43425D;">'+ this.y +'</span></div>';
            },
            itemStyle: {
                fontSize: '11px',
                fontWeight: 700,
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
                name: 'Play Zone',
                y: 300000000,
               
            }, {
                name: 'Zone',
                y: 400000000,
            },{
                name: 'Kiddie',
                y: 200000000, 
                sliced: true,
                selected: true,
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






