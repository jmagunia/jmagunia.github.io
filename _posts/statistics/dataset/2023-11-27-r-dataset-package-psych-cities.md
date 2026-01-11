---
title: R Dataset / Package psych / cities
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">cities</span> data set which pertains to Distances between 11 US cities. The <span class="mono">cities</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">cities</span> data set in R by issuing the following command at the console <span class="mono">data("cities")</span>. This will load the data into a variable called <span class="mono">cities</span>. If R says the <span class="mono">cities</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-20432.csv">cities R data set</a></span>. The size of this file is about 638 bytes.</p><h2>Distances between 11 US cities</h2>
<h3>Description</h3>
<p>Airline distances between 11 US cities may be used as an example for multidimensional scaling or cluster analysis.</p>
<h3>Usage</h3>
<pre>data(cities)</pre>
<h3>Format</h3>
<p>A data frame with 11 observations on the following 11 variables.</p>
<dl>
<dt><code>ATL</code></dt>
<dd>
<p>Atlana, Georgia</p>
</dd>
<dt><code>BOS</code></dt>
<dd>
<p>Boston, Massachusetts</p>
</dd>
<dt><code>ORD</code></dt>
<dd>
<p>Chicago, Illinois</p>
</dd>
<dt><code>DCA</code></dt>
<dd>
<p>Washington, District of Columbia</p>
</dd>
<dt><code>DEN</code></dt>
<dd>
<p>Denver, Colorado</p>
</dd>
<dt><code>LAX</code></dt>
<dd>
<p>Los Angeles, California</p>
</dd>
<dt><code>MIA</code></dt>
<dd>
<p>Miami, Florida</p>
</dd>
<dt><code>JFK</code></dt>
<dd>
<p>New York, New York</p>
</dd>
<dt><code>SEA</code></dt>
<dd>
<p>Seattle, Washington</p>
</dd>
<dt><code>SFO</code></dt>
<dd>
<p>San Francisco, California</p>
</dd>
<dt><code>MSY</code></dt>
<dd>
<p>New Orleans, Lousianna</p>
</dd>
</dl>
<h3>Details</h3>
<p>An 11 x11 matrix of distances between major US airports. This is a useful demonstration of multiple dimensional scaling.</p>
<p>city.location is a dataframe of longitude and latitude for those cities.</p>
<p>Note that the 2 dimensional MDS solution does not perfectly capture the data from these city distances. Boston, New York and Washington, D.C. are located slightly too far west, and Seattle and LA are slightly too far south.</p>
<h3>Source</h3>
<p><a href="http://www.timeanddate.com/worldclock/distance.html">http://www.timeanddate.com/worldclock/distance.html</a></p>
<h3>Examples</h3>
<pre>data(cities)
city.location[,1] &lt;- -city.location[,1]
#not run
#an overlay map can be added if the package maps is available
#
#
#libary(maps)
#map("usa")
#title("MultiDimensional Scaling of US cities")
#points(city.location)plot(city.location, xlab="Dimension 1", ylab="Dimension 2",
 main ="Multidimensional scaling of US cities")
city.loc &lt;- cmdscale(cities, k=2) #ask for a 2 dimensional solutionround(city.loc,0) 
city.loc &lt;- -city.loc 
 city.loc &lt;- rescale(city.loc,apply(city.location,2,mean),apply(city.location,2,sd))
points(city.loc,type="n") 
text(city.loc,labels=names(cities))</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-20432.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-20432.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-cities.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-20432.json';</script>