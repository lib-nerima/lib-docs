
<script>

   import { Home } from '../material-icons/_index.js';
   import { Button, Icon } from 'svelte-materialify';

</script>

<style>

.main{
   text-align:center;
   padding-top:100px;
   margin:auto;
   height:500px;
}

.main h3{
   color:red;
   font-weight:300;
}


</style>

<div class="container">

   <div class="main">

		<h3>ERROR: 404 not found</h3>
			<p>ページは見つかりませんでした。</p>
			<p>準備中の可能性があります。	</p>
      <a href="#/home">
        <Button fab depressed style="background-color:#8e99f3;" title="Home へ戻る">
          <Icon style="color:#303f9f">
              <Home size="1.6em"/>
          </Icon>
        </Button>
      </a>
      
   </div>

</div>


