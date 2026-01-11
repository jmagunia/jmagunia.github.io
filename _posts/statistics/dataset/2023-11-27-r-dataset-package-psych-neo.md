---
title: R Dataset / Package psych / neo
layout: page
permalink: /dataset/:slug
---
<div id="dataset-info">
<p>On this R-data statistics page, you will find information about the <span class="mono">neo</span> data set which pertains to NEO correlation matrix from the NEO_PI_R manual. The <span class="mono">neo</span> data set is found in the <span class="mono">psych</span> R package. You can load the <span class="mono">neo</span> data set in R by issuing the following command at the console <span class="mono">data("neo")</span>. This will load the data into a variable called <span class="mono">neo</span>. If R says the <span class="mono">neo</span> data set is not found, you can try installing the package by issuing this command <span class="mono">install.packages("psych")</span> and then attempt to reload the data with the <span class="mono">library()</span> command. If you need to download R, you can go to the <a href="https://www.r-project.org">R project website</a>. You can download a CSV (comma separated values) version of the <span class="mono"><a href="../assets/data/csv/dataset-79327.csv">neo R data set</a></span>. The size of this file is about 5,212 bytes.</p><h2>NEO correlation matrix from the NEO_PI_R manual</h2>
<h3>Description</h3>
<p>The NEO.PI.R is a widely used personality test to assess 5 broad factors (Neuroticism, Extraversion, Openness, Agreeableness and Conscientiousness) with six facet scales for each factor. The correlation matrix of the facets is reported in the NEO.PI.R manual for 1000 subjects.</p>
<h3>Usage</h3>
<pre>data(neo)</pre>
<h3>Format</h3>
<p>A data frame of a 30 x 30 correlation matrix with the following 30 variables.</p>
<dl>
<dt>N1</dt>
<dd>
<p>Anxiety</p>
</dd>
<dt>N2</dt>
<dd>
<p>AngryHostility</p>
</dd>
<dt>N3</dt>
<dd>
<p>Depression</p>
</dd>
<dt>N4</dt>
<dd>
<p>Self-Consciousness</p>
</dd>
<dt>N5</dt>
<dd>
<p>Impulsiveness</p>
</dd>
<dt>N6</dt>
<dd>
<p>Vulnerability</p>
</dd>
<dt>E1</dt>
<dd>
<p>Warmth</p>
</dd>
<dt>E2</dt>
<dd>
<p>Gregariousness</p>
</dd>
<dt>E3</dt>
<dd>
<p>Assertiveness</p>
</dd>
<dt>E4</dt>
<dd>
<p>Activity</p>
</dd>
<dt>E5</dt>
<dd>
<p>Excitement-Seeking</p>
</dd>
<dt>E6</dt>
<dd>
<p>PositiveEmotions</p>
</dd>
<dt>O1</dt>
<dd>
<p>Fantasy</p>
</dd>
<dt>O2</dt>
<dd>
<p>Aesthetics</p>
</dd>
<dt>O3</dt>
<dd>
<p>Feelings</p>
</dd>
<dt>O4</dt>
<dd>
<p>Ideas</p>
</dd>
<dt>O5</dt>
<dd>
<p>Actions</p>
</dd>
<dt>O6</dt>
<dd>
<p>Values</p>
</dd>
<dt>A1</dt>
<dd>
<p>Trust</p>
</dd>
<dt>A2</dt>
<dd>
<p>Straightforwardness</p>
</dd>
<dt>A3</dt>
<dd>
<p>Altruism</p>
</dd>
<dt>A4</dt>
<dd>
<p>Compliance</p>
</dd>
<dt>A5</dt>
<dd>
<p>Modesty</p>
</dd>
<dt>A6</dt>
<dd>
<p>Tender-Mindedness</p>
</dd>
<dt>C1</dt>
<dd>
<p>Competence</p>
</dd>
<dt>C2</dt>
<dd>
<p>Order</p>
</dd>
<dt>C3</dt>
<dd>
<p>Dutifulness</p>
</dd>
<dt>C4</dt>
<dd>
<p>AchievementStriving</p>
</dd>
<dt>C5</dt>
<dd>
<p>Self-Discipline</p>
</dd>
<dt>C6</dt>
<dd>
<p>Deliberation</p>
</dd>
</dl>
<h3>Details</h3>
<p>The past thirty years of personality research has led to a general consensus on the identification of major dimensions of personality. Variously known as the “Big 5" or the “Five Factor Model", the general solution represents 5 broad domains of personal and interpersonal experience. Neuroticism and Extraversion are thought to reflect sensitivity to negative and positive cues from the environment and the tendency to withdraw or approach. Openness is sometimes labeled as Intellect and reflects an interest in new ideas and experiences. Agreeableness and Conscientiousness reflect tendencies to get along with others and to want to get ahead.</p>
<p>The factor structure of the NEO suggests five correlated factors as well as two higher level factors. The NEO was constructed with 6 “facets" for each of the five broad factors.</p>
<h3>Source</h3>
<p>Costa, Paul T. and McCrae, Robert R. (1992) (NEO PI-R) professional manual. Psychological Assessment Resources, Inc. Odessa, FL. (with permission of the author and the publisher)</p>
<h3>References</h3>
<p>Digman, John M. (1990) Personality structure: Emergence of the five-factor model. Annual Review of Psychology. 41, 417-440.</p>
<p>John M. Digman (1997) Higher-order factors of the Big Five. Journal of Personality and Social Psychology, 73, 1246-1256.</p>
<p>McCrae, Robert R. and Costa, Paul T., Jr. (1999) A Five-Factor theory of personality. In Pervin, Lawrence A. and John, Oliver P. (eds) Handbook of personality: Theory and research (2nd ed.) 139-153. Guilford Press, New York. N.Y.</p>
<p>Revelle, William (1995), Personality processes, Annual Review of Psychology, 46, 295-328.</p>
<p>Joshua Wilt and William Revelle (2009) Extraversion and Emotional Reactivity. In Mark Leary and Rick H. Hoyle (eds). Handbook of Individual Differences in Social Behavior. Guilford Press, New York, N.Y.</p>
<h3>Examples</h3>
<pre>
data(neo)
n5 &lt;- fa(neo,5)
neo.keys &lt;- make.keys(30,list(N=c(1:6),E=c(7:12),O=c(13:18),A=c(19:24),C=c(25:30)))
n5p &lt;- target.rot(n5,neo.keys) #show a targeted rotation for simple structure
n5p</pre>
<p>Dataset imported from <a href="https://www.r-project.org">https://www.r-project.org</a>.</p></div>
<p id="dataset-attachments">Attachments: <code><a target="_blank" href="/assets/data/csv/dataset-79327.csv">csv</a></code>, <code><a target="_blank" href="/assets/data/json/dataset-79327.json">json</a></code></p>
<div id="dataset-iframe">
{% highlight html %}
<iframe src="https://jmagunia.com/iframe/r-dataset-package-psych-neo.html" width="100%" height="100%" style="border:0px"></iframe>
{% endhighlight %}
</div>
<div id="grid"></div>
<script>let json_file = 'dataset-79327.json';</script>