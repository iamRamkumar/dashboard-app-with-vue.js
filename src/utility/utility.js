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
        hAxis: {
          textStyle: { color: 'black  ' }
        },
        vAxis: {
          gridlines: {
            color: 'transparent'
          },
          textStyle: { color: 'black' }
        },
        seriesType: 'bars',
        backgroundColor: 'transparent',
        legend: { position: 'right', textStyle: { color: 'black' } }
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
    }
  }
}
