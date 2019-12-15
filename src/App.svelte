<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "";
  let image = "";
	let description = "";
	let checkStatus = false;
	
	function addCard() {
		if(name.trim() == "" || title.trim() == "" || description.trim() == "" || image.trim() == "") {
			checkStatus = "!checked";
			return;
		} else {
			checkStatus = 'checked';
		}
		
	}

</script>

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>
{#if checkStatus == 'checked'}
	<ContactCard userName={name} jobTitle={title} {description} userImage={image} />
{:else if checkStatus == '!checked'}
  <p>You don't fill all fields</p>
{:else}
	<p>Plese fill the fields.</p>
{/if}
<button on:click={addCard}>Add a card.</button>

