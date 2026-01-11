---
title: Binomial Experiment
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /binomial-experiment.html
---

<p>The binomial distribution is a discrete distribution which implies its sample space is finite. In other words, the values that a binomial random variable can take on is limited. The mean and variance is given by $ \mu = np $ and $ \sigma^2 = npq,$ respectively.</p>

<p>In order to analyze an experiment as a binomial experiment, five conditions must hold:</p>
<ol>
<li>Only two possible outcomes can occur, success or failure.</li>
<li>The experiment is repeated  $n$ times, i.e. there are  $ n $ trials. </li>
<li>$p$, the probability of success is constant from trial to trial.</li>
<li>The trials are independent, i.e. the outcome of one trial does not affect another.</li>
<li>The variable of interest is the number of successes.</li>
</ol>
<p>If these five conditions hold, it is a binomial experiment.</p>

<p>For an example, consider estimating the number of registered voters in Springfield. We can take a random sample and use the sample to estimate the population. A binomial random variable can be used to model the data. Suppose in a sample of size 30, 14 residents of Springfield were registered. We can use the numbers 0 and 1 to signify non-registered and registered voters, respectively. $ \text{P}(X=0) = \frac{16}{30} = 0.533\,\,\, $ and $ \text{P}(X = 1) = \frac{14}{30}=0.467.\,\,\, $ In this example, $ n = 30. \,\, p $ is approximately 0.467 since we are estimating the number of <em>registered</em> voters. $ \bar{x}, $ the sample mean, is equal to 0.467, and $ s^2 = 30(0.467)(0.533) \approx 7.5. $</p>

<p>If we were interested in the number of <em>unregistered</em> voters $ p = 0.533 $ . Usually, we assign $ p $ to the variable of interest. However, this would not have changed the sample variance.</p>
