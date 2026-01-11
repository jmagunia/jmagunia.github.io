---
title: R Dataset / Package vcd / Bundestag2005
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">Bundestag2005</span> data set which pertains to Votes in German Bundestag Election 2005. The <span class="mono">Bundestag2005</span> data set is found in the <span class="mono">vcd</span> R package. You can load the <span class="mono">Bundestag2005</span> data set in R by issuing the following command at the console <span class="mono">data("Bundestag2005")</span>. This will load the data into a variable called <span class="mono">Bundestag2005</span>. If R says the <span class="mono">Bundestag2005</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("vcd")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-96361.csv">Bundestag2005 R data set</a></span>. The size of this file is about 789 bytes.</p><h2>Votes in German Bundestag Election 2005</h2>
<h3>Description</h3>
<p>Number of votes by province in the German Bundestag election 2005 (for the parties that eventually entered the parliament).</p>
<h3>Usage</h3>
<pre>
data("Bundestag2005")
</pre>
<h3>Format</h3>
<p>A 2-way <code>"table"</code> giving the number of votes for each party (<code>Fraktion</code>) in each of the 16 German provinces (<code>Bundesland</code>):</p>
<table>
<caption>
R project statistics dataset table
</caption>
<tr>
<td style="text-align: right;">No</td>
<td style="text-align: left;">Name</td>
<td style="text-align: left;">Levels</td>
</tr>
<tr>
<td style="text-align: right;">1</td>
<td style="text-align: left;">Bundesland</td>
<td style="text-align: left;">Schleswig-Holstein, Mecklenburg-Vorpommern, ...</td>
</tr>
<tr>
<td style="text-align: right;">2</td>
<td style="text-align: left;">Fraktion</td>
<td style="text-align: left;">SPD, CDU/CSU, Gruene, FDP, Linke</td>
</tr>
</table>
<h3>Details</h3>
<p>In the election for the German parliament “Bundestag”, five parties obtained enough votes to enter the parliament: the social democrats SPD, the conservative CDU/CSU, the liberal FDP, the green party “Die Gruenen” and the leftist party “Die Linke”. The table <code>Bundestag2005</code> gives the number of votes for each party (<code>Fraktion</code>) in each of the 16 German provinces (<code>Bundesland</code>). The provinces are ordered from North to South.</p>
<p>The data have been obtained from the German statistical office (Statistisches Bundesamt) from the Web page given below.</p>
<p>Note that the number of seats in the parliament cannot be computed from the number of votes alone. The examples below show the distribution of seats that resulted from the election.</p>
<h3>Source</h3>
<p>Der Bundeswahlleiter, Statistisches Bundesamt. <a href="http://www.bundeswahlleiter.de/de/bundestagswahlen/fruehere_bundestagswahlen/btw2005.html">http://www.bundeswahlleiter.de/de/bundestagswahlen/fruehere_bundestagswahlen/btw2005.html</a></p>
<h3>Examples</h3>
<pre>
library(colorspace)
## The outcome of the election in terms of seats in the
## parliament was:
seats &lt;- structure(c(226, 61, 54, 51, 222),
.Names = c("CDU/CSU", "FDP","Linke", "Gruene", "SPD"))## Hues are chosen as metaphors for the political parties
## CDU/CSU: blue, FDP: yellow, Linke: purple, Gruene: green, SPD: red
## using the respective hues from a color wheel with
## chroma = 60 and luminance = 75
parties &lt;- rainbow_hcl(6, c = 60, l = 75)[c(5, 2, 6, 3, 1)]
names(parties) &lt;- names(seats)
parties## The pie chart shows that neither the SPD+Gruene coalition nor
## the opposition of CDU/CSU+FDP could assemble a majority.
## No party would enter a coalition with the leftists, leading to a
## big coalition.
pie(seats, clockwise = TRUE, col = parties)## The regional distribution of the votes, stratified by province,
## is shown in a mosaic display: first for the 10 Western then the
## 6 Eastern provinces.
data("Bundestag2005")
votes &lt;- Bundestag2005[c(1, 3:5, 9, 11, 13:16, 2, 6:8, 10, 12),
 c("CDU/CSU", "FDP", "SPD", "Gruene", "Linke")]
mosaic(votes, gp = gpar(fill = parties[colnames(votes)]),
spacing = spacing_highlighting, labeling = labeling_left,
labeling_args = list(rot_labels = c(0, 90, 0, 0), pos_labels = "center",
just_labels = c("center","center","center","right"), varnames = FALSE),
margins = unit(c(2.5, 1, 1, 12), "lines"),
keep_aspect_ratio = FALSE)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-96361.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-96361.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-vcd-bundestag2005.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-96361.json';</script>