export interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
  bestFor: string;
  included: string[];
  /** Emoji fallback, used only if no line icon exists for the service id. */
  icon: string;
}

export const services: Service[] = [
  {
    id: "test-automation-framework",
    title: "Test Automation Framework Build",
    summary: "A maintainable framework designed around your stack and your team.",
    details:
      "I design and build test automation frameworks from scratch — page objects, API clients, configuration, reporting and parallel execution — in the language your team already works in, so your engineers can extend it without me.",
    bestFor: "Teams with manual-heavy or fragile automation who want a foundation they can own.",
    included: [
      "Architecture and tooling choices (Playwright, Selenium, Cypress, Appium, REST)",
      "Reusable base layers for web, API and mobile",
      "Reporting and parallel execution",
      "Documentation and team handoff",
    ],
    icon: "🛠️",
  },
  {
    id: "test-strategy-audit",
    title: "Test Strategy & Automation Audit",
    summary: "An outside review of how your team tests today.",
    details:
      "I review your current testing strategy, coverage, automation and release process, then hand back a prioritized, risk-ranked plan for closing the gaps.",
    bestFor: "Teams unsure where quality is breaking down, or preparing to scale testing.",
    included: ["Coverage and process audit", "Risk-ranked findings", "Actionable roadmap"],
    icon: "🔍",
  },
  {
    id: "cicd-test-pipeline",
    title: "CI/CD Test Pipeline Setup",
    summary: "Automated pipelines that run your tests on every change.",
    details:
      "I wire your test suites into CI/CD so they run on every change, gate merges and report results where your team already looks.",
    bestFor: "Teams whose tests exist but don't run reliably on every change.",
    included: [
      "Pipeline design",
      "CI/CD setup (GitHub Actions, Jenkins)",
      "Test-gate configuration",
      "Parallel runs for fast feedback",
    ],
    icon: "🔁",
  },
  {
    id: "ai-llm-testing",
    title: "AI & LLM Testing",
    summary: "Validate AI-powered features and the models behind them.",
    details:
      "I test the AI-driven parts of your product — prompts, agents, tool calls, retrieval — and build evaluation suites for your models: accuracy benchmarks, bias checks and drift monitoring, so quality holds as models change.",
    bestFor: "Teams shipping AI features who need evidence they work and keep working.",
    included: [
      "Prompt and agent test design",
      "Adversarial input testing",
      "Evaluation harness and benchmarks",
      "Bias and drift checks",
      "Regression harness setup",
    ],
    icon: "🤖",
  },
  {
    id: "embedded-consultant",
    title: "Embedded Consultant & Testing-as-a-Service",
    summary: "Ongoing QA expertise inside your team, on a flexible retainer.",
    details:
      "I join your sprints and pair with your engineers, or provide standing QA coverage on a monthly retainer — continuous test execution, triage and reporting — without the overhead of hiring in-house.",
    bestFor: "Teams that need senior QA capacity now without a full-time hire.",
    included: [
      "Embedded in your sprints",
      "Manual and automated test execution",
      "Ongoing triage and reporting",
      "Knowledge transfer to your team",
    ],
    icon: "🧑‍💻",
  },
];
