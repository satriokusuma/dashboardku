Highcharts.setOptions({
    colors: ['#fdb827'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_lineProduct = new Highcharts.chart({
        chart: {
            renderTo: 'line-outletModalPlayzone', 
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
            plotLines: [{
                value: 5000000000,
                color: '#FF0000',
                dashStyle: 'LongDashDot',       // default value is solid.
                width: 2,
                label: {
                    text: 'Target (Rp.5 M)'
                }
            }] 
        },
        title: {
            text: ''
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
            name: 'Income',
            data: [2393400000, 2250300000, 2717700000, 696580000, 270310000, 1993100000, 3713300000, 5417500000, 5617500000, 6417500000, 7417500000,8417500000]
        }],
    
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
    colors: ['#fdb827'],
    lang: {
        numericSymbols: ['K', ' Jt', 'M', 'T']
    }
});

var chart_lineProduct = new Highcharts.chart({
        chart: {
            renderTo: 'line-outletYearsPlayzone', 
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
            text: 'Omset Years'
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
            name: 'Omset Sale',
            data: [23934, 22503, 27177, 69658, 27031, 19931, 37133, 54175, 19931, 167133, 154175,20000]
        }],
    
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
		colors: ['#fdb827','#888888'],
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
            renderTo: 'line-outletMonthPlayzone',
            type: 'bar',
            backgroundColor: null,   
        },
        xAxis: {
            categories:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'],
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
            text: 'Omset Months'
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
