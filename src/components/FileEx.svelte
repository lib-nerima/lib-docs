<script>
	export let name;
	export let path;

	$: type = name.slice(name.lastIndexOf('.') + 1);

</script>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
		font-size: 0.8em;
	}
</style>

<!--
<span style="background-image: url(tutorial/icons/{type}.svg)">
<span>{name}</span>
-->
<span>
   <a href="./data{path}/{name}" target="_blank" style="font-weight:400;font-size:1em;">
      {name}
   </a>
</span>

