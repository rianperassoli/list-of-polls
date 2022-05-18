<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";

	let tabs = ["Current Polls", "Add New Poll"];
	let activeTab = "Add New Poll";

	const handleTabChange = (event) => {
		activeTab = event.detail;
	};
</script>

<Header />
<main>
	<Tabs items={tabs} {activeTab} on:tabChange={handleTabChange} />

	{#if activeTab === "Current Polls"}
		<p>Current</p>
	{:else if activeTab === "Add New Poll"}
		<CreatePollForm />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
