---
title: R Dataset / Package HistData / Minard.troops
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Minard.troops</span> data set which pertains to Data from Minard's famous graphic map of Napoleon's march on Moscow. The <span class="mono">Minard.troops</span> data set is found in the <span class="mono">HistData</span> R package. You can load the <span class="mono">Minard.troops</span> data set in R by issuing the following command at the console <span class="mono">data("Minard.troops")</span>. This will load the data into a variable called <span class="mono">Minard.troops</span>. If R says the <span class="mono">Minard.troops</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("HistData")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-98157.csv">Minard.troops R data set</a></span>. The size of this file is about 1,142 bytes.</p><h2>Data from Minard's famous graphic map of Napoleon's march on Moscow</h2>
<h3>Description</h3>
<p>Charles Joseph Minard's graphic depiction of the fate of Napoleon's Grand Army in the Russian campaign of 1815 has been called the "greatest statistical graphic ever drawn" (Tufte, 1983). Friendly (2002) describes some background for this graphic, and presented it as Minard's Chalenge: to reproduce it using modern statistical or graphic software, in a way that showed the elegance of some computer language to both describe and produce this graphic.</p>
<h3>Usage</h3>
<pre>
data(Minard.troops)
data(Minard.cities)
data(Minard.temp)
</pre>
<h3>Format</h3>
<p><code>Minard.troops</code>: A data frame with 51 observations on the following 5 variables giving the number of surviving troops.</p>
<dl>
<dt><code>long</code></dt>
<dd>
<p>Longitude</p>
</dd>
<dt><code>lat</code></dt>
<dd>
<p>Latitude</p>
</dd>
<dt><code>survivors</code></dt>
<dd>
<p>Number of surviving troops, a numeric vector</p>
</dd>
<dt><code>direction</code></dt>
<dd>
<p>a factor with levels <code>A</code> ("Advance") <code>R</code> ("Retreat")</p>
</dd>
<dt><code>group</code></dt>
<dd>
<p>a numeric vector</p>
</dd>
</dl>
<p><code>Minard.cities</code>: A data frame with 20 observations on the following 3 variables giving the locations of various places along the path of Napoleon's army.</p>
<dl>
<dt><code>long</code></dt>
<dd>
<p>Longitude</p>
</dd>
<dt><code>lat</code></dt>
<dd>
<p>Latitude</p>
</dd>
<dt><code>city</code></dt>
<dd>
<p>City name: a factor with levels <code>Bobr</code> <code>Chjat</code> ... <code>Witebsk</code> <code>Wixma</code></p>
</dd>
</dl>
<p><code>Minard.temp</code>: A data frame with 9 observations on the following 4 variables, giving the temperature at various places along the march of retreat from Moscow.</p>
<dl>
<dt><code>long</code></dt>
<dd>
<p>Longitude</p>
</dd>
<dt><code>temp</code></dt>
<dd>
<p>Temperature</p>
</dd>
<dt><code>days</code></dt>
<dd>
<p>Number of days on the retreat march</p>
</dd>
<dt><code>date</code></dt>
<dd>
<p>a factor with levels <code>Dec01</code> <code>Dec06</code> <code>Dec07</code> <code>Nov09</code> <code>Nov14</code> <code>Nov28</code> <code>Oct18</code> <code>Oct24</code></p>
</dd>
</dl>
<h3>Details</h3>
<p><code>date</code> in <code>Minard.temp</code> should be made a real date in 1815.</p>
<h3>Source</h3>
<p><a href="http://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/minard.txt">http://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/minard.txt</a></p>
<h3>References</h3>
<p>Friendly, M. (2002). Visions and Re-visions of Charles Joseph Minard, <em>Journal of Educational and Behavioral Statistics</em>, 27, No. 1, 31-51.</p>
<p>Friendly, M. (2003). Re-Visions of Minard. <a href="http://www.math.yorku.ca/SCS/Gallery/re-minard.html">http://www.math.yorku.ca/SCS/Gallery/re-minard.html</a></p>
<h3>Examples</h3>
<pre>
data(Minard.troops); data(Minard.cities)## Not run: 
require(ggplot2)
 plot_troops &lt;- ggplot(Minard.troops, aes(long, lat)) +
 geom_path(aes(size = survivors, colour = direction, group = group))
 
 plot_both &lt;- plot_troops + 
 geom_text(aes(label = city), size = 4, data = Minard.cities)
 
 plot_polished &lt;- plot_both + 
 scale_size(to = c(1, 12), 
 breaks = c(1, 2, 3) * 10^5, labels = comma(c(1, 2, 3) * 10^5)) + 
 scale_colour_manual(values = c("grey50","red")) +
 xlab(NULL) + 
 ylab(NULL)
 
# re-scale the plot window to an aspect ratio of ~ 4 x 1
 windows(width=12, height=3)
 plot_polished
 
 ## TODO: add the plot of temperature below## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-98157.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-98157.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-histdata-minardtroops.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-98157.json';</script>