<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_nhalang_low_abstraction.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText, Indent } from '@legitminh/keyflow';

</script>

   
  
  <br/>
  <LineText><strong>{t("purpose")}</strong></LineText>
  <Indent>
    <LineText>{t("nhalang is the rethinking of language. a guideline for information transfer between reader and writer for all levels of abstraction. this document outline the binary core, the foundational logic behind higher level abstraction nhalang.")}</LineText>
  </Indent>
  <LineText><strong>{t("motivation for linear language")}</strong></LineText>
  <Indent>
    <LineText>{t("communication takes time. each bit of information is generalized as a symbol living in a symbol space. all information is the specification of a state within a larger possibility of states. the most basic communication uses a symbol space of 2, yes or no. more advanced communication have a larger symbol space where a symbol could have many meaning. symbols are chained linearly to match time flow. while non-linear language can exist, we can represent them using a linear language (question: does it exist information that cannot be linearized?).")}</LineText>
  </Indent>
  <LineText><strong>{t("multifiles")}</strong></LineText>
  <Indent>
    <LineText>{t("for hat multi-file to one output, i want to make file dependencies essentially go in linear order to prevent looping dependencies, so like if all the files are joined in one big files, so files are only organizational units. this process can be defined programmatically by a builder/entry point file where if you run that file, it look at all the dependencies in linear order and essentially append them in that order. there is also the option to call a special methods that automatically grab all the files in a folder recursively for lazy people. the final file will have \"imports\" (more like awareness) of all previous files, and usually where the core executions lie.")}</LineText>
  </Indent>
  <LineText><strong>{t("visual scripts (base4 encoding)")}</strong></LineText>
  <Indent>
    <LineText>{t("up arch = 0")}</LineText>
    <LineText>{t("up loop = 1")}</LineText>
    <LineText>{t("down arch = 2")}</LineText>
    <LineText>{t("down loop = 3")}</LineText>
  </Indent>
  <LineText><strong>{t("motivation for simplicity")}</strong></LineText>
  <Indent>
    <LineText>{t("the simpler the rule for the language, the better and more scalable. lambda calculus, while simple in its theoretical foundations, is cumbersome in practice due to large quantity of symbols and non-linear execution order. in essence, lambda calculus is more of a flattened version of a function tree with pre-defined hirerarchial groupings.")}</LineText>
  </Indent>
  <LineText><strong>{t("the foundation")}</strong></LineText>
  <Indent>
    <LineText>{t("nhalang seek to align with biological nature. when we learn language, we learn vocabulary association, a sound to a physical figure. then, we associal sound to structure/relationship of those figures. for example, in \"the fox jump over the lazy dog,\" the \"fox\" sound abstractize an uncertain thing that matches \"fox\" criteria while \"jump\" is a relationship of the fox's body parts and the way it moves throughout space and time and relative to the \"dog.\" the vocabulary association is somewhat simple, we just need to connect symbol of \"dog\" to pictures of dog (for image classfication), or some other digestable form. but looking deeper, to classify dog accurately, we need a dictionary containing its body parts and eventually its atoms. going to the root of abstraction is not feasible. a base vocabulary is sufficient to represent our lowest level of abstraction.")}</LineText>
    <LineText>{t("thus, we establish the method of dictionary mapping symbols to lowest level of abstraction symbols. this method of symbolic manipulation is in all forms of human communication: shortkeys, acronyms, hieroglyphics, etc.")}</LineText>
    <LineText>{t("we will also discover that relationship is just another dimension of the possibility space. mathematically, the pairing of states (before and after, parent and children, key and value). using the original example, \"jump over dog\" is perhaps a time structure that satisfies: [0] travelling (of the fox) approximatable (to a certain error threshold) by some equation (of time), [1] the dog's position (relative to the fox) have lower vertical position. 'jump over' is hard to imagine from lower levels of abstraction, but with repeated use, it become second-nature.")}</LineText>
  </Indent>
  <LineText><strong>{t("analogy: soup in pot")}</strong></LineText>
  <Indent>
    <LineText>{t("we put soup in pot. why? because it is confined and not messy. the soup can be chaotic, but the pot gives it order. same for nhalang abstraction model. nhalang vocabulary is the pot for our uncertain reality. drawing border to limit our imagination to keep it simple. while the actual soup have freedom, and while our imagination are theoretically unbounded -- nhalang help package ideas for communication, packing society together.")}</LineText>
  </Indent>
  <LineText><strong>{t("dual code stream")}</strong></LineText>
  <Indent>
    <LineText>{t("while nhalang is designed such that the kernel can be written using | and - only. the system can function with larger symbol sets warranted that | and - are defined in the interpreter. the auxiliary symbol space help define variable using single symbols rather than chaining -- and -| together. thus, the stream variable space is the limiting factor and architecture of the language's implementation.")}</LineText>
  </Indent>
  <LineText><strong>{t("log")}</strong></LineText>
  <Indent>
    <LineText><strong>2026.6.6</strong></LineText>
    <Indent>
      <LineText><strong>{t("the arithmetic system have the following property")}</strong></LineText>
      <Indent>
        <LineText>{t("0 -> true")}</LineText>
        <LineText>{t("1 -> false")}</LineText>
        <LineText>{t("2 -> false")}</LineText>
        <LineText>{t("dec 1 -> 0")}</LineText>
        <LineText>{t("inc 0 -> 1")}</LineText>
        <LineText>{t("dec 2 -> 1")}</LineText>
      </Indent>
      <LineText>{t("for in-code imports, this is handled through symbols space restrictions that prevent | and - injection to break code. imports will be reduced to harmless, overwritable binaries (0,1) which behavior can be defined to act like plain text, image, video, or even code (require trust of the imported source).")}</LineText>
      <LineText>{t("it is impossible to create a variable definer such that the body is treated as raw (example, def a : b -> | -- a | -- b |) because, without redefining b as -- b, there must be a process that convert all eligible x to -- x instead of the true value of x. this process will introduce a | within the definer and prematurely close the definer.")}</LineText>
      <LineText><strong>{t("in the characterized edition")}</strong></LineText>
      <Indent>
        <LineText><strong>{t("placeholder for raw -| strings")}</strong></LineText>
        <Indent>
          <LineText>|0|----------------|</LineText>
          <LineText>{t("|0|b|")}</LineText>
          <LineText>||0|</LineText>
          <LineText>{t("is the same with")}</LineText>
          <LineText>{t("|----|b|")}</LineText>
          <LineText>||----|</LineText>
          <LineText>{t("without the ---- clunkiness")}</LineText>
        </Indent>
        <LineText><strong>{t("setting a -| string as a reference to another -|")}</strong></LineText>
        <Indent>
          <LineText>| ---0 | ---- ---- ---- |</LineText>
          <br/>
          <LineText>|</LineText>
          <LineText>---0</LineText>
          <LineText>|</LineText>
          <LineText>---- ----</LineText>
          <LineText>---- ---|</LineText>
          <LineText>---- ----</LineText>
          <LineText>|</LineText>
          <br/>
          <LineText>||---0|</LineText>
          <LineText>{t("where 0 is defined as -|- effectively say that --- translates to ---|-- (which will be read as -|-). when 0 is accessed, it is as if translation of --- is used. also note that ||---0| is the same with 0 in non-tranlative mode")}</LineText>
          <LineText>{t("is the same with")}</LineText>
          <LineText>|</LineText>
          <LineText>---- ---- ----</LineText>
          <LineText>|</LineText>
          <LineText>---- ----</LineText>
          <LineText>---- ---|</LineText>
          <LineText>---- ----</LineText>
          <LineText>|</LineText>
          <br/>
          <LineText>||---- ---- ----|</LineText>
        </Indent>
        <LineText><strong>{t("defining lists")}</strong></LineText>
        <Indent>
          <LineText>{t("| \\a\\b\\c | m |")}</LineText>
          <LineText>{t("|| \\a\\b\\c |")}</LineText>
        </Indent>
      </Indent>
    </Indent>
  </Indent>

