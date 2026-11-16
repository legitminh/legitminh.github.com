<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_nhsga.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText, Indent } from '@legitminh/keyflow';

</script>

   
  <LineText>{t("the national high school game academy")}</LineText>
  <br/>
  <LineText><strong>{t("notation")}</strong></LineText>
  <Indent>
    <LineText><strong>{t("date")}</strong></LineText>
    <Indent>
      <LineText>{t("date is shown in \\mxdy format, where m is month, x is the month number, d is day, y is the day number")}</LineText>
      <LineText>{t("example: m6d22 means june 22nd")}</LineText>
    </Indent>
    <LineText><strong>{t("time")}</strong></LineText>
    <Indent>
      <LineText>{t("time is shown in \\hxmy format, where h is hour, x is the hour number (0 to 24), m is minute, y is the minute number")}</LineText>
      <LineText>{t("example: h16m4 means 4:04pm")}</LineText>
    </Indent>
    <LineText><strong>{t("variable")}</strong></LineText>
    <Indent>
      <LineText>{t("variable is shown in \\varname=varvalue format, where varname is the name of the variable, varvalue is the value of the variable")}</LineText>
    </Indent>
  </Indent>
  <LineText><strong>{t("the national high school game academy")}</strong></LineText>
  <Indent>
    <LineText>{t("the national high school game academy (nhsga) is a 6-week residential summer camp for game design at carnegie mellon university.")}</LineText>
  </Indent>
  <LineText><strong>{t("timeline")}</strong></LineText>
  <Indent>
    <LineText>{t("\\startdate=\\m6d22")}</LineText>
    <LineText><strong>{t("\\m6d21")}</strong></LineText>
    <Indent>
      <LineText>{t("\\startdate-1, saturday")}</LineText>
    </Indent>
  </Indent>

