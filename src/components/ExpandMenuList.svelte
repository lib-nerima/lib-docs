<script>

   import { List, ListGroup, ListItem, Icon } from 'svelte-materialify';

   // MATERIAL-ICONS
	import { ArrowUpward, Folder } from '../material-icons/_index';

   export let lists;
   let active = false;

</script>


<div class="d-flex justify-center">

  <List class="elevation-2" style="width:300px">

      {#each lists as {name,links}, i}
<!--          <ListItem>
            <span slot="prepend">
              <Icon><Folder /></Icon>
            </span>
            {name}
          </ListItem>
          -->

          <ListGroup bind:active offset={72}>
<!--            <span slot="prepend">
              <Icon><Folder /></Icon>
            </span>-->
            <span slot="activator"> {name} </span>
            <span slot="append">
              <Icon rotate={active ? 0 : 180}><ArrowUpward /></Icon>
            </span>

            {#each links as {name}, i}

               <ListItem>{name}</ListItem>

            {/each}
            
          </ListGroup>

      {/each}

  </List>
</div>


<!--
<div class="d-flex justify-center">

  <List class="elevation-2" style="width:300px">

    <ListItem>
      <span slot="prepend">
        <Icon><Folder /></Icon>
      </span>
      Home
    </ListItem>

    <ListGroup bind:active offset={72}>
      <span slot="prepend">
        <Icon><Folder /></Icon>
      </span>
      <span slot="activator"> Actions </span>
      <span slot="append">
        <Icon rotate={active ? 0 : 180}><ArrowUpward /></Icon>
      </span>

   {#each items as {name}, i}

      <ListItem>{name}</ListItem>

   {/each}
     
      
    </ListGroup>


  </List>
</div>

-->

