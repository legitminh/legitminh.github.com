<script lang="ts">
  import type { GuideSection } from '$lib/data/projects';
  let { section }: { section: GuideSection } = $props();
</script>

<section class="guide-section">
  <h2>{section.title}</h2>
  {#if section.text}<p>{section.text}</p>{/if}
  {#if section.steps}
    <ol>{#each section.steps as step}<li>{step}</li>{/each}</ol>
  {/if}
  {#if section.items}
    <ul>{#each section.items as item}<li>{item}</li>{/each}</ul>
  {/if}
  {#if section.code}<pre><code>{section.code}</code></pre>{/if}
  {#if section.link}
    <a href={section.link.href} target="_blank" rel="noreferrer">{section.link.label} ↗</a>
  {/if}
</section>
