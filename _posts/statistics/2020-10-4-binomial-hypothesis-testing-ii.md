---
title: Binomial Testing
author: jmagunia
layout: page
permalink: /statistics/:slug.html
redirect_from: /binomial-hypothesis-testing-ii.html
---

<p>In the last experiment, we assumed we had a fair coin. Suppose we wanted to conduct an experiment to see whether it was indeed a 
fair coin. First we need to state the null and alternative hypothesis and that is:</p>

$$ H_0:p=0.5 \\ H_1: p \neq 0.5 $$


<p>Now we need to set the level of rejection which should be set as close as 0.05 as possible. This is a <strong>two-tailed test</strong> in the sense we reject the null hypothesis if our test statistitic is in <em>either</em> tail of the binomial distribution. For example, if we get 1 head out of ten flips, then we have reason to believe this is not a fair coin. If we get 10 heads, we also have reason to believe this is not a fair coin. That is why it is a two tailed test.</p>

<p>To calculute the rejection region, we need to calculate probabilities for both sides of the tail so that the rejection region is close to 0.05. Using the binomial probability mass function:</a> </p>

$$ P(X=0) + P(X=1) + P(X=2) + P(X=8) + P(X=9) + P(X=10) \approx 0.11$$

<p>If we leave out the $P(X=2)$ and $P(X=8), \alpha = 0.02. $ In this case, we risk the chances of a <strong>type II error</strong> which is failing to reject a false null hypothesis. Type II errors occur with extremely small rejection levels; that is, $ \alpha $ is so small, no matter what the outcome of the experiment, the test statistic will not be extreme enough for us to reject the null hypothesis. Since we are going to let $ \alpha $ equal 0.11, we reduce that risk, but allow a greater chance of a <strong>type I error</strong> which is rejecting a true null hypothesis; in other words, type I errors occurs because, the rejection level, $\alpha$, is so high, we may have test statistics from the actual experiment that we will reject when we should not have. As mentioned, ideally $ \alpha $ should be 0.05.</p>

<p>So now we have set the null hypothesis, alternative hypothesis, and the rejection level. Let's proceed to conducting the experiment.</p>
