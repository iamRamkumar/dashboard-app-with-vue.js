import axios from 'axios'

export default class dashUtility {
  static isUserLoggedIn () {
    return !(localStorage.getItem('user') !== '' && dashUtility.getUser() === null)
  }

  static getUser () {
    return localStorage.getItem('user')
  }

  static async getFlightSchedule () {
    await axios.post('http://search.malindoair.com/FlightScheduleSupport.aspx/Get_FlightSchedule', {
      pRequest: {
        DepCity: 'KUL',
        ArrCity: 'SIN',
        SelDate: '2019-02-27',
        BfDays: '0',
        AfDays: '365'
      }
    }, {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }).then(function (response) {
      return response.data
    }).catch(error => console.error(error))
  }

  static getChartData (chartType) {
    switch (chartType) {
      case 'clientGraph': return {
        chart: { title: 'Company Performance' },
        colors: ['#1b9e77', '#d95f02', '#7570b3', '#EFC535'],
        aggregationTarget: 'category',
        hAxis: {
          textStyle: { color: 'white' }
        },
        vAxis: {
          gridlines: {
            color: 'transparent'
          },
          textStyle: { color: 'white' },
          baselineColor: '#34416D'
        },
        seriesType: 'bars',
        backgroundColor: 'transparent',
        legend: { position: 'right', textStyle: { color: 'white' } }
      }
      case 'revenue' : return {
        chart: { title: 'Revenue' },
        curveType: 'function',
        legend: { position: 'bottom' },
        backgroundColor: 'transparent',
        vAxis: {
          gridlines: {
            color: 'transparent'
          }
        }
      }
      case 'chartJSEx' : return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: '#fff'
          }
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart'
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: '#428eff',
              fontStyle: 'bold',
              fontSize: '16'
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: '#fff',
              beginAtZero: true,
              display: false
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
      case 'chartJSLine' : return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }],
          yAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }]
        },
        pointRadius: 1,
        pointHoverRadius: 1
      }
      case 'ggChartLine' : return {
        legend: 'none',
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: 'transparent',
        hAxis: {
          baselineColor: 'none',
          ticks: [],
          textPosition: 'none'
        },
        vAxis: {
          baselineColor: 'none',
          ticks: [],
          textPosition: 'none'
        },
        series: {
          0: {color: '#fff'}
        }
      }
    }
  }
}
