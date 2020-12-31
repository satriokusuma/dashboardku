Highcharts.setOptions({
    colors: ['#54e346', '#4baee3']
});
  var Total = 0;
  var chart_fnb = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-fnb',
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
    colors: ['#54e346', '#4baee3']
});
  var Total = 0;
  var chart_fnb = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-fnb-month',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 160,
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
                size: 90
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
                y: 3550000,
                sliced: true,
                selected: true,
               
            }, {
                name: 'IFS',
                y: 2000000,
                
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