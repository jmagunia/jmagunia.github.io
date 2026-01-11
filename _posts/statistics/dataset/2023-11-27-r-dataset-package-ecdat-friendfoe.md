---
title: R Dataset / Package Ecdat / FriendFoe
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">FriendFoe</span> data set which pertains to Data from the Television Game Show Friend Or Foe ? . The <span class="mono">FriendFoe</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">FriendFoe</span> data set in R by issuing the following command at the console <span class="mono">data("FriendFoe")</span>. This will load the data into a variable called <span class="mono">FriendFoe</span>. If R says the <span class="mono">FriendFoe</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-69748.csv">FriendFoe R data set</a></span>. The size of this file is about 14,976 bytes.</p><h2>Data from the Television Game Show Friend Or Foe ?</h2>
<h3>Description</h3>
<p>a cross-section from 2002–03</p>
<p><em>number of observations</em> : 227</p>
<p><em>observation</em> : individuals</p>
<p><em>country</em> : United States</p>
<h3>Usage</h3>
<pre>data(FriendFoe)</pre>
<h3>Format</h3>
<p>A dataframe containing :</p>
<dl>
<dt>sex</dt>
<dd>
<p>contestant's sex</p>
</dd>
<dt>white</dt>
<dd>
<p>is contestant white ?</p>
</dd>
<dt>age</dt>
<dd>
<p>contestant's age in years</p>
</dd>
<dt>play</dt>
<dd>
<p>contestant's choice : a factor with levels "foe" and "friend". If both players play "friend", they share the trust box, if both play "foe", both players receive zero prize, if one of them play "foe" and the other one "friend", the "foe" player receive the entire trust bix and the "friend" player nothing</p>
</dd>
<dt>round</dt>
<dd>
<p>round in which contestant is eliminated, a factor with levels ("1","2","3")</p>
</dd>
<dt>season</dt>
<dd>
<p>season show, a factor with levels ("1","2")</p>
</dd>
<dt>cash</dt>
<dd>
<p>the amount of cash in the trust box</p>
</dd>
<dt>sex1</dt>
<dd>
<p>partner's sex</p>
</dd>
<dt>white1</dt>
<dd>
<p>is partner white ?</p>
</dd>
<dt>age1</dt>
<dd>
<p>partner's age in years</p>
</dd>
<dt>play1</dt>
<dd>
<p>partner's choice : a factor with levels "foe" and "friend"</p>
</dd>
<dt>win</dt>
<dd>
<p>money won by contestant</p>
</dd>
<dt>win1</dt>
<dd>
<p>money won by partner</p>
</dd>
</dl>
<h3>Source</h3>
<p>Kalist, David E. (2004) “Data from the Television Game Show "Friend or Foe?"”, <em>Journal of Statistics Education</em>, <b>12(3)</b>.</p>
<h3>References</h3>
<p>Journal of Statistics Education's data archive : <a href="http://www.amstat.org/publications/jse/jse_data_archive.htm">http://www.amstat.org/publications/jse/jse_data_archive.htm</a>.</p>
<h3>See Also</h3>
<p><code>Index.Source</code>, <code>Index.Economics</code>, <code>Index.Econometrics</code>, <code>Index.Observations</code></p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-69748.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-69748.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-friendfoe.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-69748.json';</script>