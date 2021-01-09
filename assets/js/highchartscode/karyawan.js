
  var Total = 0;
  var chart_karyawan = new Highcharts.chart({
        chart: {
            renderTo: 'chart-pie-karyawan',
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 250,
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
                return '<div><span style="color:#fff;">'+ this.name +' : '+'</span><span style="color:#fff;">'+ this.y +'</span></div>';
            },
            itemStyle: {
                fontSize: '11px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              },
            align: 'left',
            verticalAlign: 'bottom',
            layout: 'horizontal',
            symbolWidth: 8,
            symbolHeight: 8,
           
        },
        series: [{
            name: 'Total',
            colorByPoint: true,
            // innerSize: '50%',
            data: [{
                name: 'Kepala Divisi',
                y: 1,
            },
            {
                name: 'Kepala Akunting',
                y: 2,
            },
            {
                name: 'HRD',
                y: 2,
            },
            {
                name: 'Operasional',
                y: 10,
            },
            {
                name: 'Staff Akunting',
                y: 10,
            },
            {
                name: 'Regional',
                y: 20,
            },
            {
                name: 'Supervisor',
                y: 30,
                sliced: true,
                selected: true,
            },
           
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



