---
title: Partial Orders
author: jmagunia
layout: page
permalink: /math/real-analysis/:slug.html
redirect_from: /partial-orders.html
---

<p>A <strong>partial order</strong> is a relation that satisfies three requirments:</p>

<ol>
<li>$aRa \forall a \in R$</li>
<li>$aRb$ and $bRa$ implies $a=b$</li>
<li>$aRb$ and $bRc$ implies $aRc$</li>
</ol> 

<p>A nonempty set that satisfies the requirements of a partially order is called <strong>partially ordered set</strong>.</p>

<p>It might be difficult right now to imagine a set that is partially ordered, but the real numbers under the relation $\leq$ is a partially ordered set. If $aRb$ is an element of this set, like $5 \leq 7$, we write $5 \prec 7.$</p>
<dl>
<dt><strong>comparable</strong></dt>
<dd>two elements of a partially ordered set are said to be comparable if $a \prec b$ or $b \prec a.$</dd>
<dt><strong>totally ordered</strong></dt>
<dd>a set is said to be totally ordered if all the elements are comparable</dd></dl>

<p>You might want to think of a total ordering with the relation,$<.$</p>

<dl>
<dt><strong>upper bound</strong></dt>
<dd>an element $c \in A$ is said to be an upper bound for $B \subset A$, if $b \prec c$ for all $b \in B$</dd>
<dt><strong>least upper bound</strong></dt>
<dd>$c$ is a least upper bound for $B$ if for all $d$ which are upper bounds of $B$, $c \prec d.$</dd>
</dl>

<p>The mathematical definitions for upper bound and least upper bound correspond to their English translations.</p> 

<p>Finally we come to equivalence relations. A relation is said to be an <strong>equivalence relation</strong> if</p> 
<ol>
<li> If $a \in A$ then $aRa$</li>
<li> $aRb$ implies $a=b$</li>
<li> $aRb$ and $bRc$ implies $aRc.$</li>
</ol>

<p>Those are the three requirements for an equivalence relation. Equivalence relations differ from a partial order in the second requirement. The transitive property remains the same. You might want to think of the equivalence relations as the = relation which  makes sense if you think about the requirements for an  equivalence relation.</p>
