<script>

	import { Folder,FileText, Launch } from '../material-icons/_index';
  import { Icon } from 'svelte-materialify';

	export let name;
	// export let year;
	export let path;

	$: type = name.slice(name.lastIndexOf('.') + 1);
	
</script>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}

	.file {
		border: 1px solid #fff;
		border-right-color: #eee;
		border-bottom-color: #eee;
		border-radius: 0 0 10px 0;
      width:100%;
      margin:0;
      padding:0;
	}

	a { text-decoration: none;	}
</style>

<span>

{#if type === "folder"}
   <Folder color="green" />&nbsp;{name}
{:else}

<div class="file">
   <Icon style="padding-top:6px; color:#8bc34a;">
      <FileText size="1em" />
   </Icon>   
   
   <a href="./data{path}/{name}" 
      target="_blank" style="font-weight:400;font-size:1em;">
      {name}
   </a>
</div>

<!--<FileText color="#64dd17" /><a href="./data{path}/{name}" target="_blank"><span style="font-size:1em;">{name}</span></a>-->

<!--   <FileText color="#64dd17" size="1.2em" /><a href="./data{path}/{name}" target="_blank"><span style="font-size:1em;">{name}</span></a>-->

{/if}

</span>
