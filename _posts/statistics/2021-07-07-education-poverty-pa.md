---
title: Poverty and Education in Pennsylvania
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /education-poverty-pa.html
---
<p>It would seem that poverty and education are connected, but what does the data say? To understand this relationship, I took <a target="_blank" href="/vis/pa.csv">my survey data</a> from <a target="_blank" href="https://www.openintro.org/data/index.php?data=county_complete">Open Intro</a> and focused on the following three variables for counties in Pennsylvania using only the <a  target="_blank" href="https://d3js.org">D3 JavaScript library</a> for data visualization. Please note that data for some counties were missing for 2019.</p>
<ol><li>Percent of the county population in poverty - <code>poverty_2019</code></li><li>Percent of the county with a bachelors degree - <code>bachelors_2019</code></li><li>Population of the county - <code>pop_2019</code></li></ol>
<p>The data seems to corroborate the negative relationship as most people would likely imagine. Take a closer look using the plots created below. Navigate to a different plot by clicking one of the buttons below. The first plot, a scatterplot, is loaded already with accompanying informational text directly below the plot.</p>
<link rel="stylesheet" href="/vis/style.css">
<script src="https://d3js.org/d3.v6.js"></script>
<button onclick="getScatterPlot();" id="button-scatterplot">Scatter Plot</button>
<button onclick="getBoxPlot();" id="button-boxplot">Box Plot</button>
<button onclick="getParallelPlot();" id="button-parallelplot">Parallel Plot</button>
<div id="d3-plot"></div>
<div id="d3-plot-info"></div>
<p style="font-size:12px;">D3 Code: <code><a target="_blank" href="/vis/narrative-1.js">narrative-1.js</a></code>,<code><a target="_blank" href="/vis/narrative-2.js">narrative-2.js</a></code>,<code><a target="_blank" href="/vis/narrative-3.js">narrative-3.js</a></code></p>
<script>
function getScatterPlot() {
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = true;
    s.src = "/vis/narrative-1.js"; 
    var fs = document.getElementById('d3-plot');
    fs.innerHTML = '';
    fs.appendChild(s);
    document.getElementById('button-scatterplot').style.backgroundColor = '#467fa6';
    document.getElementById('button-boxplot').style.backgroundColor = '#063f76';
    document.getElementById('button-parallelplot').style.backgroundColor = '#063f76';
    document.getElementById('d3-plot-info').style.marginTop = '10px';
    document.getElementById('d3-plot-info').innerHTML = "<p>The scatterplot above plots the percentage of people with a bachelors degree in each county in Pennsylvania as the independent variable and the percentage of people in poverty as the dependendent variable. It is possible to see the negative downsloping relationship between these two variables. Hover your mouse above any bubble for drill-down tooltips for the county. You can find out more about scatter plots on <a target='_blank' href='https://en.wikipedia.org/wiki/Scatter_plot'>Wikipedia</a>.</p>";
}

function getBoxPlot() {
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = true;
    s.src = "/vis/narrative-2.js"; 
    var fs = document.getElementById('d3-plot');
    fs.innerHTML = '<div style="width:500px;"><div id="boxplot-1" style="width:200px;float:left"></div><div id="boxplot-2" style="width:200px;float:right;"></div></div>';
    fs.appendChild(s);
    document.getElementById('button-scatterplot').style.backgroundColor = '#063f76';
    document.getElementById('button-boxplot').style.backgroundColor = '#467fa6';
    document.getElementById('button-parallelplot').style.backgroundColor = '#063f76';
    document.getElementById('d3-plot-info').style.marginTop = '-130px';
    document.getElementById('d3-plot-info').innerHTML = "<p>The above boxplot shows the distribution of data with nonparametric statistics, namely Q1, Q2 (median), and Q3. The minimum and maximum values for <code>poverty_2019</code> and <code>bachelors</code> are displayed as the whiskers. You can find out more about boxplots on <a target='_blank' href='https://en.wikipedia.org/wiki/Box_plot'>Wikipedia</a>.</p>";
}

function getParallelPlot() {
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = true;
    s.src = "/vis/narrative-3.js"; 
    var fs = document.getElementById('d3-plot');
    fs.innerHTML = '';
    fs.appendChild(s);
    document.getElementById('button-scatterplot').style.backgroundColor = '#063f76';
    document.getElementById('button-boxplot').style.backgroundColor = '#063f76';
    document.getElementById('button-parallelplot').style.backgroundColor = '#467fa6';
    document.getElementById('d3-plot-info').style.marginTop = '-130px';
    document.getElementById('d3-plot-info').innerHTML = "<p>The above parallel plot displays three dimensional data in two dimensions. We can see most of the data lines extend from the lower end of the spectrum for education. Like, most of the data lines extend from the top of the spectrum for poverty. This indicates a negative relationship between education and poverty. In other words, as education levels increase, poverty tends to decrease. You can find out more about parallel coordinates on <a target='_blank' href='https://en.wikipedia.org/wiki/Parallel_coordinates'>Wikipedia</a>.</p>";
}

getScatterPlot();
document.getElementById('button-scatterplot').style.backgroundColor = '#467fb6';
document.getElementById('d3-plot-info').innerHTML = "<p>The scatterplot above plots the percentage of people with a bachelors degree in each county in Pennsylvania as the independent variable and the percentage of people in poverty as the dependendent variable. It is possible to see the negative downsloping relationship between these two variables. Hover your mouse above any bubble for drill-down tooltips for the county. You can find out more about scatter plots on <a target='_blank' href='https://en.wikipedia.org/wiki/Scatter_plot'>Wikipedia</a>.</p>";

</script>
