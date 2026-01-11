---
title: Cauchy Sequences
author: jmagunia
layout: page
permalink: /math/real-analysis/:slug.html
redirect_from: /cauchy-sequences.html
---

<p>A sequence  $a_n$ <strong>converges</strong> to  $a$ if for every  $\epsilon > 0$,  $\exists$ an  $N$ such that if  $n > N$ then  $\left| a_n - a \right| < \epsilon.$</p>

<p>A sequence is called a <strong>Cauchy sequence</strong> if for every $\epsilon > 0, \exists\ N$ such that if $ m,n \geq N$ then $\left| a_n - a_m \right| < \epsilon.$ This is saying all the elements in a Cauchy sequence come closer to each other as the sequence progresses.</p>

<p>All convergent sequences are Cauchy sequences, but not all cauchy sequences are convergent. All convergent and Cauchy sequences are 
<strong>bounded</strong> which means  $\forall n,a_n \leq M.$</p>

<p>Take for example the square root of two which can be considered the sequence 1, 1.4, 1.41, 1.414$\ldots .$ This number is a cauchy sequence, but it doesn't converge to any particular number since the sequence is nonrepeating which brings us to the definition of complete.</p>

<p>An ordered field is <strong>complete</strong> if every Cauchy sequence in the field is closed. This means that every Cauchy sequence must converge to value that is member of the ordered field. Since the above mentioned sequence of the square root of two is composed of rational numbers, but does not converge to a rational number the set of rational numbers is not complete.</p>
