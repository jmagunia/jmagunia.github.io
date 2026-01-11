---
title: Decimal to Binary
author: jmagunia
layout: page
permalink: /math/arithmetic/:slug.html
redirect_from: /decimal-to-binary.html
---

<p>Suppose we wanted to convert the decimal number 27 to binary. To get started we have to find out what place the first digit is going to be in. 27 is between $ 2^4=16 $ and $ 2^5=32 $. Our number is less than 32 so we can put a 0 in the "thirty-twos" place. We put a 0 in the thirty-twos place because if we put a 1 that would immediately turn the value of our binary number to at least 32. However, sixteen will fit inside 27 so we can put a 1 in the "sixteens" place.</p>

<p>We put a one 1 in the sixteens place and that leaves us with $ 27-16=11$ to convert to binary. The place just to the right of the sixteens place is the eights place, and 8 will fit inside 11. So we put a 1 in the eights place. $ 11-8=3. $</p>

<p>The next place is the fours place and it is too big to fit into what's left of our number (3) so we have to put a 0 in the fours place. However, 2 will fit. So we can put a 1 in "twos" place. $ 3-2=1.$  We have one leftover and one place left to fill which will work out perfectly. We put a '1' in the ones place and we are finished. So our final number looks like $ 27_{10}=011011_2=11011_2. $ We can leave out the the '0' in the thirty-twos place since it is not a significant digit.</p>
