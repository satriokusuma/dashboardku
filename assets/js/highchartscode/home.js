
    Highcharts.setOptions({
        colors: ['#54e346', '#4baee3']
    });
    
    var chart_line = new Highcharts.chart({
            chart: {
                renderTo: 'line-1', 
                backgroundColor: null,
                type: 'line' 
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                style: {
                fontSize: '12px',
                color: '#43425D'
                }
                }, 
                title: {
                    text: null
                },
                min: 0,
                max:8,
                scrollbar: {
                enabled: true
                },
            },
            yAxis: {
                min:0,
                title: false, 
            },
            title: {
                text: 'Global'
            },
            credits: {
            enabled: false
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
                name: 'RMS',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 119931, 167133, 154175]
            }, {
                name: 'IFS',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 219931, 187133, 195555]
            }
            ],
        
            navigation: {
                buttonOptions: {
                    verticalAlign: 'top',
                }
            },
            exporting: {
                buttons: {
                    contextButton: {
                        menuItems: ['downloadXLS','viewData']
                    }
                }
            }  
        });








