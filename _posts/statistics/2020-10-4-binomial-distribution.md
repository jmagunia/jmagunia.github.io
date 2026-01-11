---
title: Binomial Distribution
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /binomial-distribution.html
---

<p>In the last section, we took a first look at the some of the conditions necessary for a <a href="/node/2017">binomial experiment</a>. Let's examine the binomial distribution more closely by examining the method to calculate the probability of getting a particular outcome for a series of <b>bernoulli trials</b>.</p>

<p>As an example, let our binomial experiment consist of flipping a coin ten times. Suppose for now, we believe the coin is fair, and we are interested in the probability of getting 5 heads. $ n $ = 10. Since we are interested in the number of heads, "success" in a trial is the coin landing on heads. $ p $= 0.5 since we believe the coin is fair.</p>

<p>The formula for calculuating the probability of $ x $ success in $ n $ trials of a binomial experiment is given by $$ \text{P}(X = x) = \binom{n}{x}p^x(1-p)^{n-x}\,\,\, \text{where}\,\,\, \binom{n}{x} = \frac{n!}{x!(n-x)!}. $$ The large parenthesis is called a <em>combination</em>. Substituting the numbers stated above into our equations we get the probability that our random variable $ X $ takes on a value of 5 is about 0.25. So there is about a one in four chance we get five heads.</p>
