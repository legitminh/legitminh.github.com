<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import Indent from "$lib/components/Indent.svelte";
</script>
<Document>
  <Header/> 
  <LineText>the national high school game academy</LineText>
  <br/>
  <LineText><strong>Notation</strong></LineText>
  <Indent>
    <LineText><strong>Date</strong></LineText>
    <Indent>
      <LineText>date is shown in \mXdY format, where m is month, X is the month number, d is day, Y is the day number</LineText>
      <LineText>Example: m6d22 means June 22nd</LineText>
    </Indent>
    <LineText><strong>Time</strong></LineText>
    <Indent>
      <LineText>time is shown in \hXmY format, where h is hour, X is the hour number (0 to 24), m is minute, Y is the minute number</LineText>
      <LineText>Example: h16m4 means 4:04pm</LineText>
    </Indent>
    <LineText><strong>Variable</strong></LineText>
    <Indent>
      <LineText>Variable is shown in \varName=varValue format, where varName is the name of the variable, varValue is the value of the variable</LineText>
    </Indent>
  </Indent>
  <LineText><strong>The National High School Game Academy</strong></LineText>
  <Indent>
    <LineText>The National High School Game Academy (NHSGA) is a 6-week residential summer camp for game design at Carnegie Mellon University.</LineText>
  </Indent>
  <LineText><strong>Timeline</strong></LineText>
  <Indent>
    <LineText>\startDate=\m6d22</LineText>
    <LineText><strong>\m6d21</strong></LineText>
    <Indent>
      <LineText>\startDate-1, Saturday</LineText>
    </Indent>
  </Indent>
</Document>
