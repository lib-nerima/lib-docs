<script>

	import File from './File.svelte';
	import { Folder,FileText } from '../material-icons/_index';

	export let expanded = false;
	export let name;
	export let files;
	export let path;

	function toggle() {
		expanded = !expanded;
	}

  import {
    Icon,
    List,
    Subheader,
    ListItemGroup,
    ListItem,
    Checkbox,
    Divider,
  } from 'svelte-materialify';

  let values = [];

</script>

<style>
	span {
		padding: 0 0 0 0.2em;
		background-size: 1em 1em;
		font-weight: 300;
		cursor: pointer;
		font-size: 1em;
	}

	ul {
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0 0  0.2em 0; 
	}
</style>

<Icon style="color:#8bc34a;">
   <Folder />
</Icon>
<span class:expanded on:click={toggle} 
      style="font-weight:400;font-size:1em;">{name}</span>

<br>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file} path="{path}/{name}" />
				{:else}
					<File {...file} path="{path}/{name}" />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

