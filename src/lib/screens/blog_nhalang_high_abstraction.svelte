<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_nhalang_high_abstraction.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText, Indent } from '@legitminh/keyflow';

</script>

   
  
  <br/>
  <LineText><strong>{t("nhalang.1 grammar overview")}</strong></LineText>
  <Indent>
    <LineText>{t("birthdate: 2026.8.2")}</LineText>
    <LineText><strong>{t("philosophy")}</strong></LineText>
    <Indent>
      <LineText>{t("the language is designed to concretize and streamline agent to agent and agent(s) to self communication (about the reality).")}</LineText>
      <LineText>{t("the reality is a member of potential universes. while fiction or hypothetical communication describe a universe not reality, communication is by default about the reality. all universes however, are similarly structured, with 1 temporal dimensions where all entities exist in, spanning a certain timepoint to another timepoint. each frame of time contain 3 spacial dimensions (as observed by humans). an entity is a region in the 4d universe space (it have properties like start point (4d vector), end point(4d vector)). since there are so many entities, words in nhalang often doesn't need entity level specificity (due to high uncertainty), so a word like \"jeff\" describe not just the entity spanning [jeff 5 minutes ago] to [jeff now] but also [jeff 5 minute + 1 second ago] to [jeff 1 hours later], or jeff from birth to death, or jeff from embryo to burial, (within reasons, of course). same for \"table\", it doesn't specify a table but all things considered tables in general. a relation is a higher level entity with some more information, \"know[2]\" may refer to the collection of mental configurations of $0's member where $1's member is in their knowledge.")}</LineText>
      <br/>
    </Indent>
    <LineText><strong>{t("each word are functions of some number of parameters")}</strong></LineText>
    <Indent>
      <LineText><strong>{t("for example:")}</strong></LineText>
      <Indent>
        <LineText>{t("hello[1]= speaker wish to speak to $0")}</LineText>
      </Indent>
    </Indent>
    <LineText><strong>{t("if word a with a param is placed as the param of word b, the params of a will be satisfied first until a have no params then the result of a is a param of b.")}</strong></LineText>
    <Indent>
      <LineText><strong>{t("for example:")}</strong></LineText>
      <Indent>
        <LineText>{t("black[1]= $0 in all black objects")}</LineText>
        <LineText>{t("a_cat[0]= all cats")}</LineText>
        <LineText>{t("leap[1]= a (a in $0) leap (throughout time)")}</LineText>
        <LineText>{t("leap black a_cat -> leap[black[a_cat]] -> in english: [there exist in this reality] a black cat leap (unknown time)")}</LineText>
      </Indent>
    </Indent>
    <LineText><strong>{t("words and functions return are \"class prioritizing\" which means")}</strong></LineText>
    <Indent>
      <LineText>{t("\"cat\" represents all cats instead of a cat.")}</LineText>
      <LineText>{t("this have the math equivalence of doing square represent the class of square instead of x | x \\in square.")}</LineText>
      <LineText>{t("in computer science, apple means class of apple and not new apple()")}</LineText>
    </Indent>
    <LineText><strong>{t("a list of words that when parsed, have all requested params satisfied is a clause, many clauses in succession implicity describe their union")}</strong></LineText>
    <Indent>
      <LineText><strong>{t("for example:")}</strong></LineText>
      <Indent>
        <LineText>{t("a cat a dog -> a cat and a dog")}</LineText>
      </Indent>
    </Indent>
    <LineText>{t("if a statement is made (like \"car\"), it is declaring existance of that thing (cars exist) in this reality. saying \"equal sum 2 number 2 number 4 number\" is the same with there exist equality between 2+2 and 4.")}</LineText>
    <LineText>{t("chatgpt[grammar exists only to determine how functions compose. all semantic distinctions belong in the lexicon.]")}</LineText>
    <LineText><strong>{t("phonetics")}</strong></LineText>
    <Indent>
      <LineText>{t("a duetphoneme is a consonant + vowel (diphtong allowed). example: \"hai\" = \"h\" + \"ai\", sounds like english \"hi\"")}</LineText>
      <LineText>{t("a word is a list of duetphonemes, such as \"paoli\", pronounced smoothly such that it sounds like \"paol\" and \"li\" meshed together")}</LineText>
      <LineText>{t("the lack of smooth transition mark word boundaries")}</LineText>
      <LineText>{t("note: phonemes with \"a\" vowel are commonly shortened as just the consonent, such as \"haha\" is pronounced \"hah\"")}</LineText>
    </Indent>
    <LineText><strong>{t("word classes")}</strong></LineText>
    <Indent>
      <LineText>{t("objective: to help with language studying and development. classes are defined for classification")}</LineText>
      <LineText><strong>{t("noun0")}</strong></LineText>
      <Indent>
        <LineText>{t("many objects in a timeframe are mentally abstracted by their sensory markers: most commonly visual (they can be indentified with an image). this abstraction is time independent, and doesn't rely on a certain change over time")}</LineText>
        <LineText>{t("this lead our brains to develop the word class of noun. for instance, seeing a tiger might prompt saying \"a tiger\" to bring up the visual of a tiger to our listeners.")}</LineText>
        <LineText>{t("since noun often trigger immediate relevant sensory information, the need to add parameters for clarifiation is infrequent, therefore noun will only have 1 to reflect that use case.")}</LineText>
        <LineText>{t("however, noun clarifiation does happen, we use functions like \"intersection\", \"avg_midpoint\", \"of\" to specify: \"computer screen\" = \"of2 screen computer\" to describe a screen that is of the computer")}</LineText>
      </Indent>
      <LineText><strong>{t("adjective1")}</strong></LineText>
      <Indent>
        <LineText>{t("these are similar to nouns, but marked as often needing clarifiation. emphasis[that is the only difference]. colors, for example, rarely come by themselves, but in context of an object's color. so, while there is a \"red1 all_object\" class for all red objects, red accept 1 argument to clarify \"red1 car\"")}</LineText>
      </Indent>
      <LineText><strong>{t("verb[1/2]")}</strong></LineText>
      <Indent>
        <LineText>{t("verb are objects that must span time due to its description of start and end state.")}</LineText>
        <LineText>{t("all change in time recorded is due to a \"causing agent,\" a person, a potential, a time change. in english, this is called the \"subject\" of the action.")}</LineText>
        <LineText><strong>{t("verb1")}</strong></LineText>
        <Indent>
          <LineText>{t("often, knowing the \"causing state\" is sufficient to understand the verb. these verbs are called \"internal verb\" where the result is largely decided by the agent.")}</LineText>
          <LineText><strong>{t("example: \"jump1 jeremy\" is sufficient clear, there is often not much need to specify where jeremy jump to, or how high. if needed; however,")}</strong></LineText>
          <Indent>
            <LineText>{t("\"to2 jump1 jeremy closest1 moon\"")}</LineText>
            <LineText>{t("\"up1 span2 jump1 jeremy 100 meter\"")}</LineText>
          </Indent>
        </Indent>
        <LineText><strong>{t("verb2")}</strong></LineText>
        <Indent>
          <LineText>{t("the first parameter is the agent/subject and the second specify the \"path\" taken by the subject.")}</LineText>
          <LineText>{t("example: \"bite jeff burger\"")}</LineText>
          <LineText>{t("if object is unknown/undisclosed: \"bite jeff something\"")}</LineText>
        </Indent>
      </Indent>
      <LineText><strong>{t("shortcut[0]")}</strong></LineText>
      <Indent>
        <LineText>{t("a shortcut word lie on the higher authority level (accessing more foundational grammar abilities (see binary_core)) and is evaluated immediately to be converted to regular words")}</LineText>
        <LineText>{t("example: \"read2 ing\" -> \"read2 undefined0 undefined0\" -> \"the act of reading\"")}</LineText>
      </Indent>
      <LineText><strong>{t("function[1/2]")}</strong></LineText>
      <Indent>
        <LineText>{t("function is the catchall phrase for other words. unlike nouns, function always require parameters to specify its nature")}</LineText>
      </Indent>
    </Indent>
    <LineText><strong>{t("developer use")}</strong></LineText>
    <Indent>
      <LineText>{t("additions/modifications to the base nhalang is allowed, developers will define their own functions to extend the language for their specific use case")}</LineText>
      <LineText>{t("` function_name number_of_arguments [")}</LineText>
      <Indent>
        <LineText>{t("function's body, note that \"`0\" represents the first argument, \"`1\" second, etc \"until = number_of_arguments-1\"")}</LineText>
      </Indent>
      <LineText>]</LineText>
      <LineText><strong>{t("shorthand for defining a function")}</strong></LineText>
      <Indent>
        <LineText>{t("= f [] // define a function with 0 argument")}</LineText>
        <LineText>{t("~ f [] // define a function with 1 argument")}</LineText>
      </Indent>
      <LineText>{t("recursion allowed!")}</LineText>
      <LineText><strong>{t("example:")}</strong></LineText>
      <Indent>
        <LineText><strong>{t("doubling a token")}</strong></LineText>
        <Indent>
          <LineText>{t("` double 1 [")}</LineText>
          <Indent>
            <LineText>`0 `0</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>{t("this function doubles its input, \"double a\" is replaced with the content of double where `0 `0 is \"a\" (just like lambda calculus).")}</LineText>
          <LineText>{t("double a -> a a")}</LineText>
          <LineText>{t("double [ a b c ] -> a b c a b c")}</LineText>
          <LineText>{t("double [ [ a b c ] ] -> a b c a b c")}</LineText>
        </Indent>
        <LineText><strong>{t("if statement")}</strong></LineText>
        <Indent>
          <LineText>{t("` true 2 [")}</LineText>
          <Indent>
            <LineText>`0</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>{t("` false 2 [")}</LineText>
          <Indent>
            <LineText>`1</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>{t("= is_raining true")}</LineText>
          <LineText>{t("is_raining bring2 i umbrella void -> true bring2 i umbrella void -> bring2 i umbrella")}</LineText>
        </Indent>
        <LineText><strong>{t("not")}</strong></LineText>
        <Indent>
          <LineText>{t("` func_2_util_swap_arg 3 [")}</LineText>
          <Indent>
            <LineText>`0 `2 `1</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>{t("` not 1 [")}</LineText>
          <Indent>
            <LineText>{t("func_2_util_swap_arg `0")}</LineText>
          </Indent>
          <LineText>]</LineText>
          <LineText>{t("not [ true ] a b -> func_2_util_swap_arg true a b -> true b a -> b")}</LineText>
        </Indent>
        <LineText><strong>{t("subtraction")}</strong></LineText>
        <Indent>
          <LineText>{t("` subtract 2 [")}</LineText>
          <Indent>
            <LineText>{t("// built in functionality")}</LineText>
          </Indent>
          <LineText>]</LineText>
        </Indent>
        <LineText><strong>{t("equality (numeric)")}</strong></LineText>
        <Indent>
          <LineText>` == 2 [</LineText>
          <Indent>
            <LineText>{t("iszero - `0 `1 //iszero built-in")}</LineText>
          </Indent>
          <LineText>]</LineText>
        </Indent>
        <LineText><strong>{t("summation (0 to n)")}</strong></LineText>
        <Indent>
          <LineText>{t("` summation 1 [")}</LineText>
          <Indent>
            <LineText>== `0 0</LineText>
            <Indent>
              <LineText>0</LineText>
              <LineText>{t("sum `0 summation subtract `0 1")}</LineText>
            </Indent>
          </Indent>
          <LineText>]</LineText>
        </Indent>
      </Indent>
    </Indent>
  </Indent>

