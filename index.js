console.warn("👋 I'm Kenneth");
console.warn("I work as an engineering manager at Clark and I'm also a member of the Ember Learning Core Team");
console.warn("Feel free to reach out on Twitter https://twitter.com/kennethlarsen");

const resume = [
  {
    time: "June 2016 - May 2017",
    position: "Web developer",
    company: "Grammofy"
  },
  {
    time: "June 2017 - December 2017",
    position: "Frontend developer",
    company: "YouSee"
  },
  {
    time: "Jan 2018 - June 2019",
    position: "Team Lead & Frontend Lead",
    company: "Linkfire"
  },
  {
    time: "Since July 2019",
    position: "Engineering Manager",
    company: "Clark"
  }
];


console.warn("--------------------------");
console.warn("Resume:");
console.table(resume.reverse());

console.warn("--------------------------");
console.warn("Latest blog post:");
console.warn("How to Distribute a Rust Binary on NPM: https://www.kennethlarsen.org/rust-cli");
