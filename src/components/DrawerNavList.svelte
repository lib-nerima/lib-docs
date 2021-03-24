<script>

	import { pageNum } from './stores.js';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { List, ListGroup, ListItem, Icon } from 'svelte-materialify';
	import { Article, Cancel, ExpandLess, FileText, Folder, Help, Home, Info, MoreVert, 
					 PlayCircleFilled, Settings, Share } from '../material-icons/_index';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
   
	let menus = [
      {item:"図書館関係資料", ref:"materials", icon:"folder", color:"#0288d1"},
      {item:"統計資料", ref:"statistics", icon:"folder", color:"#0288d1"},
      {item:"LINKS", ref:"links",     icon:"share", color:"#0288d1"}
	];
 
</script>

<style>
   a{
      text-decoration:none;
   }
</style>

<div class="d-flex justify-center">

  <List class="elevation-2" style="width:300px;">

   <a href="#/home">
    <ListItem on:click="{close}"
              style="height:0.6em;">
        <Icon>
           <Home />
        </Icon>
      Home
    </ListItem>
   </a>

   {#each menus as {item,ref,icon,color}}
      <a href="#/{ref}">

         <ListItem on:click="{close}" style="height:0.6em;">
              <!--  <span slot="prepend">-->
              <Icon style="color:{color};padding-bottom:6px;">

                  {#if icon==="info"}
                      <Info />
                  {/if}
                  {#if icon==="article"}
                      <Article />
                  {/if}
                  {#if icon==="folder"}
                      <Folder />
                  {/if}
                  {#if icon==="setting"}
                      <Settings />
                  {/if}
                  {#if icon==="share"}
                      <Share />
                  {/if}
                  {#if icon==="help"}
                      <Help />
                  {/if}
                  {#if icon==="docs"}
                      <Home />
                  {/if}
                  {#if icon==="about-law"}
                      <ExpandLess />
                  {/if}

              </Icon>

            {item}
         
         </ListItem>

      </a>
   {/each}


   {#each user_pages as { subject, icon, color }, i}
      <a href="#/infomations">
        <ListItem on:click="{close}"
                  on:click="{()=>$pageNum=(i+1)}"
                  style="height:0.6em;">
           <Icon style="padding-bottom:6px;color:{color};">

                  {#if icon==="info"}
                      <Info />
                  {/if}
                  {#if icon==="article"}
                      <Article />
                  {/if}
                  {#if icon==="folder"}
                      <Folder />
                  {/if}
                  {#if icon==="setting"}
                      <Settings />
                  {/if}
                  {#if icon==="share"}
                      <Share />
                  {/if}
                  {#if icon==="help"}
                      <Help />
                  {/if}
                  {#if icon==="docs"}
                      <Home />
                  {/if}
                  {#if icon==="about-law"}
                      <ExpandLess />
                  {/if}

           </Icon>
            {subject}
        
        </ListItem>
      </a>
   {/each}

  </List>
</div>
