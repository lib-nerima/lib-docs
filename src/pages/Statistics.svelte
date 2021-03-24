
<script>
	import * as Pancake from '@sveltejs/pancake'; 
	import { libraries, years } from '../../public/data/statistics-data.js';

	// MATERIAL-ICONSInfo, DoubleArrow
	import { DoubleArrow } from '../material-icons/_index';
	const _libraries = [
	   "光が丘","練馬","石神井","平和台","大 泉","関町","貫井",
		"稲荷山","小竹","南大泉","南大泉分室","春日町","南田中"
	   ];
	
	let x1 = +Infinity;
	let x2 = -Infinity
	let y1 = +Infinity;
	let y2 = -Infinity;

	libraries.forEach(library => {
		library.data.forEach(d => {
			if (d.x < x1) x1 = d.x;
			if (d.x > x2) x2 = d.x;
			if (d.y < y1) y1 = d.y;
			if (d.y > y2) y2 = d.y;
		});
	});

	let closest;
	let filter = '';

	$: regex = filter ? new RegExp(filter, 'i') : null;
	$: filtered = regex ? libraries.filter(library => regex.test(library.name)) : libraries;

	$: points = filtered.reduce((points, library) => {
		return points.concat(library.data.map(d => ({
			x: d.x,
			y: d.y,
			library
		})));
	}, []);

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
	
	function setData(n){
			filter = n;
	}

	let current = '';
   let value = 1;

</script>


<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />

<div class="container">

<div class="breadcrumb-title">
   <DoubleArrow color="#7da453" size="0.8em" /> 統計資料
</div>

<!--<h1 class="text-h6">oW:{oW}</h1>-->
<h4 class="{size}">館別蔵書冊数</h4>

<button
	class:active="{current === '全館'}"
	on:mouseover="{() => {current = '全館'; setData('')}}">
	全館
</button>


{#each _libraries as library}
	<button
		class:active="{current === library}"
		on:mouseover="{() => {current = library; setData(library)}}">
		{library}
	</button>
{/each}

<ul>
<li class="text-caption">グラフにマウスカーソルを当てると各年度の数値が表示されます。</li>
</ul>

<input type="hidden" bind:value={filter}>

<div class="statistics">

<div class="chart">
	<Pancake.Chart {x1} {x2} y1={y1} y2={y2}>

		<Pancake.Grid horizontal count={6} let:value>
			<div class="grid-line horizontal"><span>{value}</span></div>
		</Pancake.Grid>
		
		<Pancake.Grid vertical count={4} let:value>
			<span class="x-label" style="margin-left:40px;">{value}</span>
		</Pancake.Grid>

	<div class="chart-ex">

		<Pancake.Svg>
			{#each filtered as library}
				<Pancake.SvgLine data={library.data} let:d>
					<path class="data" {d}></path>
				</Pancake.SvgLine>
			{/each}


			{#if closest}
				<Pancake.SvgLine data={closest.library.data} let:d>
					<path class="highlight" {d}></path>
				</Pancake.SvgLine>
			{/if}
		</Pancake.Svg>

	

    <!-- LABEL -->
		{#if closest}

		<Pancake.Point x={closest.x} y={closest.y}>
	
				<span class="annotation-point"></span>
				

			<div class="annotation" style="transform: translate(-{100 * ((closest.x - x1) / (x2 - x1))}%,0)">
					<strong>{closest.library.name}</strong>
					<span>{closest.x}: {closest.y} 冊</span>
					<!--<span>{closest.x}: {closest.y} years</span>-->
				</div>
			</Pancake.Point>
		{/if}

		<Pancake.Quadtree data={points} bind:closest/>
      </div>
	</Pancake.Chart>
		
   </div>

   </div>

</div>


<style>
	
   .statistics{
	   overflow-x: auto;
   }

	button {
		border-radius:12%;
		background-color: #fff;
		border:solid 1px #ccc;
		margin: 4px;
		padding: 4px 8px;
	}

	.active {
		background-color: #448aff;
		color: white;
	}

	.chart {
		width:400px;
		height: 400px;
		padding: 3em 0 2em 2em;
		margin: 12px 0 36px 6px;
	}
	.chart-ex {
		margin-left:26px;
	}
	
	input {
		width:130px;
		color:green;
		font-size: 16pt/*inherit*/;
		font-family: inherit;
		border:solid 1px #ccc;
		background-color: rgba(255,255,255,0.9);

	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100% + 2em);
		left: -2em;
		border-bottom: 1px dashed #ccc;
		margin-left: 2.4em;
	}

	.grid-line span {
		position: absolute;
		left: 0;
		bottom: 2px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		margin-left: -3em;
	}

	.x-label {
		position: absolute;
		width: 4em;
		left: -2em;
		bottom: -22px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
	
	/* 線 */
	path.data {
		stroke: #4bacb8;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1px;
		fill: none;
	}

	/* 線 mouseover*/
	.highlight {
		stroke: #ff3e00;
		fill: none;
		stroke-width: 4;
	}

	.annotation {
		position: absolute;
		left:30px;
		white-space: nowrap;
		bottom: 1em;
		line-height: 1.2;
		background-color: rgba(255,255,255,0.9);
		padding: 0.2em 0.4em;
		border-radius: 2px;
		z-index:9999;
	}

	.annotation-point {
		position: absolute;
		left:26px;
		width: 10px;
		height: 10px;
		background-color: #ff3e00;
		border-radius: 50%;
		transform: translate(-50%,-50%);
	}

	.annotation strong {
		display: block;
		font-size: 20px;
	}

	.annotation span {
		display: block;
		font-size: 14px;
	}
</style>
