<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let tabs = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";
  const handleTabChange = (event) => {
    activeTab = event.detail;
  };

  const handleAdd = () => {
    activeTab = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs items={tabs} {activeTab} on:tabChange={handleTabChange} />

  {#if activeTab === "Current Polls"}
    <PollList />
  {:else if activeTab === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
