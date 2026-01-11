---
title: ChickWeight
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<h2>Weight versus age of chicks on different diets</h2>
<p>The <code>ChickWeight</code> data frame has 578 rows and 4 columns from an experiment on the effect of diet on early growth of chicks.</p>
<h3>Usage</h3>
<pre>ChickWeight</pre>
<h3>Format</h3>
<p>An object of class <code>c("nfnGroupedData", "nfGroupedData", "groupedData", "data.frame")</code> containing the following columns:</p>
<dl>
<dt>weight</dt>
<dd>
<p>a numeric vector giving the body weight of the chick (gm).</p>
</dd>
<dt>Time</dt>
<dd>
<p>a numeric vector giving the number of days since birth when the measurement was made.</p>
</dd>
<dt>Chick</dt>
<dd>
<p>an ordered factor with levels <code>18</code> &lt; ... &lt; <code>48</code> giving a unique identifier for the chick. The ordering of the levels groups chicks on the same diet together and orders them according to their final weight (lightest to heaviest) within diet.</p>
</dd>
<dt>Diet</dt>
<dd>
<p>a factor with levels 1, ..., 4 indicating which experimental diet the chick received.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The body weights of the chicks were measured at birth and every second day thereafter until day 20. They were also measured on day 21. There were four groups on chicks on different protein diets.</p>
<p>This dataset was originally part of package <code>nlme</code>, and that has methods (including for <code>[</code>, <code>as.data.frame</code>, <code>plot</code> and <code>print</code>) for its grouped-data classes.</p>
<h3>Source</h3>
<p>Crowder, M. and Hand, D. (1990), <em>Analysis of Repeated Measures</em>, Chapman and Hall (example 5.3)</p>
<p>Hand, D. and Crowder, M. (1996), <em>Practical Longitudinal Data Analysis</em>, Chapman and Hall (table A.2)</p>
<p>Pinheiro, J. C. and Bates, D. M. (2000) <em>Mixed-effects Models in S and S-PLUS</em>, Springer.</p>
<h3>See Also</h3>
<p><code>SSlogis</code> for models fitted to this dataset.</p>
<h3>Examples</h3>
<pre>
require(graphics)
coplot(weight ~ Time | Chick, data = ChickWeight,
 type = "b", show.given = FALSE)
</pre></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-45458.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-45458.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/chickweight.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-45458.json';</script>