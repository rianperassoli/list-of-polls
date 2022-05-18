<script>
  import { createEventDispatcher } from "svelte";
  import Card from "../shared/Card.svelte";
  export let poll;

  const dispatch = createEventDispatcher();

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<Card>
  <div>
    <h3>{poll.question}</h3>

    <p>Total votes: {totalVotes}</p>

    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-a" style="width: {percentA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>

    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%" />
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
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent.percent-a {
    border-left: 4px solid #d91b42;
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent.percent-b {
    border-left: 4px solid #45c496;
    background-color: rgba(69, 196, 150, 0.2);
  }
</style>
