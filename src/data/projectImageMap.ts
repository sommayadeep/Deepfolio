// Map GitHub repo name -> image path in /public.
// Add entries here when you add a new project screenshot.
export const projectImageMap: Record<string, string> = {
  Deepfolio: "/portfolio.png",
  "Arthashastra-AI": "/arthashastra.png",
  "CodeInsight-AI": "/codeinsifht.png",
  "turbofan-rul-prediction": "/turbofan.png",
  "MahendraChandra-sons": "/mahendra.png",
  SugarShield: "/sugershield.png",
  Trilingo: "/Screenshot%202026-03-20%20at%203.51.30%E2%80%AFPM.png",
  CertiTrust: "/certitrust.png",
  "student-management-system": "/studentmanagementsystem.png",
  "AlgoViz-DSA-Simulator": "/algoviz.png",
};

// Map GitHub repo name -> preferred live URL.
// This overrides homepage/github-pages/repo fallback in Work.tsx.
export const projectLinkMap: Record<string, string> = {
  Deepfolio: "https://deepfolio.vercel.app/",
};
