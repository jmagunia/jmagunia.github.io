---
title: R Dataset / Package lme4 / Penicillin
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Penicillin</span> data set which pertains to Variation in penicillin testing. The <span class="mono">Penicillin</span> data set is found in the <span class="mono">lme4</span> R package. You can load the <span class="mono">Penicillin</span> data set in R by issuing the following command at the console <span class="mono">data("Penicillin")</span>. This will load the data into a variable called <span class="mono">Penicillin</span>. If R says the <span class="mono">Penicillin</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("lme4")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-15229.csv">Penicillin R data set</a></span>. The size of this file is about 1,612 bytes.</p><h2>Variation in penicillin testing</h2>
<h3>Description</h3>
<p>Six samples of penicillin were tested using the <em>B. subtilis</em> plate method on each of 24 plates. The response is the diameter (mm) of the zone of inhibition of growth of the organism.</p>
<h3>Format</h3>
<p>A data frame with 144 observations on the following 3 variables.</p>
<dl>
<dt><code>diameter</code></dt>
<dd>
<p>diameter (mm) of the zone of inhibition of the growth of the organism.</p>
</dd>
<dt><code>plate</code></dt>
<dd>
<p>assay plate. A factor with levels ‘a’ to ‘x’.</p>
</dd>
<dt><code>sample</code></dt>
<dd>
<p>penicillin sample. A factor with levels ‘A’ to ‘F’.</p>
</dd>
</dl>
<h3>Details</h3>
<p>The data are described in Davies and Goldsmith (1972) as coming from an investigation to “assess the variability between samples of penicillin by the <em>B. subtilis</em> method. In this test method a bulk-inoculated nutrient agar medium is poured into a Petri dish of approximately 90 mm. diameter, known as a plate. When the medium has set, six small hollow cylinders or pots (about 4 mm. in diameter) are cemented onto the surface at equally spaced intervals. A few drops of the penicillin solutions to be compared are placed in the respective cylinders, and the whole plate is placed in an incubator for a given time. Penicillin diffuses from the pots into the agar, and this produces a clear circular zone of inhibition of growth of the organisms, which can be readily measured. The diameter of the zone is related in a known way to the concentration of penicillin in the solution.”</p>
<h3>Source</h3>
<p>O.L. Davies and P.L. Goldsmith (eds), <em>Statistical Methods in Research and Production, 4th ed.</em>, Oliver and Boyd, (1972), section 6.6</p>
<h3>Examples</h3>
<pre>
str(Penicillin)
require(lattice)
dotplot(reorder(plate, diameter) ~ diameter, Penicillin, groups = sample,
ylab = "Plate", xlab = "Diameter of growth inhibition zone (mm)",
type = c("p", "a"), auto.key = list(columns = 3, lines = TRUE,
title = "Penicillin sample"))
(fm1 &lt;- lmer(diameter ~ (1|plate) + (1|sample), Penicillin))L &lt;- getME(fm1, "L")
Matrix::image(L, main = "L",
sub = "Penicillin: Structure of random effects interaction")
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-15229.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-15229.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-lme4-penicillin.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-15229.json';</script>