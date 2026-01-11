var margin = {top: 30, right: 10, bottom: 10, left: 0},width = 500 - margin.left - margin.right,height = 400 - margin.top - margin.bottom;

var svg = d3.select("#d3-plot").append("svg").attr("width", 500).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(-70," + margin.top + ")");

data = d3.csv("https://jmagunia.com/vis/pa-2.csv");

data.then(function(data) {
  dimensions = Object.keys(data[0]).filter(function(d) { return d != "kint" })
  var y = {}

  for (i in dimensions) {
    name = dimensions[i]
    y[name] = d3.scaleLinear().domain( d3.extent(data,function(d) {return +d[name];}) ).range([height, 0])
  }

  x = d3.scalePoint().range([0, width]).padding(1).domain(dimensions);

  function path(d) {
    return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  svg.selectAll("kint").data(data).enter().append("path").attr("d",path).style("fill", "none").style("stroke", "pink").style("opacity", 1)

  svg.selectAll("kint").data(dimensions).enter().append("g").attr("transform", function(d) { return "translate(" + x(d) + ")";}).each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])).attr("class", "label"); }).append("text").style("text-anchor", "middle").attr("y", -9).text(function(d) { return d; }).style("fill", "#777")

})

