
<script>
   export let pre;
	import { pageNum } from './stores.js';
   import { Footer, Button } from 'svelte-materialify';

   // ページ num は１から
   const links = [
     { page:'Home', ref:"home",num:1},
     { page:'ヘルプ', ref:"infomations",num:2},
     { page:'サイトについて',ref:"infomations",num:1}
   ];

</script>

<Footer padless class="indigo theme--dark justify-center flex-column">
  <div class="mt-2 mb-2 footer">
    {#each links as {page,ref,num},i}
      <a href="#/{ref}" on:click="{()=>$pageNum=num}">    
         <Button text rounded>{page}</Button></a>
    {/each}
  </div>
  
  <div class="indigo lighten-1 pa-2 text-center" style="width:100%;">
    <b>{pre.title}</b>
    <br>
    2020 - {pre.year}
  </div>
</Footer>

