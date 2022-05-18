import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1,
    question: "Python or Javascript?",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 10,
    votesB: 40,
  },
]);

export default PollStore 