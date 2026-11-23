// Mr Davies' Classroom — runtime configuration.
// Edit this file and re-upload it to change the classroom without rebuilding the app.
window.__CLASSROOM_CONFIG__ = {
  // WebSocket signalling server (Render). Change here, not in the code.
  signalingServer: "wss://signaling-server.onrender.com",

  // Classroom resources shown in the Resources panel (press R).
  resources: [
    {
      category: "English G8-1 — Games",
      items: [
        { title: "All G8 games index", url: "https://gregdavies91.github.io/g8-games/" },
        { title: "Present Perfect board game", url: "https://gregdavies91.github.io/g8-games/boardgame-present-perfect.html" },
        { title: "Escape the Boring Lesson (V1)", url: "https://gregdavies91.github.io/g8-games/revision-game.html" },
        { title: "Escape the Boring Lesson (V2)", url: "https://gregdavies91.github.io/g8-games/revision-game-v2.html" },
        { title: "The Duel — head to head", url: "https://gregdavies91.github.io/g8-games/head-to-head-v2.html" },
        { title: "Week 3 Vocabulary Gauntlet", url: "https://gregdavies91.github.io/g8-games/gauntlet-week3.html" }
      ]
    },
    {
      category: "IELTS G11-2",
      items: [
        { title: "Vegetarianism & Healthy Eating flashcards", url: "https://gregdavies91.github.io/veggie.html" }
      ]
    }
  ]
};
