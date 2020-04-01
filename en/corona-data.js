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
