var margin = {top: 10, right: 20, bottom: 30, left: 50}, width = 500 - margin.left - margin.right,height = 420 - margin.top - margin.bottom;

var svg = d3.select("#d3-plot").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(20,${margin.top})`);

data = d3.csv("https://jmagunia.com/vis/pa.csv");
data.then(function(data) {
  var x = d3.scaleLinear().domain([10,60]).range([0,width])
  svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x));

  var y = d3.scaleLinear().domain([4,19]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  var z = d3.scaleLinear().domain([10000,3000000]).range([ 5, 50]);

  var tooltip = d3.select("#d3-plot").append("div").style("opacity", 0).attr("class", "tooltip");

  var showTooltip = function(event, d) {
    tooltip.transition().duration(0)
    tooltip.style("opacity", 1).html("<strong>County:</strong> <u>" + d.name + "</u><br><strong>Percent with Bachelors (x):</strong> " + d.bachelors_2019 + "%<br><strong>Percent in Poverty (y):</strong> " + d.poverty_2019 + "%<br><strong>Population (r):</strong> " + d3.format(",")(d.pop_2019))
  }

  var hideTooltip = function(event, d) {
    tooltip.transition().duration(0)
    tooltip.style("opacity", 1).html("<strong>County:</strong><br><strong>Percent with Bachelors (x):</strong><br><strong>Percent in Poverty (y):</strong><br><strong>Population (r):</strong>")
  }

  svg.append('g').selectAll("dot").data(data).join("circle").attr('fill','pink').attr("fill-opacity", 1).attr("stroke", "#777").attr("cx", d => x(d.bachelors_2019)).attr("cy", d => y(d.poverty_2019)).attr("r", d => z(d.pop_2019)).on("mouseover", showTooltip ).on("mouseleave", hideTooltip )

  svg.append("text").attr("class", "label").attr("text-anchor", "end").attr("x", width).attr("y", height - 6).text("bachelors_2019");

  svg.append("text").attr("class", "label").attr("text-anchor", "end").attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").text("poverty_2019");

  svg.append('line').style("stroke", "#ccc").style("stroke-width", 1).attr("x1", 0).attr("y1", 70).attr("x2", 400).attr("y2", 380);
  
  svg.append('line').style("stroke", "#ccc").style("stroke-width", 1).attr("x1", 10).attr("y1", 350).attr("x2", 50).attr("y2", 350);

  var lineEq =  svg.append("text").attr("y", 352).attr("x", 175).attr('text-anchor', 'middle').attr("class", "label").text("poverty_2019=-0.15*bachelors_2019+15").attr("fill", "#777");

  hideTooltip();

})  
