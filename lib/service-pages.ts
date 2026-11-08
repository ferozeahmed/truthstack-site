export type DiagramKey = "framework" | "pipeline";

export interface ServicePage {
  /** Matches a `Service.id` in lib/services-data.ts. */
  id: string;
  headline: string;
  problem: string;
  diagram: DiagramKey;
  diagramCaption: string;
  steps: { title: string; text: string }[];
  example: {
    label: string;
    title: string;
    summary: string;
    href: string;
    cta: string;
  };
  deliverables: string[];
  notes?: string;
}

export const servicePages: ServicePage[] = [
  {
    id: "test-automation-framework",
    headline: "A test framework your team can own, not one that depends on me.",
    problem:
      "Most automation suites start as a pile of scripts. Selectors are copied between tests, configuration is hard-coded, and one UI change breaks dozens of tests. The framework is built in layers so that change stays in one place.",
    diagram: "framework",
    diagramCaption:
      "Layered framework architecture. Tests only talk to the product layer; the product layer only talks to the reusable core.",
    steps: [
      {
        title: "Discover",
        text: "I map your stack, your release flow and the flows that matter most, then choose tools and language to fit your team.",
      },
      {
        title: "Build the core",
        text: "Base page, base API client, configuration, reporting and fixtures: the reusable layer every test relies on.",
      },
      {
        title: "Model your product",
        text: "Page objects, API clients and test data for your application, plus the first real smoke and regression tests.",
      },
      {
        title: "Wire into CI",
        text: "Parallel runs, reports and failure artifacts on every pull request.",
      },
      {
        title: "Hand off",
        text: "Documentation, a walkthrough and pairing sessions so your engineers extend it without me.",
      },
    ],
    example: {
      label: "Reference project · self-initiated",
      title: "PULSE: a Python test framework I built to show this approach",
      summary:
        "Not a client engagement. PULSE is my own open framework, built around the same layers shown above, with its design decisions and trade-offs written up.",
      href: "/work/pulse",
      cta: "Read the PULSE case study",
    },
    deliverables: [
      "Working framework in your repository, with CI configured",
      "Starter smoke and regression suites for your key flows",
      "Written architecture notes and contribution guide",
      "Handoff walkthrough for your team",
    ],
  },
  {
    id: "cicd-test-pipeline",
    headline: "Fast feedback on every pull request, with failures you can read.",
    problem:
      "Tests that only run on someone's laptop do not protect a release. A good pipeline runs the right checks at the right time, stays fast enough that people do not skip it, and explains failures clearly.",
    diagram: "pipeline",
    diagramCaption:
      "Typical staged pipeline. Quick checks run first so developers get an answer in minutes; slower suites run later or on a schedule.",
    steps: [
      {
        title: "Assess",
        text: "I review your current pipeline, test runtimes and flaky tests to find where time and trust are being lost.",
      },
      {
        title: "Design the stages",
        text: "Decide what runs on every pull request, what runs on merge and what runs nightly, based on risk and speed.",
      },
      {
        title: "Implement",
        text: "Pipeline configuration for your CI system (GitHub Actions, GitLab CI, Jenkins or similar) with caching and parallel jobs.",
      },
      {
        title: "Make failures readable",
        text: "Reports, screenshots and logs attached to each run so a failure can be diagnosed without re-running locally.",
      },
      {
        title: "Gate and monitor",
        text: "Quality gates on merges and a simple view of pass rate and runtime over time.",
      },
    ],
    example: {
      label: "Reference project · self-initiated",
      title: "PULSE's own CI pipeline",
      summary:
        "PULSE runs lint, strict type checks and its tests across Python 3.10, 3.11 and 3.12, and builds the package, on every pull request. The case study explains the choices behind it.",
      href: "/work/pulse",
      cta: "See how PULSE's CI is set up",
    },
    deliverables: [
      "Pipeline configuration committed to your repository",
      "Stage design document: what runs when, and why",
      "Report and artifact setup for readable failures",
      "Short runbook for your team",
    ],
    notes:
      "Tooling is chosen to match what you already use. I do not require a particular CI vendor.",
  },
];

export function getServicePage(id: string): ServicePage | undefined {
  return servicePages.find((p) => p.id === id);
}
