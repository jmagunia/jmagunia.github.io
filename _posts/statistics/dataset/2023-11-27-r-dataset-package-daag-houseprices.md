---
title: R Dataset / Package DAAG / houseprices
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">houseprices</span> data set which pertains to Aranda House Prices. The <span class="mono">houseprices</span> data set is found in the <span class="mono">DAAG</span> R package. You can load the <span class="mono">houseprices</span> data set in R by issuing the following command at the console <span class="mono">data("houseprices")</span>. This will load the data into a variable called <span class="mono">houseprices</span>. If R says the <span class="mono">houseprices</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("DAAG")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15245.csv">houseprices R data set</a></span>. The size of this file is about 189 bytes.</p><h2>Aranda House Prices</h2>
<h3>Description</h3>
<p>The <code>houseprices</code> data frame consists of the floor area, price, and the number of bedrooms for a sample of houses sold in Aranda in 1999. Aranda is a suburb of Canberra, Australia.</p>
<h3>Usage</h3>
<pre>houseprices</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt>area</dt>
<dd>
<p>a numeric vector giving the floor area</p>
</dd>
<dt>bedrooms</dt>
<dd>
<p>a numeric vector giving the number of bedrooms</p>
</dd>
<dt>sale.price</dt>
<dd>
<p>a numeric vector giving the sale price in thousands of Australian dollars</p>
</dd>
</dl>
<h3>Source</h3>
<p>J.H. Maindonald</p>
<h3>Examples</h3>
<pre>
plot(sale.price~area, data=houseprices)
pause()coplot(sale.price~area|bedrooms, data=houseprices)
pause()print("Cross-Validation - Example 5.5.2")houseprices.lm &lt;- lm(sale.price ~ area, data=houseprices)
summary(houseprices.lm)$sigma^2
pause()CVlm()
pause()print("Bootstrapping - Example 5.5.3")
houseprices.fn &lt;- function (houseprices, index){
house.resample &lt;- houseprices[index,]
house.lm &lt;- lm(sale.price ~ area, data=house.resample)
coef(house.lm)[2]# slope estimate for resampled data
}
require(boot) # ensure that the boot package is loaded
houseprices.boot &lt;- boot(houseprices, R=999, statistic=houseprices.fn)houseprices1.fn &lt;- function (houseprices, index){
house.resample &lt;- houseprices[index,]
house.lm &lt;- lm(sale.price ~ area, data=house.resample)
predict(house.lm, newdata=data.frame(area=1200))
}houseprices1.boot &lt;- boot(houseprices, R=999, statistic=houseprices1.fn)
boot.ci(houseprices1.boot, type="perc") # "basic" is an alternative to "perc"
houseprices2.fn &lt;- function (houseprices, index){
house.resample &lt;- houseprices[index,]
house.lm &lt;- lm(sale.price ~ area, data=house.resample)
houseprices$sale.price-predict(house.lm, houseprices)# resampled prediction errors
}n &lt;- length(houseprices$area)
R &lt;- 200 
houseprices2.boot &lt;- boot(houseprices, R=R, statistic=houseprices2.fn)
house.fac &lt;- factor(rep(1:n, rep(R, n)))
plot(house.fac, as.vector(houseprices2.boot$t), ylab="Prediction Errors", 
xlab="House")
pause()plot(apply(houseprices2.boot$t,2, sd)/predict.lm(houseprices.lm, se.fit=TRUE)$se.fit,
 ylab="Ratio of Bootstrap SE's to Model-Based SE's", xlab="House", pch=16)
abline(1,0)</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15245.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15245.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-daag-houseprices.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15245.json';</script>