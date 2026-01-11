---
title: R Dataset / Package car / Highway1
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Highway1</span> data set which pertains to Highway Accidents. The <span class="mono">Highway1</span> data set is found in the <span class="mono">car</span> R package. You can load the <span class="mono">Highway1</span> data set in R by issuing the following command at the console <span class="mono">data("Highway1")</span>. This will load the data into a variable called <span class="mono">Highway1</span>. If R says the <span class="mono">Highway1</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("car")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69930.csv">Highway1 R data set</a></span>. The size of this file is about 2,306 bytes.</p><h2>Highway Accidents</h2>
<h3>Description</h3>
<p>The data comes from a unpublished master's paper by Carl Hoffstedt. They relate the automobile accident rate, in accidents per million vehicle miles to several potential terms. The data include 39 sections of large highways in the state of Minnesota in 1973. The goal of this analysis was to understand the impact of design variables, <code>Acpts</code>, <code>Slim</code>, <code>Sig</code>, and <code>Shld</code> that are under the control of the highway department, on accidents.</p>
<h3>Usage</h3>
<pre>
Highway1
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>rate</dt>
<dd>
<p>1973 accident rate per million vehicle miles</p>
</dd>
<dt>len</dt>
<dd>
<p>length of the <code>Highway1</code> segment in miles</p>
</dd>
<dt>adt</dt>
<dd>
<p>average daily traffic count in thousands</p>
</dd>
<dt>trks</dt>
<dd>
<p>truck volume as a percent of the total volume</p>
</dd>
<dt>sigs1</dt>
<dd>
<p>(number of signalized interchanges per mile times len + 1)/len, the number of signals per mile of roadway, adjusted to have no zero values.</p>
</dd>
<dt>slim</dt>
<dd>
<p>speed limit in 1973</p>
</dd>
<dt>shld</dt>
<dd>
<p>width in feet of outer shoulder on the roadway</p>
</dd>
<dt>lane</dt>
<dd>
<p>total number of lanes of traffic</p>
</dd>
<dt>acpt</dt>
<dd>
<p>number of access points per mile</p>
</dd>
<dt>itg</dt>
<dd>
<p>number of freeway-type interchanges per mile</p>
</dd>
<dt>lwid</dt>
<dd>
<p>lane width, in feet</p>
</dd>
<dt>htype</dt>
<dd>
<p>An indicator of the type of roadway or the source of funding for the road, either MC, FAI, PA, or MA</p>
</dd>
</dl>
<h3>Source</h3>
<p>Carl Hoffstedt. This differs from the dataset <code>Highway</code> in the <code>alr4</code> package only by addition of transformation of some of the columns.</p>
<h3>References</h3>
<p>Fox, J. and Weisberg, S. (2011) <em>An R Companion to Applied Regression</em>, Second Edition, Sage.</p>
<p>Weisberg, S. (2014) <em>Applied Linear Regression</em>, Fourth Edition, Wiley, Section 7.2.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69930.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69930.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-car-highway1.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69930.json';</script>