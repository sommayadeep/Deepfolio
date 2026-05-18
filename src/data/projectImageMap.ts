// Map GitHub repo name -> preview image path in /public.
// Every current and future work card uses the uploaded Sommayadeep portrait.
export const projectImageMap: Record<string, string> = {
  Deepfolio: "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "Ember-PLATE": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "Arthashastra-AI": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "CodeInsight-AI": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "turbofan-rul-prediction": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "MahendraChandra-sons": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  SugarShield: "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  Trilingo: "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  CertiTrust: "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "student-management-system": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
  "AlgoViz-DSA-Simulator": "/images/Screenshot%202026-05-18%20at%205.43.16%E2%80%AFPM.png",
};

// Map GitHub repo name -> preferred live URL.
// This overrides homepage/github-pages/repo fallback in Work.tsx.
export const projectLinkMap: Record<string, string> = {
  Deepfolio: "https://deepsfolio.vercel.app",
};
