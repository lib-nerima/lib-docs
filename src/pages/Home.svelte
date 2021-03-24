<script>

	export let pre;
	// ExpansionPanels, ExpansionPanel,
	import { Button, Divider, Tabs, Tab, TabContent,
            ListItem, Row, Col, Icon } from 'svelte-materialify';

   // MATERIAL-ICONS
	import { ArrowDropDown, ArrowForward, ArrowDownward,ArrowUpward,
	         Cancel, ExpandMore, Help, Home, MenuButton, MoreVert, 
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
	
</script>


<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />
<img src="./img/logo.png" alt="{pre.title}" title="{pre.title}" style="width:100%">

<div class="container">
<!--<h1 class="text-h6">oW:{oW}</h1>-->
<!--<h4 class="{size}">{pre.title}</h4>-->

<h6 class="text-subtitle-1">練馬区図書館関係資料を公開しています。</h6>

<br>

<Row noGutters>

  <Col cols={12} sm={6} md={6}>
    <h5 class="title">お知らせ/更新情報</h5>

   <div class="d-flex justify-center mt-2 mb-2" style="margin:4px;">
     <div class="elevation-1" style="width:100%;">
       <ListItem> 
            「<a href="#/statistics">統計資料</a>」のページを追加しました。
          <span slot="subtitle" class="blue-grey-text lighten-2"> 2021-03-24 </span>
       </ListItem>
       <ListItem> 
          サイトを公開しました。
          <span slot="subtitle" class="blue-grey-text lighten-2"> 2021-03-12 </span>
       </ListItem>

     </div>
   </div>
   
  </Col>

  <Col cols={12} sm={6} md={6}>
    <h5 class="title">利用上の注意</h5>
    <div class="pa-2">
       <ul>
         <li>情報は随時更新されます。</li>
         <li>文書(PDF)は携帯端末でも閲覧出来ます。<br>
               ※ 携帯端末では通常ブラウザ画面ではなくダウンロードして専用ソフトで開く形式となっています。
         </li>
         <li>練馬区各図書館に設置の端末ではフィルターの関係上資料を直接閲覧することは出来ません。<br>
               ※ 館内 Wi-Fi を利用するか個人回線を介し閲覧を行って下さい。<br>
               <a href="https://www.city.nerima.tokyo.jp/kusei/koho/nerima_free_wi-fi/annai.html" target="_blank">⇒ 練馬区無料公衆無線LAN：Nerima Free Wi-Fi</a>
         </li>
         <li>IE11 に対応しています(Firefox 推奨)。<br>Android は 4.4 以降に対応。</li>
       </ul>
    </div>
  </Col>
</Row>


<br>

</div>


<style>


img {
   margin-top:56px;
}


.container{
   padding-top:12px;
}
   
 h5.title{
   line-height:0.6em;
   margin-left:8px;
   background-color:#fff;
   padding:20px 0px 6px 0px ;
   color:#4f83cc;
 }
 
.pa-2{

   height:100%;/*260px*/
   margin:6px;
   border:solid 1px #ccc;

}

 
   :global(.title-ex){
      padding: 16px 26px;
   }  

</style>
