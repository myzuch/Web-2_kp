import { createApp } from 'vue'
import App from './App.vue'
import KProgress from 'k-progress-v3';
import ApexCharts from 'apexcharts'

const app = createApp(App);
app
  .component('k-progress', KProgress)
  .mount('#app');
  var options = {
            series: [75],
            chart: {
            height: 245,
            type: 'radialBar',
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
               hollow: {
                margin: 0,
                size: '85%',
                background: '#272642',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: false,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#373555',
                strokeWidth: '80%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: false,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },

              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#8d88bd',
                  fontSize: '17px'
                },
                value: {
                  formatter: function(val) {
                    return parseInt(val)+'%';
                  },
                  color: '#8d88bd',
                  fontSize: '36px',
                  fontFamily: '',
                  // fontWeight: 'lighter',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#7f3ee3",
                  opacity: 1
                },
                {
                  offset: 100,
                  color: "#7586f7",
                  opacity: 1
                }
    ]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Completed'],
          };

          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
