<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Vladimir";
  let title = "";
  let image = "";
	let description = "";
  let checkStatus = false;
  let contactCards = [];
	
	function addCard() {
    if(name.trim() == "" ||
      title.trim() == "" ||
      description.trim() == "" || 
      image.trim() == "") {
			checkStatus = "!checked";
			return;
		} else {
      checkStatus = 'checked';
      contactCards = [
        ...contactCards,
        {
          id: Math.random(),
          name: name,
          title: title,
          image: image,
          desc: description
        }
      ];
    }
    
    console.log(contactCards);
		
  }

  function deleteFirstElement() {
    contactCards = contactCards.filter((element, index) => index !== 0);
  }

  function deleteLastElement() {
    contactCards = contactCards.filter((element, index) => index !== contactCards.length - 1);
    console.log(contactCards.length - 1);
  }

  $: name = name;
  
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
{#if checkStatus == '!checked'}
  <p>You don't fill all fields</p>
{:else if checkStatus == '!checked'}
  <p>You don't fill all fields</p>
{/if}
<button on:click={addCard}>Add a card.</button>
<button on:click={deleteFirstElement}>Delete first element.</button>
<button on:click={deleteLastElement}>Delete last element.</button>

{#each contactCards as contact, index (contact.id)}
<h4># {index + 1}</h4>
  <ContactCard
  userName={contact.name}
  jobTitle={contact.title}
  userImage={contact.image}
  description={contact.desc}/>
{:else}
  <h5>Plese start adding the card.</h5>
{/each}



