---
title: R Dataset / Package boot / tau
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">tau</span> data set which pertains to Tau Particle Decay Modes. The <span class="mono">tau</span> data set is found in the <span class="mono">boot</span> R package. You can load the <span class="mono">tau</span> data set in R by issuing the following command at the console <span class="mono">data("tau")</span>. This will load the data into a variable called <span class="mono">tau</span>. If R says the <span class="mono">tau</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("boot")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-14097.csv">tau R data set</a></span>. The size of this file is about 559 bytes.</p><h2>Tau Particle Decay Modes</h2>
<h3>Description</h3>
<p>The <code>tau</code> data frame has 60 rows and 2 columns.</p>
<p>The tau particle is a heavy electron-like particle discovered in the 1970's by Martin Perl at the Stanford Linear Accelerator Center. Soon after its production the tau particle decays into various collections of more stable particles. About 86% of the time the decay involves just one charged particle. This rate has been measured independently 13 times.</p>
<p>The one-charged-particle event is made up of four major modes of decay as well as a collection of other events. The four main types of decay are denoted rho, pi, e and mu. These rates have been measured independently 6, 7, 14 and 19 times respectively. Due to physical constraints each experiment can only estimate the composite one-charged-particle decay rate or the rate of one of the major modes of decay.</p>
<p>Each experiment consists of a major research project involving many years work. One of the goals of the experiments was to estimate the rate of decay due to events other than the four main modes of decay. These are uncertain events and so cannot themselves be observed directly.</p>
<h3>Usage</h3>
<pre>
tau
</pre>
<h3>Format</h3>
<p>This data frame contains the following columns:</p>
<dl>
<dt><code>rate</code></dt>
<dd>
<p>The decay rate expressed as a percentage.</p>
</dd>
<dt><code>decay</code></dt>
<dd>
<p>The type of decay measured in the experiment. It is a factor with levels <code>1</code>, <code>rho</code>, <code>pi</code>, <code>e</code> and <code>mu</code>.</p>
</dd>
</dl>
<h3>Source</h3>
<p>The data were obtained from</p>
<p>Efron, B. (1992) Jackknife-after-bootstrap standard errors and influence functions (with Discussion). <em>Journal of the Royal Statistical Society, B</em>, <b>54</b>, 83–127.</p>
<h3>References</h3>
<p>Davison, A.C. and Hinkley, D.V. (1997) <em>Bootstrap Methods and Their Application</em>. Cambridge University Press.</p>
<p>Hayes, K.G., Perl, M.L. and Efron, B. (1989) Application of the bootstrap statistical method to the tau-decay-mode problem. <em>Physical Review, D</em>, <b>39</b>, 274-279.</p>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-14097.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-14097.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-boot-tau.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-14097.json';</script>