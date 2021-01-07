Highcharts.setOptions({
    colors: ['#54e346', '#4baee3']
});
  var Total = 0;
  var chart_pie_profitdiv = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-profitdiv',
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
                showInLegend: true
            }
        },
       legend: {
            useHTML: true,
            labelFormatter: function() {
                Total += this.y;
                return '<div><span style="color:#fff;">'+ this.name +' : '+'</span><span style="color:#fff;font-weight: 400;">'+ this.y + '</span></div>';
            },
            itemStyle: {
                fontSize: '11.5px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              },
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
            symbolWidth: 10,
            symbolHeight: 10,
           
        },
        series: [{
            name: 'Profit',
            colorByPoint: true,
            // innerSize: '50%',
            data: [{
                name: 'RMS',
                y: 40000000,
                sliced: true,
                selected: true,
            }, {
                name: 'IFS',
                y: 30000000,
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
                    menuItems: ['downloadXLS','viewData']
                }
            }
        } 
});


  var Total = 0;
  var chart_pie_omzetdiv = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-omzetdiv',
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
                showInLegend: true
            }
        },
       legend: {
            useHTML: true,
            labelFormatter: function() {
                Total += this.y;
                return '<div><span>'+ this.name +' : '+'</span><span style="color:#43425D;font-weight: 700;">'+ this.y +'</span></div>';
            },
            itemStyle: {
                fontSize: '11.5px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              },
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
        },
        series: [{
            name: 'Omzet',
            colorByPoint: true,
            data: [{
                name: 'RMS',
                y: 200000000,
                sliced: true,
                selected: true,
            }, {
                name: 'IFS',
                y: 80000000,
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
                    menuItems: ['downloadXLS','viewData']
                }
            }
        } 
});

    Highcharts.setOptions({
        colors: ['#fdb827','#b8de6f','#ffabe1']
    });
  var Total = 0;
  var chart_pie_profitproducts = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-profitproducts',
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
                legendColor:'#fff',
            }
        },
       legend: {
            useHTML: true,
            labelFormatter: function() {
                Total += this.y;
                return '<div><span style="color:#fff;">'+ this.name +' : '+'</span><span style="color:#fff;font-weight: 400;">'+ this.y + '</span></div>';

            },
            itemStyle: {
                fontSize: '10px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              },
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal',
        },
        series: [{
            name: 'Profit',
            colorByPoint: true,
            data: [{
                name: 'PlayZone',
                y: 400000000,
              
                
            }, {
                name: 'Zone',
                y: 700000000,
               
            },{
                name: 'Kiddie',
                y: 200000000,
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
                    menuItems: ['downloadXLS','viewData']
                }
            }
        } 
});

Highcharts.setOptions({
    colors: ['#fdb827','#b8de6f','#ffabe1']
});
var Total = 0;
var chart_pie_omzetproducts = new Highcharts.chart({
    chart: {
        renderTo: 'chart-pie-omzetproducts',
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
            legendColor:'#fff',
        }
    },
   legend: {
        useHTML: true,
        labelFormatter: function() {
            Total += this.y;
            return '<div><span>'+ this.name +' : '+'</span><span style="font-weight: 600;">'+ this.y + '</span></div>';

        },
        itemStyle: {
            fontSize: '10px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
          },
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
    },
    series: [{
        name: 'Omzet',
        colorByPoint: true,
        data: [{
            name: 'PlayZone',
            y: 400000000,
           
            
        }, {
            name: 'Zone',
            y: 700000000,
           
        },{
            name: 'Kiddie',
            y: 200000000,
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
                menuItems: ['downloadXLS','viewData']
            }
        }
    } 
});

Highcharts.setOptions({
    colors: ['#54e346', '#4baee3'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_lineProfitDiv = new Highcharts.chart({
        chart: {
            renderTo: 'line-profitDiv', 
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
    colors: ['#54e346', '#4baee3'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_lineOmzetDiv = new Highcharts.chart({
        chart: {
            renderTo: 'line-omzetDiv', 
            backgroundColor: null,
            type: 'line' 
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
    
    var chart_lineProfitProduct = new Highcharts.chart({
            chart: {
                renderTo: 'line-profitProducts', 
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

    Highcharts.setOptions({
        colors: ['#fdb827','#b8de6f','#ffabe1'],
        lang: {
            numericSymbols: ['K', ' Jt', 'M', 'T']
        }
    });
    
    var chart_lineOmzetProduct = new Highcharts.chart({
            chart: {
                renderTo: 'line-omzetproduct', 
                backgroundColor: null,
                type: 'line' 
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

    Highcharts.setOptions({
        colors: ['#b8de6f','#bbbbbb'],
        lang: {
            numericSymbols: ['K', ' Jt', 'M', 'T']
        }
    });
    let dataCompareProducts = [
        [23934, 22503, 27177, 69658, 27031, 19931, 37133, 54175, 19931, 167133, 154175,20000], 
        [21550, 21060, 25742, 59851, 12490, 10282, 28121, 30434, 219931, 187133, 15555,10000]
    ];
  
    var chart_lineIncomeOutcome = new Highcharts.chart({
        chart: {
            renderTo: 'line-CompareProducts',
            type: 'bar',
            backgroundColor: null,   
        },
        xAxis: {
            categories:['ZD01 BLOK M', 'R67 KARAWANG', 'R101 LAMPUNG', 'R105 PARUNG', 'R70 MAKASAR', 'R34 DEPOK', 'R71 BTM', 'R72 TMII', 'R102 KEB LAMA', 'R21 BEKASI', 'R30 TANGGERANG','R40 Cengkareng'],
            labels: {
            style: {
            fontSize: '12px',
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
            text: 'Years & Months'
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
            name:'Income',
            data: dataCompareProducts[0],
            dataLabels: {
                enabled:false
               }
            },
            {
            name:'Outcome',
            data: dataCompareProducts[1],
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
            chartOptions: {
                xAxis: [{
                    categories:['ZD01 BLOK M', 'R67 KARAWANG', 'R101 LAMPUNG', 'R105 PARUNG', 'R70 MAKASAR', 'R34 DEPOK', 'R71 BTM', 'R72 TMII', 'R102 KEB LAMA', 'R21 BEKASI', 'R30 TANGGERANG','R40 Cengkareng'],
                }]
            }
        }  
    });

   

    