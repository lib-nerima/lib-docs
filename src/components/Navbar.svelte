<script>
   export let pre;

   import DrawerNavList from './DrawerNavList.svelte';
   import {
       AppBar,
       Button,
       Icon,
       Menu,
       NavigationDrawer,
       Overlay,
       ListItem
   } from 'svelte-materialify';

   let active = false;
   function toggleNavigation() {
      active = !active;
   }

   // MATERIAL-ICONS
	import { AccountBalance, Cancel, ExpandMore, 
	         Help, Info, Home, MailOutline, MenuButton, MoreVert, 
	         PlayCircleFilled, Settings } from '../material-icons/_index';

</script>

  <AppBar fixed style="background-color:#002171;color:#fff;width:100%;">
    <div slot="icon">
      <Button fab depressed on:click={toggleNavigation}>
        <Icon><MenuButton /></Icon>
      </Button>
    </div>
       <span slot="title"> 
          <a href="#/home" 
             class="text-body-1"  
             style="color:#fff;caret-color:transparent;">
             {pre.title} 
          </a>
       </span>
    <div style="flex-grow:1" />
    <Menu right style="color:#000;">

      <div slot="activator">
         <Button fab depressed>
           <Icon><MoreVert /></Icon>
         </Button>
      </div>

      <div class="list-box">

         <div class="info-box">
           <h5 class="text-h6">
               <Icon><AccountBalance /></Icon> 
               {pre.title}
           </h5>
           <div class="text-body-2 gray-text">　　練馬区図書館関係資料を収集保管しています。</div>
            <br>
            
            <table>
               <tr>
                  <td nowrap>管理責任者：{pre.admin}</td>
               </tr>
               <tr>
                  <td>GitHub <a href="{pre.creator.url}" 
                                target="_blank">lib-nerima/lib-docs</a></td>
               </tr>
               <tr>
                  <td><Icon class="text-h6"><MailOutline/></Icon> {pre.mail}</td>
               </tr>
            </table>     
         </div>
         
         <br>
         <div class="text-center">制作：{pre.creator.name}</div>
         <br>

         
      </div>

   </Menu>
  </AppBar>

   <!-- Drawer -->
	<NavigationDrawer style="position:fixed;top:56px;background-color:#fff;" {active}>
		<DrawerNavList on:close="{() => toggleNavigation()}" />
	</NavigationDrawer>

  <Overlay {active} absolute on:click={toggleNavigation} index={1}
			  style="height:100%;margin-top:56px;" />

<style>

td{ padding: 4px; }
.info-box{ padding: 10px; }  
.list-box{
   width:350px;
   height:100%;
   background-color:#fff;
}  
a { text-decoration: none; }

</style>




