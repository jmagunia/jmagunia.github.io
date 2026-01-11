---
title: R Dataset / Package psych / affect
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">affect</span> data set which pertains to Two data sets of affect and arousal scores as a function of personality and movie conditions. The <span class="mono">affect</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">affect</span> data set in R by issuing the following command at the console <span class="mono">data("affect")</span>. This will load the data into a variable called <span class="mono">affect</span>. If R says the <span class="mono">affect</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-46567.csv">affect R data set</a></span>. The size of this file is about 18,492 bytes.</p><h2>Two data sets of affect and arousal scores as a function of personality and movie conditions</h2>
<h3>Description</h3>
<p>A recurring question in the study of affect is the proper dimensionality and the relationship to various personality dimensions. Here is a data set taken from two studies of mood and arousal using movies to induce affective states.</p>
<h3>Usage</h3>
<pre>data(affect)</pre>
<h3>Details</h3>
<p>These are data from two studies conducted in the Personality, Motivation and Cognition Laboratory at Northwestern University. Both studies used a similar methodology:</p>
<p>Collection of pretest data using 5 scales from the Eysenck Personality Inventory and items taken from the Motivational State Questionnaire (see <code>msq</code>. In addition, state and trait anxiety measures were given. In the “maps" study, the Beck Depression Inventory was given also.</p>
<p>Then subjects were randomly assigned to one of four movie conditions: 1: Frontline. A documentary about the liberation of the Bergen-Belsen concentration camp. 2: Halloween. A horror film. 3: National Geographic, a nature film about the Serengeti plain. 4: Parenthood. A comedy. Each film clip was shown for 9 minutes. Following this the MSQ was given again.</p>
<p>Data from the MSQ were scored for Energetic and Tense Arousal (EA and TA) as well as Positive and Negative Affect (PA and NA).</p>
<p>Study flat had 170 participants, study maps had 160.</p>
<p>These studies are described in more detail in various publications from the PMC lab. In particular, Revelle and Anderson, 1997 and Rafaeli and Revelle (2006). An analysis of these data has also appeared in Smillie et al. (2012).</p>
<h3>Source</h3>
<p>Data collected at the Personality, Motivation, and Cognition Laboratory, Northwestern University.</p>
<h3>References</h3>
<p>Revelle, William and Anderson, Kristen Joan (1997) Personality, motivation and cognitive performance: Final report to the Army Research Institute on contract MDA 903-93-K-0008</p>
<p>Rafaeli, Eshkol and Revelle, William (2006), A premature consensus: Are happiness and sadness truly opposite affects? Motivation and Emotion, 30, 1, 1-12.</p>
<p>Smillie, Luke D. and Cooper, Andrew and Wilt, Joshua and Revelle, William (2012) Do Extraverts Get More Bang for the Buck? Refining the Affective-Reactivity Hypothesis of Extraversion. Journal of Personality and Social Psychology, 103 (2), 206-326.</p>
<h3>Examples</h3>
<pre>
data(affect)
describeBy(affect[-1],group="Film")
pairs.panels(affect[14:17],bg=c("red","black","white","blue")[affect$Film],pch=21,
main="Affect varies by movies ")
errorCircles("EA2","TA2",data=affect,group="Film",labels=c("Sad","Fear","Neutral","Humor")
, main="Enegetic and Tense Arousal by Movie condition")
errorCircles(x="PA2",y="NA2",data=affect,group="Film",labels=c("Sad","Fear","Neutral","
Humor"),main="Positive and Negative Affect by Movie condition")</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-46567.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-46567.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-affect.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-46567.json';</script>