<script>

   import {fetch as fetchPolyfill} from 'whatwg-fetch'; // fetch for IE11 対応
   import { Button, Icon } from 'svelte-materialify';
	import { ArrowDownward, ArrowUpward } from '../material-icons/_index';

   import Folder   from '../components/Folder.svelte';
   import FolderEx from '../components/FolderEx.svelte';
	import Loading  from '../components/Loading.svelte';


	let promise;

	let path = ""; // ファイル href 順次追加する

   // データファイル
   let index = [
		{folder:"館長懇談会会議録",file:"kaigiroku.json"}
   ];

   // データの読込み
	async function getDataJson(file) {
		
		const res = await fetchPolyfill('./data/' + file);
		const json = await res.json(); // text
	   if (res.ok) {
			   return json;
		   } else {
			   throw new Error(json);
		   }
	}
	
	let visible = false;
	
	function openExpanddedLists(){
		visible = !visible;
	}

	
</script>

   <ul class="text-body-2">
      <li>年１回開かれている「図書館利用者と館長との懇談会」の「会議録」及「意見の概要」です。</li>
      <li>図書館側の都合により「会議録」の欠けている年度がありますが、利用者側の要望で復活した経緯があります。</li>
   </ul>


<br>
         
   {#each index as {folder, file}, i}
      {#await promise=getDataJson(file)}

         <Loading />

      {:then data}

         <Folder name="{folder}" files={data} path="{path}" />

      {:catch error}
         <p style="color: red">{error.message}</p>
      {/await}

   {/each}

<br>

<Button block on:click="{()=> openExpanddedLists()}">

   {#if visible === true}
      詳細一覧を閉じる
      <Icon>
         <ArrowUpward />
      </Icon>
   {:else}
      詳細一覧を表示する
      <Icon>
         <ArrowDownward />
      </Icon>

   {/if}

</Button>

<!-- 初期画面スペース -->
{#if visible === true}
   <br>
{:else}
   <div class="space"></div>
{/if}


{#if visible === true}

   <h1 class="text-h6 title-ex">資料詳細一覧</h1>
   
   {#each index as {folder, file}, i}
      {#await promise=getDataJson(file)}

         <Loading />

      {:then data}

         <FolderEx name="{folder}" files={data} path="{path}" />

      {:catch error}
         <p style="color: red">{error.message}</p>
      {/await}

   {/each}

{/if}
  
<style>

   .space{
      width:100%;
      height:300px;
   }

</style>


