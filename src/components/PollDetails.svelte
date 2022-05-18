<script>
  import { createEventDispatcher } from "svelte";
  import Card from "../shared/Card.svelte";
  export let poll;

  const dispatch = createEventDispatcher();

  $: totalVotes = poll.votesA + poll.votesB;

  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>

    <p>Total votes: {totalVotes}</p>

    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>

    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-b" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin: 6px 0 30px 0;
    font-size: 14px;
    color: #aaa;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }

  .poll {
  }

  .answer {
    background: #fafafa;
    margin: 10px auto;
    position: relative;
    cursor: pointer;
  }
  .answer:hover {
    opacity: 0.6;
  }

  .percent {
  }
  .percent.percent-a {
  }
  .percent.percent-b {
  }
</style>
