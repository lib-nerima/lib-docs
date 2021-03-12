
<script>

	import { set_page } from '../components/stores.js';
   import { Button, Icon, ButtonGroup, ButtonGroupItem } from 'svelte-materialify';
	import { onMount, onDestroy } from 'svelte';

   // MATERIAL-ICONSInfo, DoubleArrow
	import { DoubleArrow } from '../material-icons/_index';

   // import Page01 from "./Page01.svelte";
   // import Page02 from "./Page02.svelte";
   import Preparation from "./Preparation.svelte";
   
   const pages=[
      {name:"図書館関連資料",component:Preparation},
      {name:"関係団体その他",component:Preparation}
   ]   
   

   let page = "";
	onMount(()=>{
   	$set_page = 1;
	})
	onDestroy(()=>{
   	$set_page = 1;
	})
   
   // $:{ page = pages[$set_page-1].component; }
   $:{ 
      page = pages[vals[0]].component; 
      
      // タイトルサイズ調整  
      size = "text-h3"; // default 
	   if ( oW < bpoints[1] ){ size = "text-h4"; }
	   if ( oW < bpoints[0] ){ size = "text-h5"; }

   }

   const vals = [0]; // 配列で格納されている　[0, [0]];


	let oW; // 画面サイズ
	let size = "text-h3";
	// 画面サイズ: スマホ: 560px | タブレット: 960px | PC) 
	// let bpoints = [420,700];
	let bpoints = [560,960];

</script>
   
<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />
   
<div class="container">

   <div class="breadcrumb-title">
      <DoubleArrow color="#7da453" size="0.8em" /> LINKS
   </div>

<!--<h1 class="text-h6">oW:{oW}</h1>-->
<h4 class="{size}">LINKS</h4>

<div class="text-center">
   <ButtonGroup mandatory activeClass="indigo darken-1 white-text" bind:value={vals[0]}>
      {#each pages as {name}, i}
         <ButtonGroupItem>
            {name}
         </ButtonGroupItem>
      {/each}
   </ButtonGroup>
</div>

<svelte:component this={page}/>

</div>


<style>

   .nav{
      
      margin: 0 auto;
   }
   
   .container { 
      padding-top: 70px; 

   }

</style>     
