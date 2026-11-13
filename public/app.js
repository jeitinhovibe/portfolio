// Jeitinho Vibe — a little motion, a little nonsense.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* current year, so the footer never goes stale */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* scroll reveal */
  const revealables = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealables.forEach((el) => el.classList.add("in"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealables.forEach((el) => observer.observe(el));
  }

  /* the very serious idea machine */
  const ideas = [
    "A group chat where everyone is a dog.",
    "Uber, but for pastel de nata.",
    "An app that tells you which of your plants is judging you.",
    "Duolingo, but it only teaches you how to argue with airlines.",
    "A calendar that refuses to schedule anything before 10am.",
    "Airbnb for naps. You rent a stranger's couch for 25 minutes.",
    "A to-do list that silently deletes anything you've ignored for a week.",
    "Shazam for birds, but it only identifies pigeons and says \"pigeon.\"",
    "A budgeting app that rounds every purchase up to \"a house.\"",
    "LinkedIn, but every post has to be under 50 characters. It's called Shut Up.",
    "A weather app that only tells you what to wear, never the temperature.",
    "Tinder for leftover containers and their lids.",
    "A podcast that reads your group chat out loud in a posh accent.",
    "Google Maps, but it routes you past the best pastel de nata in town.",
    "A VPN for houseplants. Keeps the cat off the Wi-Fi.",
    "An alarm clock that only turns off when you do one push-up. It's called One Push-Up.",
  ];

  const button = document.getElementById("idea-btn");
  const output = document.getElementById("idea-output");
  const card = output ? output.closest(".idea-card") : null;
  let lastIdea = -1;

  if (button && output && card) {
    button.addEventListener("click", () => {
      let next = Math.floor(Math.random() * ideas.length);
      if (ideas.length > 1 && next === lastIdea) next = (next + 1) % ideas.length;
      lastIdea = next;
      output.textContent = ideas[next];
      card.classList.remove("is-swapping");
      void card.offsetWidth; // restart the animation
      card.classList.add("is-swapping");
    });
  }

  /* a tiny salute from the mascot */
  const logo = document.querySelector(".brand img");
  if (logo) {
    logo.addEventListener("click", () => {
      if (reduceMotion) return;
      logo.animate(
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: "rotate(-18deg) scale(1.12)" },
          { transform: "rotate(12deg) scale(1.05)" },
          { transform: "rotate(0deg) scale(1)" },
        ],
        { duration: 620, easing: "cubic-bezier(.2,1.6,.4,1)" },
      );
    });
  }
})();
