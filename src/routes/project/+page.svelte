<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import LineText from "$lib/components/LineText.svelte";
import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
</script>
<Document>
  <LineText> <Link href="/"> home </Link> </LineText>
  <Card href="/project/astrofest" name="astrofest" visualization="/images/projects/astro-fest.png" />
</Document>