<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import TextSubsection from "$lib/components/TextSubsection.svelte";
</script>
<Document>
  <Header/> 
  <LineText>the national high school game academy</LineText>
  <br/>
  <TextSubsection title="Notation">
    <TextSubsection title="Date">
      <LineText>date is shown in \mXdY format, where m is month, X is the month number, d is day, Y is the day number</LineText>
      <LineText>Example: m6d22 means June 22nd</LineText>
    </TextSubsection>
    <TextSubsection title="Time">
      <LineText>time is shown in \hXmY format, where h is hour, X is the hour number (0 to 24), m is minute, Y is the minute number</LineText>
      <LineText>Example: h16m4 means 4:04pm</LineText>
    </TextSubsection>
    <TextSubsection title="Variable">
      <LineText>Variable is shown in \varName=varValue format, where varName is the name of the variable, varValue is the value of the variable</LineText>
    </TextSubsection>
  </TextSubsection>
  <TextSubsection title="The National High School Game Academy">
    <LineText>The National High School Game Academy (NHSGA) is a 6-week residential summer camp for game design at Carnegie Mellon University.</LineText>
  </TextSubsection>
  <TextSubsection title="Timeline">
    <LineText>\startDate=\m6d22</LineText>
    <TextSubsection title="\m6d21">
      <LineText>\startDate-1, Saturday</LineText>
    </TextSubsection>
  </TextSubsection>
</Document>
