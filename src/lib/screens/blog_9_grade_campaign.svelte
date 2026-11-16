<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_9_grade_campaign.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';

</script>

   
  <LineText>{t("sample file hello world campaign credit: aswin k")}</LineText>

