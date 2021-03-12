<script>

   import {fetch as fetchPolyfill} from 'whatwg-fetch'; // fetch for IE11 対応
   import { Button, Divider, Tabs, Tab, TabContent,
            ExpansionPanels, ExpansionPanel, Icon } from 'svelte-materialify';

   import FolderEx from '../components/FolderEx.svelte';

	let promise;

	let path = ""; // ファイル href 順次追加する

   // データファイル
   let index = [
		{folder:"2020年請求",file:"nerima-2020.json"},
		{folder:"2019年請求",file:"nerima-2019.json"},
		{folder:"2018年請求",file:"nerima-2018.json"},
		{folder:"2017年請求",file:"nerima-2017.json"},
		{folder:"2016年請求",file:"nerima-2016.json"}
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
	
</script>
         
<div class="contai-ner">

  <h1 class="text-h5">資料詳細一覧</h1>

   {#each index as {folder, file}, i}
      {#await promise=getDataJson(file)}

         <p>...waiting</p>

      {:then data}

         <FolderEx name="{folder}" files={data} path="{path}" />

      {:catch error}
         <p style="color: red">{error.message}</p>
      {/await}

   {/each}
  
</div>


<style>
	a { text-decoration: none;	}
</style>


