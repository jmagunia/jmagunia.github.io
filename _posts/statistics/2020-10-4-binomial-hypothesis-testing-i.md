---
title: Binomial Testing II
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /binomial-hypothesis-testing-i.html
---

<p>Suppose we conducted our experiment from the last section, and we got three heads. That is getting 2 fewer heads than would be 
expected by chance alone if the coin is indeed fair. Now we need to calculate the p-value of the experiment. The <strong>p-value</strong> is the probability of obtaining a test statistic at least as extreme as the observed value. In this case, our observed value is three. More extreme cases would be if we flipped the coin and we get 0, 1, or 2 heads. However, this is a two-sided test so we can get extreme cases on the other end too like getting 8, 9, or 10 heads. So our p-value is $$ P(0) + P(1) + P(2) + P(8) + P(9) + P(10) \approx 0.0009 + 0.009 + 0.044 + 0.12 + 0.12 + 0.044 + 0.009 + 0.0009 \approx 0.34. $$ Our p-value is greater than the significance level so we fail to reject the null hypothesis $H_0:$ the coin is fair, i.e. $ p = 0.5. $</p>

<p>Note that typically significance levels are at the 0.05. We tested at the 0.11 level. Why 0.11 ? Hint: since the Binomial distribution is discrete, our sample space is finite. How does this contrast with a continuous distribution ? What is the area of a line ?</p>

<p>If we wanted a level closer to 0.05 we could have increased the sample size to twenty which also would have made the experiment more 
powerful.</p>
