---
title: Logic and Quantifiers
author: jmagunia
layout: page
permalink: /math/real-analysis/:slug.html
redirect_from: /logic-and-quantifiers.html
---

<p>This page discusses Logic and Quantifiers found in many Real Analysis and logic classes. Definitions with discussion follow.</p>
<dl>
<dt><strong>proposition</strong></dt>
<dd>an assertion that is either true or false but not both. A proposition is called <strong>simple</strong> or <strong>atomic</strong> if it is made up of only one proposition. A proposition is <strong>compound</strong> if it consists of one or more simple propositions with one or more logical connectives.</dd>
<dt><strong>logical connective</strong></dt>
<dd>joins simple propositions together to create a new proposition which may differ in truth value</dd>
<dt><strong>truth value</strong></dt>
<dd>the validity of a proposition. The truth value of a statement may be true or false or in some cases neither.</dd>
<dt><strong>truth table</strong></dt>
<dd>a truth table for a proposition displays every possible truth value for each simple proposition involved and the truth value of the corresponding compound proposition</dd>
<dt><strong>logically equivalent</strong></dt>
<dd>two compound propositions are logically equivalent if they have the same truth table</dd>
<dt><strong>tautology</strong></dt>
<dd>a proposition that is always true</dd>
<dt><strong>contradiction</strong></dt>
<dd>a proposition that is always false</dd>
<dt><strong>quantifier</strong></dt>
<dd>a quantifier imposes a condition on a proposition</dd>
</dl>

<p>An example of a proposition could be "My cow is an albino." The truth value of the proposition is either true or false but not both(either my cow is white or it isn't.) Propositions do not always have to be true, for example, "My cow is purple" is still a proposition even though the truth value is false.</p>
<h2>Logical Connectives</h2>
<p>Let P = "My cow is an albino" and let Q = "My cow likes chocolate" The following table lists common logical connectives, their symbols,the truth table for each connective, and an example using proposition P and Q.</p>

<p>You can think of a truth table as listing each possibile truth value for the simple propositions, and the outcome when the truth values are used correctly with a logical connective. For example, consider the the first line of the truth table for negation. The first column says that P is a true statement i.e., it is 
true that my cow is an albino. The second second column tells me since P is a true statement, the negation of P is false. Since P originally 
was true if we include the word "not" then the sentence is false. Hence the F in the second column.</p> 
<table>
<tbody>
<tr>
<th>Connective</th>
<th>English</th>
<th>Symbol</th>
<th>Truth Table</th>
<th>Example</th>
</tr>
</tbody>
<tbody>
<tr>
<td>negation</td>
<td>not</td>
<td>~</td>
<td>
<table>
<tbody>
<tr>
<th>P</th>
<th>~P</th>
</tr>
</tbody>
<tbody>
<tr>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
</tr>
</tbody>
</table>
</td>
<td>My cow is not an albino.</td>
</tr>
<tr>
<td>disjunction</td>
<td>or</td>
<td>v</td>
<td>
<table>
<tbody>
<tr>
<th>P</th>
<th>Q</th>
<th>PvQ</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</tbody>
</table>
</td>
<td>My cow is an albino or my cow likes chocolate</td>
</tr>
<tr>
<td>conjunction</td>
<td>and</td>
<td>^</td>
<td>
<table>
<tbody>
<tr>
<th>P</th>
<th>Q</th>
<th>P^Q</th>
</tr>
</tbody>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</tbody>
</table>
</td>
<td>My cow is an albino, and my cow likes chocolate</td>
</tr>
<tr>
<td>conditional</td>
<td>If ,then</td>
<td>$\rightarrow$</td>
<td>
<table>
<tbody>
<tr>
<th>P</th>
<th>Q</th>
<th>P$\rightarrow$Q</th>
</tr>
</tbody>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</tbody>
</table>
</td>
<td>If my cow is an albino, then my cow likes chocolate.</td>
</tr>
<tr>
<td>biconditional</td>
<td>if and only if</td>
<td>$\iff$</td>
<td>
<table>
<tbody>
<tr>
<th>P</th>
<th>Q</th>
<th>$P \iff Q$</th>
</tr>
</tbody>
<tbody>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</tbody>
</table>
</td>
<td>My cow is an albino if and only if my cow likes chocolate.</td>
</tr>
</tbody>
</table>
<p>Use of the disjunction asserts one of the two statements joined by the v is true. Hence if either or both of the sentences are true, then the whole sentence is true. Note the disjunction is only false if neither of the statements are true which makes sense. If you assert one of two false statements is true then you are talking nonsense.</p>

<p>The conjunction ^ also means the same thing as the "and" used in the English language. If two sentences are joined by an "and" then you know the speaker is saying both of the sentences are true. Note the conjunction is only true if both P and Q are true.</p>

<p>The conditional is a little bit tricky to rationalize. P and Q in the conditional have special names. P is called the <strong>antecedent</strong>. P is the part of an if-then statement that supposes something. Q is called the <strong>consequent</strong>. Q is the result of supposing that P is true. Note the only instance when a conditional is false is when P is true and Q is false which makes sense because if something logically following from a true sentence is false then there is a problem with the if-then statement.  For example, consider the statement "If it is raining there are clouds in the sky." If it was raining and there were no clouds in the sky you would be making a false statement.</p> 

<p>There is no real English equivalent to the biconditional. However, the biconditional is useful for theorems in mathematics. Note the only instances when a biconditional is false is when there is disagreement in the validity of P and Q. An example proposition for biconditional could be "I am alive if and only iff I am breathing." This proposition is true when P and Q are both true or when not-P and not-Q are true i.e., "I am not alive if and only if I am not breathing." If P is true, Q can not be false. An abbreviation for if and only if is iff.</p>

<h2>Tautologies and Contradictions</h2>

<p>An example of a tautology is "I am wearing white or I am not wearing white." That sentence is always true regardless of what you are wearing. An example of a contradiction would be "I have exactly five dollars in my bank and I do not have exactly five dollars in my bank." P and Q are joined by "and" which is only true if both P and Q are true. However P and Q can not both be true at the same time, thus making a contradiction.</p>
