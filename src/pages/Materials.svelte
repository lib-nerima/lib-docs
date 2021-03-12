<script>

	// ExpansionPanels, ExpansionPanel,
   import { Button, Divider, Tabs, Tab, TabContent,
            Icon } from 'svelte-materialify';

	import {onMount} from 'svelte';  
  	import marked from 'marked';
   import {fetch as fetchPolyfill} from 'whatwg-fetch'; // fetch for IE11 対応

   // MATERIAL-ICONSInfo, DoubleArrow
	import { ArrowDropDown, ArrowForward, ArrowDownward,ArrowUpward,
	         Cancel, ExpandMore, Help, Home,Info, DoubleArrow,
	         MenuButton, MoreVert, 
	         PlayCircleFilled, Settings } from '../material-icons/_index';

	let oW; // 画面サイズ
	let size = "text-h3";
	// 画面サイズ: スマホ: 560px | タブレット: 960px | PC) 
	// let bpoints = [420,700];
	let bpoints = [560,960];

   $:{ 
      // タイトルサイズ調整  
      size = "text-h3"; // default 
	   if ( oW < bpoints[1] ){ size = "text-h4"; }
	   if ( oW < bpoints[0] ){ size = "text-h5"; }

   }

   // PAGES
	import Folder             from '../components/Folder.svelte';
	import FolderEx           from '../components/FolderEx.svelte';
	import Loading            from '../components/Loading.svelte';
	import Anketo             from './Anketo.svelte';
	import KaigirokuLists     from './KaigirokuLists.svelte';

	// import ListInfoDisclosure from './List-InfoDisclosure2.svelte';
	// import ExpandedLists      from './ExpandedLists.svelte';
	
	let path = "";
   // 情報公開請求資料 INDEX
	let index = [
		{folder:"2020年請求",file:"nerima-2020.json"},
		{folder:"2019年請求",file:"nerima-2019.json"},
		{folder:"2018年請求",file:"nerima-2018.json"},
		{folder:"2017年請求",file:"nerima-2017.json"},
		{folder:"2016年請求",file:"nerima-2016.json"}
   ];
   
   
	let tab_titles = [
		{title:"情報公開資料"},
		{title:"利用者アンケート"},
		{title:"会議録等"}
   ];


  
	let promise;

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

<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />
   
   <div class="container">

   <div class="breadcrumb-title">
      <DoubleArrow color="#7da453" size="0.8em" /> 図書館関係資料
   </div>

<!--<h1 class="text-h6">oW:{oW}</h1>-->
<h4 class="{size}">図書館関係資料</h4>

      <br>

      <ul class="text-body-2">
         <li>練馬区図書館関係資料を収集保管しています。</li>
         <li>資料は主に情報公開制度により取得したものです。</li>
         <li>練馬区図書館 HP では一定期間過去分は削除されている為、ここに補完公開しています。</li>
      </ul>
      <br>

      <Divider />

      <Tabs centerActive>
        <div slot="tabs">

          {#each tab_titles as {title}, i}
            <Tab>{title}</Tab>
          {/each}

        </div>

        <Divider />

        {#each tab_titles as {title}, i}
          <TabContent>

            {#if i === 0}
               <h5 class="title">
                  <Icon><ArrowForward size="1.4em" /></Icon>
                  {title}
               </h5>

               <ul class="text-body-2">
                  <li>開示形態の異なる場合があるため請求毎に分れています。</li>
                  <li>資料は行政年度を跨いで掲載されている場合があります。</li>
                  <li>主な掲載文書
                     <ul>
                        <li>「館長会議」関連文書</li>
                        <li>「指定管理者連絡調整会議」関連文書</li>
                        <li>指定管理者事業報告書</li>
                     </ul>
                  </li>
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

            
            {/if}
            
            {#if i === 1}
               <h5 class="title">
                  <Icon><ArrowForward size="1.4em" /></Icon>
                  {title}
               </h5>
               <p class="tab-content">
                  <Anketo />
               </p>
            
            {/if}

            {#if i === 2}
               <h5 class="title">
                  <Icon><ArrowForward size="1.4em" /></Icon>
                  {title}
               </h5>

               <p class="tab-content">
                  <KaigirokuLists />
               </p>
            
            {/if}
            
          </TabContent>
        {/each}
      </Tabs>

      <br>
   </div>


<style>

 p.tab-content{
   padding:0px 8px;
 }
 
 h5.title{
   padding:10px 0px;
 }
 
   :global(.title-ex){
      padding: 16px 26px;
   }  

   .space{
      width:100%;
      height:60px;
   }


</style>
