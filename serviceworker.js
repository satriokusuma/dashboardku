var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  './',
  './index.html',
  './adduser.html',
  './akuntingifs.html',
  './akuntingrms.html',
  './business-page.html',
  './chart.html',
  './fnb.html',
  './home.html',
  './kiddieland-outlet.html',
  './kiddieland.html',
  './machine.html',
  './playzone-outlet.html',
  './playzone.html',
  './zone2000-outlet.html',
  './zone2000.html',
  './assets/css/bootstrap-datepicker.css',
  './assets/css/bootstrap.min.css',
  './assets/css/dashboardku.css',
  './assets/css/dataTables.min.css',
  './assets/css/font-awesome.css',
  './assets/css/font-awesome.min.css',
  './assets/css/google-roboto-300-700.css',
  './assets/js/datatables/dataTables.min.js',
  './assets/js/highchart/chartplugin.js',
  './assets/js/highchart/highcharts-access.js',
  './assets/js/highchart/highcharts-export.js',
  './assets/js/highchart/highcharts-exporting.js',
  './assets/js/highchart/highcharts.js',
  './assets/js/highchartscode/akuntingifs.js',
  './assets/js/highchartscode/akuntingrms.js',
  './assets/js/highchartscode/business.js',
  './assets/js/highchartscode/chart.js',
  './assets/js/highchartscode/dashboardchart.js',
  './assets/js/highchartscode/fnb.js',
  './assets/js/highchartscode/home.js',
  './assets/js/highchartscode/karyawan.js',
  './assets/js/highchartscode/kiddieland.js',
  './assets/js/highchartscode/outletKiddie.js',
  './assets/js/highchartscode/outletplayzone.js',
  './assets/js/highchartscode/outletZone.js',
  './assets/js/highchartscode/playzone.js',
  './assets/js/highchartscode/zone2000.js',
  './assets/js/apiweather.js',
  './assets/js/app.js',
  './assets/js/bootstrap-datepicker.js',
  './assets/js/bootstrap-select.min.js',
  './assets/js/bootstrap.min.js',
  './assets/js/dashboardku.js',
  './assets/js/dashboardku1.js',
  './assets/js/jasny-bootstrap.min.js',
  './assets/js/jquery-3.1.1.min.js',
  './assets/js/multifield.js',
  './assets/js/perfect-scrollbar.jquery.min.js',
  './assets/js/main.js',
  './assets/img/hero/bg-1.jpg',
  './assets/img/hero/hero-1.jpg',
  './assets/img/hero/hero-2.png',
  './assets/img/hero/hero-3.png',
  './assets/img/hero/hero-4.png',
  './assets/img/hero/hero-5.png',
  './assets/img/hero/hero-6.jpg',
  './assets/img/hero/hero-7.jpg',
  './assets/img/hero/hero-8.jpg',
  './assets/img/hero/hero-9.png',
  './assets/img/hero/hero-10.jpg',
  './assets/img/hero/hero-11.jpg',
  './assets/img/hero/hero-12.png',
  './assets/img/hero/hero-13.jpg',
  './assets/img/hero/hero-14.jpg',
  './assets/img/human/akunting-3.svg',
  './assets/img/human/arcade-2.svg',
  './assets/img/human/fastfood.svg',
  './assets/img/human/human-2.svg',
  './assets/img/human/human-3.svg',
  './assets/img/human/human-4.svg',
  './assets/img/human/human-5.svg',
  './assets/img/human/human-6.svg',
  './assets/img/human/human-7.svg',
  './assets/img/human/human-8.svg',
  './assets/img/human/human-9.svg',
  './assets/img/human/human-10.svg',
  './assets/img/human/human-11.svg',
  './assets/img/human/human-12.svg',
  './assets/img/human/human-13.svg',
  './assets/img/human/human-14.svg',
  './assets/img/human/human-15.svg',
  './assets/img/human/human-16.svg',
  './assets/img/human/human-17.svg',
  './assets/img/human/human.svg',
  './assets/img/human/leaf.svg',
  './assets/img/logo/logo-1.png',
  './assets/img/logo/logo-iphone.png',
  './assets/img/logo/logo.png',
  './assets/img/logo/logo.svg',
  './assets/img/svg/01d.svg',
  './assets/img/svg/01n.svg',
  './assets/img/svg/02d.svg',
  './assets/img/svg/02n.svg',
  './assets/img/svg/03d.svg',
  './assets/img/svg/03n.svg',
  './assets/img/svg/04d.svg',
  './assets/img/svg/04n.svg',
  './assets/img/svg/09d.svg',
  './assets/img/svg/09n.svg',
  './assets/img/svg/10d.svg',
  './assets/img/svg/10n.svg',
  './assets/img/svg/11d.svg',
  './assets/img/svg/11n.svg',
  './assets/img/svg/13d.svg',
  './assets/img/svg/13n.svg',
  './assets/img/svg/50d.svg',
  './assets/img/svg/50n.svg',
  './assets/img/svg/nt_unknown.svg',
  './assets/img/svg/unknown.svg',
  './assets/img/image_placeholder.jpg',
  './assets/img/photo_1.png',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('in install serviceworker..... cache openend!');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
            
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
           
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });


  self.addEventListener('activate', function(event) {

    var cacheAllowlist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });