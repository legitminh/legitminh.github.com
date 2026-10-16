<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import Indent from "$lib/components/Indent.svelte";
</script>
<Document>
  <Header/> 
  <LineText>nhalang high abstraction</LineText>
  <br/>
  <LineText><strong>nhalang.1 grammar overview</strong></LineText>
  <Indent>
    <LineText>birthdate: 2026.8.2</LineText>
    <LineText><strong>philosophy</strong></LineText>
    <Indent>
      <LineText>the language is designed to concretize and streamline agent to agent and agent(s) to self communication (about the reality).</LineText>
      <LineText>the reality is a member of potential universes. while fiction or hypothetical communication describe a universe not reality, communication is by default about the reality. all universes however, are similarly structured, with 1 temporal dimensions where all entities exist in, spanning a certain timepoint to another timepoint. each frame of time contain 3 spacial dimensions (as observed by humans). an entity is a region in the 4D universe space (it have properties like start point (4D vector), end point(4D vector)). since there are so many entities, words in nhalang often doesn&apos;t need entity level specificity (due to high uncertainty), so a word like &quot;jeff&quot; describe not just the entity spanning [jeff 5 minutes ago] to [jeff now] but also [jeff 5 minute + 1 second ago] to [jeff 1 hours later], or jeff from birth to death, or jeff from embryo to burial, (within reasons, of course). same for &quot;table&quot;, it doesn&apos;t specify a table but all things considered tables in general. a relation is a higher level entity with some more information, &quot;know[2]&quot; may refer to the collection of mental configurations of $0&apos;s member where $1&apos;s member is in their knowledge.</LineText>
      <br/>
    </Indent>
    <LineText><strong>each word are functions of some number of parameters</strong></LineText>
    <Indent>
      <LineText><strong>for example:</strong></LineText>
      <Indent>
        <LineText>hello[1]= speaker wish to speak to $0</LineText>
      </Indent>
    </Indent>
    <LineText><strong>if word A with a param is placed as the param of word B, the params of A will be satisfied first until A have no params then the result of A is a param of B.</strong></LineText>
    <Indent>
      <LineText><strong>for example:</strong></LineText>
      <Indent>
        <LineText>black[1]= $0 in all black objects</LineText>
        <LineText>a_cat[0]= all cats</LineText>
        <LineText>leap[1]= A (A in $0) leap (throughout time)</LineText>
        <LineText>leap black a_cat -&gt; leap[black[a_cat]] -&gt; in english: [there exist in this reality] a black cat leap (unknown time)</LineText>
      </Indent>
    </Indent>
    <LineText><strong>words and functions return are &quot;class prioritizing&quot; which means</strong></LineText>
    <Indent>
      <LineText>&quot;cat&quot; represents all cats instead of a cat.</LineText>
      <LineText>this have the math equivalence of doing Square represent the class of square instead of x | x \in Square.</LineText>
      <LineText>in computer science, Apple means class of Apple and not new Apple()</LineText>
    </Indent>
    <LineText><strong>a list of words that when parsed, have all requested params satisfied is a clause, many clauses in succession implicity describe their union</strong></LineText>
    <Indent>
      <LineText><strong>for example:</strong></LineText>
      <Indent>
        <LineText>a cat a dog -&gt; a cat and a dog</LineText>
      </Indent>
    </Indent>
    <LineText>if a statement is made (like &quot;car&quot;), it is declaring existance of that thing (cars exist) in this reality. saying &quot;equal sum 2 number 2 number 4 number&quot; is the same with there exist equality between 2+2 and 4.</LineText>
    <LineText>chatgpt[grammar exists only to determine how functions compose. All semantic distinctions belong in the lexicon.]</LineText>
    <LineText><strong>phonetics</strong></LineText>
    <Indent>
      <LineText>a duetphoneme is a consonant + vowel (diphtong allowed). example: &quot;hai&quot; = &quot;h&quot; + &quot;ai&quot;, sounds like english &quot;hi&quot;</LineText>
      <LineText>a word is a list of duetphonemes, such as &quot;paoli&quot;, pronounced smoothly such that it sounds like &quot;paol&quot; and &quot;li&quot; meshed together</LineText>
      <LineText>the lack of smooth transition mark word boundaries</LineText>
      <LineText>note: phonemes with &quot;a&quot; vowel are commonly shortened as just the consonent, such as &quot;haha&quot; is pronounced &quot;hah&quot;</LineText>
    </Indent>
    <LineText><strong>word classes</strong></LineText>
    <Indent>
      <LineText>objective: to help with language studying and development. classes are defined for classification</LineText>
      <LineText><strong>noun0</strong></LineText>
      <Indent>
        <LineText>many objects in a timeframe are mentally abstracted by their sensory markers: most commonly visual (they can be indentified with an image). this abstraction is time independent, and doesn&apos;t rely on a certain change over time</LineText>
        <LineText>this lead our brains to develop the word class of noun. for instance, seeing a tiger might prompt saying &quot;a tiger&quot; to bring up the visual of a tiger to our listeners.</LineText>
        <LineText>since noun often trigger immediate relevant sensory information, the need to add parameters for clarifiation is infrequent, therefore noun will only have 1 to reflect that use case.</LineText>
        <LineText>however, noun clarifiation does happen, we use functions like &quot;intersection&quot;, &quot;avg_midpoint&quot;, &quot;of&quot; to specify: &quot;computer screen&quot; = &quot;of2 screen computer&quot; to describe a screen that is of the computer</LineText>
      </Indent>
      <LineText><strong>adjective1</strong></LineText>
      <Indent>
        <LineText>these are similar to nouns, but marked as often needing clarifiation. emphasis[that is the only difference]. colors, for example, rarely come by themselves, but in context of an object&apos;s color. so, while there is a &quot;red1 all_object&quot; class for all red objects, red accept 1 argument to clarify &quot;red1 car&quot;</LineText>
      </Indent>
      <LineText><strong>verb[1/2]</strong></LineText>
      <Indent>
        <LineText>verb are objects that must span time due to its description of start and end state.</LineText>
        <LineText>all change in time recorded is due to a &quot;causing agent,&quot; a person, a potential, a time change. in english, this is called the &quot;subject&quot; of the action.</LineText>
        <LineText><strong>verb1</strong></LineText>
        <Indent>
          <LineText>often, knowing the &quot;causing state&quot; is sufficient to understand the verb. these verbs are called &quot;internal verb&quot; where the result is largely decided by the agent.</LineText>
          <LineText><strong>example: &quot;jump1 jeremy&quot; is sufficient clear, there is often not much need to specify where jeremy jump to, or how high. if needed; however,</strong></LineText>
          <Indent>
            <LineText>&quot;to2 jump1 jeremy closest1 moon&quot;</LineText>
            <LineText>&quot;up1 span2 jump1 jeremy 100 meter&quot;</LineText>
          </Indent>
        </Indent>
        <LineText><strong>verb2</strong></LineText>
        <Indent>
          <LineText>the first parameter is the agent/subject and the second specify the &quot;path&quot; taken by the subject.</LineText>
          <LineText>example: &quot;bite jeff burger&quot;</LineText>
          <LineText>if object is unknown/undisclosed: &quot;bite jeff something&quot;</LineText>
        </Indent>
      </Indent>
      <LineText><strong>shortcut[0]</strong></LineText>
      <Indent>
        <LineText>a shortcut word lie on the higher authority level (accessing more foundational grammar abilities (see binary_core)) and is evaluated immediately to be converted to regular words</LineText>
        <LineText>example: &quot;read2 ing&quot; -&gt; &quot;read2 undefined0 undefined0&quot; -&gt; &quot;the act of reading&quot;</LineText>
      </Indent>
      <LineText><strong>function[1/2]</strong></LineText>
      <Indent>
        <LineText>function is the catchall phrase for other words. unlike nouns, function always require parameters to specify its nature</LineText>
      </Indent>
    </Indent>
    <LineText><strong>developer use</strong></LineText>
    <Indent>
      <LineText>additions/modifications to the base nhalang is allowed, developers will define their own functions to extend the language for their specific use case</LineText>
      <LineText>= function_name number_of_arguments [</LineText>
      <Indent>
        <LineText>function&apos;s body, note that &quot;=0&quot; represents the first argument, &quot;=1&quot; second, etc &quot;until = number_of_arguments-1&quot;</LineText>
      </Indent>
      <LineText>]</LineText>
      <LineText>recursion allowed!</LineText>
      <LineText><strong>example:</strong></LineText>
      <Indent>
        <LineText><strong>doubling a token</strong></LineText>
        <Indent>
          <LineText>` double 1 [</LineText>
          <Indent>
            <LineText>`0 `0</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>this function doubles its input, &quot;double a&quot; is replaced with the content of double where `0 `0 is &quot;a&quot; (just like lambda calculus).</LineText>
          <LineText>double a -&gt; a a</LineText>
          <LineText>double [ a b c ] -&gt; a b c a b c</LineText>
          <LineText>double [ [ a b c ] ] -&gt; a b c a b c</LineText>
        </Indent>
        <LineText><strong>if statement</strong></LineText>
        <Indent>
          <LineText>` true 2 [</LineText>
          <Indent>
            <LineText>`0</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>` false 2 [</LineText>
          <Indent>
            <LineText>`1</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>` is_raining 0 [</LineText>
          <Indent>
            <LineText>true</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>is_raining bring2 i umbrella void -&gt; true bring2 i umbrella void -&gt; bring2 i umbrella</LineText>
        </Indent>
        <LineText><strong>summation</strong></LineText>
        <Indent>
          <LineText>` summation 1 [</LineText>
          <br/>
          <LineText>]</LineText>
        </Indent>
      </Indent>
    </Indent>
  </Indent>
</Document>
