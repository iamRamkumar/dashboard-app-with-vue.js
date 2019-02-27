
export default class dashUtility {
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
