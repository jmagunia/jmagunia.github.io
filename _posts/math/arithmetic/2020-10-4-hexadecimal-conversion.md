---
title: Hexadecimal Conversion
author: jmagunia
layout: page
permalink: /math/arithmetic/:slug.html
redirect_from: /hexadecimal-conversion.html
---

<p>Hexadecimal is different from binary and decimal notation (base 10) in that there are sixteen unique digits whereas in decimal we have ten. Since we have sixteen digits we have to designate six new digits which are the letters A, B, C, D, E, and F. 'A' stands for 10, 'B' is 11, 'C' 12, 'D' 13, 'E' 14, and 'F' is 15.</p>

<p>Suppose we have a hexadecimal number, '2EC',and we wanted to convert it to decimal. You learned that the decimal numeral system is base 10 which means each digit is multiplied by some power of 10. In hexadecimal, the base is 16. So each digit is multiplied by some power of 16. The first digit from the right in our number is 'C' which is in the ones place. Yes, hexadecimal has a ones place because $16^0=1$. So C which stands for the number 12  and is multiplied by $C \times 16^0=12$.</p>

<p>The second digit from the right in our number is 'E'. E, which in decimal is 14, is in the sixteens place. So we have $14 \times 16^1=224$. So our tally is 224 + 12 = 236.</p>

<p>Finally, we have our last digit which is '2.' 2 is in the two hundred fifty-sixes place. $2 \times 16^2=512$. So our final tally is 512 + 224 + 12 = 748 which is our final answer. Using our subscript notation $748_{10}=2EC_{16}$</p>

<p>Now, suppose we had a decimal number like, 278, and we wanted to convert it to hexadecimal. To convert a decimal number to hexadecimal, we must find the smallest power of sixteen that will fit inside 278. $16^3=4096$ and $16^2=256$. Now, 256 fits into 278 one time so have have a one in the two hundred fifty-sixes place. Now we subtract 256 from 278 and we are left with 22.</p>

<p>The next digit to the right of the two hundred fifty sixes place is the sixteens place. Sixteen fits into 22 one time so we have a one in the sixteens place. $22 - 16 = 6$. The place next to the sixteens place is the ones place. One goes into six, six times so we have a six in the ones place. So our final answer is 
116. So, using subscripts, $278_{10}=116_{16}$.</p>
