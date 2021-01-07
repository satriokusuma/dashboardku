Highcharts.setOptions({
    colors: ['#54e346', '#4baee3'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_areaOmzetDivHome = new Highcharts.chart({
        chart: {
            renderTo: 'area-omzetDiv', 
            backgroundColor: null,
            type: 'area' 
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
            name: 'RMS',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 119931, 167133, 154175,200000]
        }, {
            name: 'IFS',
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

    Highcharts.setOptions({
        colors: ['#fdb827','#b8de6f','#ffabe1'],
        lang: {
            numericSymbols: ['K', ' Jt', 'M', 'T']
        }
    });
    
    var chart_areaOmzetProductsHome = new Highcharts.chart({
            chart: {
                renderTo: 'area-omzetproduct', 
                backgroundColor: null,
                type: 'area' 
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
                text: 'Products'
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
                name: 'Play Zone',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 119931, 167133, 154175,200000]
            }, {
                name: 'Zone 2000',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 219931, 187133, 195555,50000]
            }, {
                name: 'Kiddie Land',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 19931, 127133, 15000,80000]
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
                chartOptions: {
                    xAxis: [{
                        categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                    }]
                }
            }  
        });