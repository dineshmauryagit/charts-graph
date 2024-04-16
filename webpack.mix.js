// webpack.mix.js

const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/chart-script.js', 'public/js')
   .js('resources/js/line-chart.js', 'public/js')
   .js('resources/js/doughnut-chart.js', 'public/js')
   .js('resources/js/cubic-line-chart.js', 'public/js')
   .js('resources/js/bar-chart.js', 'public/js')
   .js('resources/js/line-chart-2.js', 'public/js')
   .postCss("resources/css/app.css", "public/css", [
      require("tailwindcss"),
   ])
   .sourceMaps();
