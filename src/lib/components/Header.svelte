<script lang="ts">
  import { t } from '$lib/i18n.svelte';
  import { LineText, Link } from '@legitminh/keyflow';
</script>
<div class = "header">
<LineText> <Link href="#"> {t("home")}</Link> </LineText>
</div>
<style>
  .header {
    margin-top: calc(var(--min-box) / 4);
  }
</style>
