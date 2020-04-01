turkey_italy_deaths = document.getElementById('turkey-italy-deaths');

var turkey = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  y: [1, 2, 4, 9, 21, 30, 37, 44, 59, 75, 92, 108, 131, 168, 214],
  type: 'scatter',
  name: 'Turkey'
};

var italy = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  y: [1, 2, 3, 7, 11, 12, 17, 21, 29, 41, 52, 79, 107, 148, 197],
  type: 'scatter',
  name: 'Italy'
};

var spain = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  y: [1, 2, 3, 8, 10, 17, 30, 36, 55, 86, 133, 196, 294, 342, 533],
  type: 'scatter',
  name: 'Spain'
};

// var china = {
//   x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   y: [1, 2, 3, 8, 10, 17, 25, 41, 56, 80, 106, 132, 170, 213, 259],
//   type: 'scatter',
//   name: 'China'
// };

var iran = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  y: [2, 2, 4, 6, 8, 12, 16, 19, 26, 34, 43, 54, 66, 77, 92],
  type: 'scatter',
  name: 'Iran'
};

var us = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  y: [1, 1, 6, 9, 11, 12, 15, 19, 22, 26, 30, 38, 41, 48, 57],
  type: 'scatter',
  name: 'United States'
};

var data = [italy, turkey, spain, iran, us];

Plotly.newPlot(turkey_italy_deaths, data);

state_case_graph = document.getElementById('us-state-cases');
state_death_graph = document.getElementById('us-state-deaths');

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

Plotly.d3.csv('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv', (err, rows) => {
  var data = states.map(y => {
    var d = rows.filter(r => r.state === y)

    return {
      type: 'line',
      name: y,
      mode: 'lines',
      x: d.map(r => r.date),
      y: d.map(r => r.cases)
    }
  })

  Plotly.newPlot(state_case_graph, data)
})

Plotly.d3.csv('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv', (err, rows) => {
  var data = states.map(y => {
    var d = rows.filter(r => r.state === y)

    return {
      type: 'line',
      name: y,
      mode: 'lines',
      x: d.map(r => r.date),
      y: d.map(r => r.deaths)
    }
  })

  Plotly.newPlot(state_death_graph, data)
})
