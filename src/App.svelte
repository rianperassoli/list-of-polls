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

  let polls = [
    {
      id: 1,
      question: "Python or Javascript?",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 10,
      votesB: 40,
    },
  ];
  const handleAdd = (event) => {
    const poll = event.detail;
    polls = [poll, ...polls];
    activeTab = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs items={tabs} {activeTab} on:tabChange={handleTabChange} />

  {#if activeTab === "Current Polls"}
    <PollList {polls} />
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
