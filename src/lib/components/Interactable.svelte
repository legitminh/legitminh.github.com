<script lang="ts">
  let { children, on_close} = $props();
</script>

<button onclick={on_close} class="inline cursor-pointer">
  {tokenRoute?<span className=" inline">[{tokenRoute}]</span>:null}
  {@render children?.()}
</button>
