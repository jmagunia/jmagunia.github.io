---
title: R Dataset / Package DAAG / carprice
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">carprice</span> data set which pertains to US Car Price Data. The <span class="mono">carprice</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">carprice</span> data set in R by issuing the following command at the console <span class="mono">data("carprice")</span>. This will load the data into a variable called <span class="mono">carprice</span>. If R says the <span class="mono">carprice</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-70618.csv">carprice R data set</a></span>. The size of this file is about 2,076 bytes.</p><h2>US Car Price Data</h2>
<h3>Description</h3>
<p>U.S. data extracted from <code>Cars93</code>, a data frame in the MASS package.</p>
<h3>Usage</h3>
<pre>carprice</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>Type</dt>
<dd>
<p>Type of car, e.g. Sporty, Van, Compact</p>
</dd>
<dt>Min.Price</dt>
<dd>
<p>Price for a basic model</p>
</dd>
<dt>Price</dt>
<dd>
<p>Price for a mid-range model</p>
</dd>
<dt>Max.Price</dt>
<dd>
<p>Price for a ‘premium’ model</p>
</dd>
<dt>Range.Price</dt>
<dd>
<p>Difference between Max.Price and Min.Price</p>
</dd>
<dt>RoughRange</dt>
<dd>
<p>Rough.Range plus some N(0,.0001) noise</p>
</dd>
<dt>gpm100</dt>
<dd>
<p>The number of gallons required to travel 100 miles</p>
</dd>
<dt>MPG.city</dt>
<dd>
<p>Average number of miles per gallon for city driving</p>
</dd>
<dt>MPG.highway</dt>
<dd>
<p>Average number of miles per gallon for highway driving</p>
</dd>
</dl>
<h3>Source</h3>
<p>MASS package</p>
<h3>References</h3>
<p>Venables, W.N.\ and Ripley, B.D., 4th edn 2002. Modern Applied Statistics with S. Springer, New York.</p>
<p>See also ‘R’ Complements to Modern Applied Statistics with S-Plus, available from <a href="http://www.stats.ox.ac.uk/pub/MASS3/">http://www.stats.ox.ac.uk/pub/MASS3/</a></p>
<h3>Examples</h3>
<pre> 
print("Multicollinearity - Example 6.8")
pairs(carprice[,-c(1,8,9)])carprice1.lm &lt;- lm(gpm100 ~ Type+Min.Price+Price+Max.Price+Range.Price,
data=carprice)
round(summary(carprice1.lm)$coef,3)
pause()alias(carprice1.lm)
pause()carprice2.lm &lt;- lm(gpm100 ~ Type+Min.Price+Price+Max.Price+RoughRange, data=carprice)
round(summary(carprice2.lm)$coef, 2)
pause()carprice.lm &lt;- lm(gpm100 ~ Type + Price, data = carprice)
round(summary(carprice.lm)$coef,4)
pause()summary(carprice1.lm)$sigma # residual standard error when fitting all 3 price variables
pause()summary(carprice.lm)$sigma# residual standard error when only price is used
pause()vif(lm(gpm100 ~ Price, data=carprice)) # Baseline Price
pause()vif(carprice1.lm)# includes Min.Price, Price &amp; Max.Price
pause()vif(carprice2.lm)# includes Min.Price, Price, Max.Price &amp; RoughRange
pause()vif(carprice.lm) # Price alone
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-70618.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-70618.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-carprice.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-70618.json';</script>