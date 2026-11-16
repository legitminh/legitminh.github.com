<script lang="ts">
  import type { GuideSection } from '$lib/data/projects';
  import { LineText, Link } from '@legitminh/keyflow';
  let { section }: { section: GuideSection } = $props();
</script>

<section class="guide-section">
  <LineText><h2>{section.title}</h2></LineText>
  {#if section.text}<LineText><p>{section.text}</p></LineText>{/if}
  {#if section.steps}
    <ol>{#each section.steps as step}<li><LineText>{step}</LineText></li>{/each}</ol>
  {/if}
  {#if section.items}
    <ul>{#each section.items as item}<li><LineText>{item}</LineText></li>{/each}</ul>
  {/if}
  {#if section.code}<LineText><pre><code>{section.code}</code></pre></LineText>{/if}
  {#if section.link}
    <LineText><Link href={section.link.href}>{section.link.label} ↗</Link></LineText>
  {/if}
</section>

<style>
  li { margin-block: calc(var(--min-box) / 4); }
  pre { white-space: pre-wrap; overflow-wrap: anywhere; font: inherit; }
</style>
