<script lang="ts">
  import LineText from "$lib/components/LineText.svelte";
import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
</script>
<Document>
  <LineText> <Link href="/"> home </Link> </LineText>
  <LineText> <Link href="project/astrofest"> astrofest </Link> </LineText>
</Document>