margin = {top: 10, right: 30, bottom: 30, left: 40},width = 200 - margin.left - margin.right,height = 400 - margin.top - margin.bottom;

svg = d3.select("#boxplot-1").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(25," + margin.top + ")");

data = d3.csv("https://jmagunia.com/vis/pa.csv")
data.then(function(data) {

  // Poverty 
  var q1_1 = d3.quantile(data.map(function(d) { return d.poverty_2019 }), 0.25);
  var median_1 = d3.median(data.map(function(d) { return d.poverty_2019 }));
  var q3_1 = d3.quantile(data.map(function(d) { return d.poverty_2019 }), 0.75);

  var IQR_1 = q3_1 - q1_1;
  var min_1 = d3.min(data, function(d, i) { return parseFloat(d.poverty_2019); });
  var max_1 = d3.max(data, function(d, i) { return parseFloat(d.poverty_2019); });
  var y = d3.scaleLinear().domain([4,20]).range([height, 0]);
  svg.call(d3.axisLeft(y))

  var center = 100
  var width = 75

  var x = d3.scaleBand().range([ 0, width ]).domain(["poverty_2019"]).paddingInner(1).paddingOuter(.5)

  svg.append("g").attr("transform", "translate(60," + height + ")").call(d3.axisBottom(x)).attr("class", "label")

  svg.append("line").attr("x1",center).attr("x2",center).attr("y1",y(min_1)).attr("y2",y(max_1)).attr("stroke","#777")

  svg.append("rect").attr("x",center - width/2).attr("y",y(q3_1)).attr("height",(y(q1_1)-y(q3_1))).attr("width", width ).attr("stroke","#777").style("fill", "pink")

  svg.selectAll("kint").data([min_1, median_1, max_1]).enter().append("line").attr("x1", center-width/2).attr("x2", center+width/2).attr("y1",function(d){ return(y(d))}).attr("y2",function(d){ return(y(d))}).attr("stroke","#777");

  // Education

  margin = {top: 10, right: 30, bottom: 30, left: 40},width = 200 - margin.left - margin.right,height = 400 - margin.top - margin.bottom;

  svg = d3.select("#boxplot-2").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");

  data.sort(function(a,b) { return +a.bachelors_2019 - +b.bachelors_2019 });
  var q1_2 = d3.quantile(data.map(function(d) { return d.bachelors_2019}), 0.25);
  var median_2 = d3.median(data.map(function(d) { return d.bachelors_2019 }));
  var q3_2 = d3.quantile(data.map(function(d) { return d.bachelors_2019 }), 0.75);

  var IQR_2 = q3_2 - q1_2;
  var min_2 = d3.min(data, function(d) { return d.bachelors_2019; });
  var max_2 = d3.max(data, function(d) { return d.bachelors_2019; });
  y = d3.scaleLinear().domain([0,60]).range([height, 0]);
  svg.call(d3.axisLeft(y))

  center = 100
  width = 75

  var x = d3.scaleBand().range([ 0, width ]).domain(["bachelors_2019"]).paddingInner(1).paddingOuter(.5)

  svg.append("g").attr("transform", "translate(60," + height + ")").call(d3.axisBottom(x)).attr("class", "label")

  svg.append("line").attr("x1",center).attr("x2",center).attr("y1",y(min_2)).attr("y2",y(max_2)).attr("stroke","#777")

  svg.append("rect").attr("x",center - width/2).attr("y",y(q3_2)).attr("height",(y(q1_2)-y(q3_2))).attr("width", width ).attr("stroke","#777").style("fill", "pink")

  svg.selectAll("kint").data([min_2, median_2, max_2]).enter().append("line").attr("x1", center-width/2).attr("x2", center+width/2).attr("y1",function(d){ return(y(d))}).attr("y2",function(d){ return(y(d))}).attr("stroke","#777");

  svg.append("text").attr("class", "label").attr("text-anchor", "end").attr("x", -90).attr("y", 158).text("Long-tail").attr("transform", "rotate(270)").attr("fill", "#777");

  svg.append("text").attr("class", "label").attr("text-anchor", "end").attr("x", 62).attr("y", 45).text("Chester Co.").attr("fill", "#777").style("font-size", "9px")
});
