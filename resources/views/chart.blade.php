<!-- resources/views/chart.blade.php -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chart Example</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body class="bg-[#F3F4FF]">

    <div class="flex flex-row h-screen items-stretch">
        <div class="p-2   bg-white rounded-lg m-auto h-80">
            <div style=" margin: 0 auto;">
                <canvas id="myChart1"></canvas>
                <div class="flex row-auto ">
                    <button class="flex flex-row pt-2 " id="toggleLine1">
                        <div class="w-3 h-3 rounded-full bg-[#147AD6] mr-2"></div> Point 1
                    </button>
                    <button class="flex flex-row pt-2" id="toggleLine2">
                        <div class="w-3 h-3 rounded-full bg-[#EC6666] mr-2"></div>Point 2
                    </button>
                </div>

            </div>
        </div>
        <div class="p-2 bg-white rounded-lg m-auto  h-80">
            <div style="margin: 0 auto;">
                <canvas id="myChart2"></canvas>
            </div>
        </div>
        <div class="p-2   bg-white rounded-lg m-auto  h-80">
            <div style=" margin: 0 auto;">
                <canvas id="myChart3"></canvas>
            </div>
        </div>
        <div class="p-2   bg-white rounded-lg m-auto  h-80">
            <div style=" margin: 0 auto;">
                <canvas id="myChart4"></canvas>
            </div>
        </div>
        <div class="p-2  bg-white rounded-lg m-auto  h-80">
            <div style=" margin: 0 auto;">
                <canvas id="myChart5"></canvas>
 
                <div class="flex row-auto ">
                    <button class="flex flex-row pt-2 " id="line2-part1">
                        <div class="w-3 h-3 rounded-full bg-[#147AD6] mr-2"></div> Point 1
                    </button>
                    <button class="flex flex-row pt-2" id="line2-part2">
                        <div class="w-3 h-3 rounded-full bg-[#79D2DE] mr-2"></div>Point 2
                    </button>
                </div>
            </div>
        </div>

    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/chart-script.js') }}"></script>
    <script src="{{ asset('js/line-chart.js') }}"></script>
    <script src="{{ asset('js/doughnut-chart.js') }}"></script>
    <script src="{{ asset('js/cubic-line-chart.js') }}"></script>
    <script src="{{ asset('js/bar-chart.js') }}"></script>
    <script src="{{ asset('js/line-chart-2.js') }}"></script>
</body>

</html>