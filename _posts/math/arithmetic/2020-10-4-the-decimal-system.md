---
title: The Decimal System
author: jmagunia
layout: page
permalink: /math/arithmetic/:slug.html
redirect_from: /the-decimal-system.html
---

<p>The decimal system is a way of representing a number using powers of ten. The first digit before the decimal is the <em>ones</em> place. Suppose we have a digit, $ d $, that is in the ones place. Since $ d $ is in the ones place the value of $ d = d \times 10^0. $ We use 10 since we are in the decimal system (base 10). We use 0 for the exponent because we are 1 digit to the left of the decimal. Why 0? In Computer Science and Mathematics, counting is often started at 0. Also $ 10^0 = 1$ which is the value that the digit in the ones place is multiplied by.</p>

<p>What is the value of 93? We find the value of 93 by adding the value of the digits in the ones and tens place together.</p>

<p>$$ 93 = 9 \cdot 10^1 + 3 \cdot 10^0 $$</p>

<p>The value of the <em>hundreds</em> place is found by multiplying by $10^2 = 100.$</p>

<p>What about the places to the right of the decimal? The first place to the right of the decimal is the <em>tenths</em> place. Whatever digit is in the tenths place we multiply by $\frac{1}{10}$ to get its value. So the value of $0.7 = 7 \times 10^{-1} = 7 \times \frac{1}{10}.$ Numbers with nonzero digits to the right of the decimal are fractional components. </p>

<p>The digit two places to the right of the decimal is the <em>hundredths</em> place. To get the value of that digit we multiply by $\frac{1}{100}.$ So for the number 0.07, the zeroes carry no value, but the 7 in the hundredths place means the number  carries the value of $ \frac{7}{100} = 7 \times 10^{-2}$ . The digit three places to the right of the decimal is the <em>thousandths</em> place. The digit in the thousandths place is multiplied by $ \frac{1}{1000} = 0.001.$ </p>

<p>Each digit to the right of the decimal carries a weight that is 10 times less than the digit before it, and each digit to the left of the decimal place carries a value ten times greater than the digit before it (assuming the digits are the same, of course.)</p>
