var ctx = document.getElementById("stockholm_antal_vaccinerade").getContext("2d");

const colors = {
  lightBlue: {
    fill: '#AFDCEC',
	stroke: '#6fccdd',
  },
  grey: {
    //fill: '#92bed2',
    stroke: '#6D7B8D',
  },
  brown: {
    fill: '#F88017',
    stroke: '#C35817',
  },
};

const stockholmData = [
  [0,32084,10005],
  [0,45677,10005],
  [43500,63988,10005],
  [43500,78645,45770],
  [43500,100628,46920],
  [43500,125955,46920],
  [199000,125955,46920],
  [199000,202085,46920],
  [204000,202085,85560],
  [204000,202085,90850],
  [204000,202085,113045],
  [415500,344570,113045],
  [415500,344570,160770],
  [438500,344570,181815],
  [438500,344570,218615],
  [801500,835850,218615],
  [801500,835850,441140],
  [965000,835850,481620],
  [965000,835850,655960],
  [1061500,835850,655960],
  [1061500,1439830,655960],
  [1061500,1439830,917470],
  [2535500,1439830,1008435],
  [2827500,1439830,1138845],
  [2827500,2343730,1138845],
  [2827500,2343730,1286275],
  [3715500,2343730,1513975],
  [5973500,2343730,1614370],
  [6237500,3298230,1614370],
  [6237500,3298230,1614370],
  [7137500,3298230,1929930],
  [8957500,3298230,1929930],
  [10053500,3298230,1929930],
  [10053500,4252730,1929930],
  [10053500,4252730,1929930],
  [12253500,4252730,1929930],
  [14306500,4252730,1929930],
  [14306500,5207230,1929930],
  [14306500,5207230,1929930],
  [15206500,5207230,1929930],
  [17096500,5207230,1929930],
  [18456500,5207230,1929930],
  [18456500,5207230,1929930],
  [18456500,5207230,1929930],
  [19756500,5207230,1929930],
  [21706500,5207230,1929930],
  [21706500,5207230,1929930],
  [21706500,5207230,1929930],
  [21706500,5207230,1929930],
  [22296500,5207230,1929930]
];





//const fullgodskydd = stockholmData[0-49];
var fullgodskydd = stockholmData.map(function(value,index) { return value[0]; });
var godskydd = stockholmData.map(function(value,index) { return value[2]; });
var antaladmindoser = stockholmData.map(function(value,index) { return value[1]; });
const vecka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 ,36, 37, 38, 39, 40, 41, 42, 43, 44 ,45, 46, 47, 48, 49, 50, 51, 52]; 

//const godskydd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//const antaladmindoser = [43500, 204000, 535000, 1154500, 3290000, 5916500, 9846500, 13996500, 18146500, 22296500, 22296500, 22296500];
//const period = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];



const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: vecka,
    datasets: [{
      label: "Antal administrerade doser",
      fill: true,
      //backgroundColor: colors.grey.fill,
      //pointBackgroundColor: colors.grey.stroke,
      borderColor: colors.grey.stroke,
      pointHighlightStroke: colors.grey.stroke,
      borderCapStyle: 'butt',
      data: antaladmindoser,
    }, {
      label: "God Skyddseffekt",
      fill: true,
      backgroundColor: colors.lightBlue.fill,
      pointBackgroundColor: colors.lightBlue.stroke,
      borderColor: colors.lightBlue.stroke,
      pointHighlightStroke: colors.lightBlue.stroke,
      borderCapStyle: 'butt',
      data: godskydd,
    }, {
      label: "Fullgod Skyddseffekt",
      fill: true,
      backgroundColor: colors.brown.fill,
      pointBackgroundColor: colors.brown.stroke,
      borderColor: colors.brown.stroke,
      pointHighlightStroke: colors.brown.stroke,
      data: fullgodskydd,
    }]
  },
  options: {
    responsive: false,
    // Can't just just `stacked: true` like the docs say
    scales: {
      yAxes: [{
        stacked: false,
      }]
    },
    animation: {
      duration: 750,
    },
  }
});
