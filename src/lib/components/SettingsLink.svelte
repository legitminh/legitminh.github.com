<script lang="ts">
  import { Link } from '@legitminh/keyflow';
  import { t } from '$lib/i18n.svelte';
</script>

<Link href="#list.setting"><span aria-hidden="true">⚙</span><span class="sr-only">{t('settings')}</span></Link>

<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }
</style>
