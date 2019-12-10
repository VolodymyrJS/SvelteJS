<script>
	export let name;
	export let age;

	function changeAge() {
		age = Math.floor(Math.random() * 10 + 30);
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}, my age is {age}!</h1>
<button on:click={changeAge}>Change Age</button>
