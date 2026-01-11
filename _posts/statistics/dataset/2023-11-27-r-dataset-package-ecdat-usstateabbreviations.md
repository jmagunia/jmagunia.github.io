---
title: R Dataset / Package Ecdat / USstateAbbreviations
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">USstateAbbreviations</span> data set which pertains to Standard abbreviations for states of the United States . The <span class="mono">USstateAbbreviations</span> data set is found in the <span class="mono">Ecdat</span> R package. You can load the <span class="mono">USstateAbbreviations</span> data set in R by issuing the following command at the console <span class="mono">data("USstateAbbreviations")</span>. This will load the data into a variable called <span class="mono">USstateAbbreviations</span>. If R says the <span class="mono">USstateAbbreviations</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("Ecdat")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-99383.csv">USstateAbbreviations R data set</a></span>. The size of this file is about 5,586 bytes.</p><h2>Standard abbreviations for states of the United States</h2>
<h3>Description</h3>
<p>The object returned by <code>readUSstateAbbreviations()</code> on May 20, 2013.</p>
<h3>Usage</h3>
<pre>
data(USstateAbbreviations)</pre>
<h3>Format</h3>
<p>A <code>data.frame</code> containing 10 different character vectors of names or codes for 76 different political entities including the United States, the 50 states within the US, plus the District of Columbia, US territories and other political designation, some of which are obsolete but are included for historical reference.</p>
<dl>
<dt>Name</dt>
<dd>
<p>The standard name of the entity.</p>
</dd>
<dt>Status</dt>
<dd>
<p>description of status, e.g., state / commonwealth vs. island, territory, military mail code, etc.</p>
</dd>
<dt>ISO, ANSI.letters, ANSI.digits, USPS, USCG, Old.GPO, AP, Other</dt>
<dd>
<p>Alternative abbreviations used per different standards. The most commonly used among these may be the 2-letter codes officially used by the US Postal Service (<code>USPS</code>).</p>
</dd>
</dl>
<h3>Details</h3>
<p>This was read from <a href="http://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations">the Wikipedia article on "List of U.S. state abbreviations"</a></p>
<h3>Source</h3>
<p><a href="http://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations">the Wikipedia article on "List of U.S. state abbreviations"</a></p>
<h3>See Also</h3>
<p><code>readUSstateAbbreviations</code> <code>showNonASCII</code> <code>grepNonStandardCharacters</code> <code>subNonStandardCharacters</code></p>
<h3>Examples</h3>
<pre>
##
## to use
##
data(USstateAbbreviations)##
## to update
##
## Not run: 
USstateAbb2 &lt;- readUSstateAbbreviations()## End(Not run)
</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-99383.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-99383.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-ecdat-usstateabbreviations.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-99383.json';</script>