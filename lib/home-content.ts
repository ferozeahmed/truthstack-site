export interface Point {
  title: string;
  text: string;
}

export interface ProblemFix {
  problem: string;
  lead: string;
  points: Point[];
}

export const PROBLEMS: ProblemFix[] = [
  {
    problem: "Bugs keep reaching production",
    lead: "I move testing earlier and put each check at the layer where it is cheapest and fastest to run.",
    points: [
      { title: "Right test, right layer", text: "A test pyramid: many fast unit and API tests, and a small set of focused UI flows." },
      { title: "Better coverage where it matters", text: "Coverage gaps mapped to business risk, so effort goes where a failure would hurt most." },
      { title: "Shift left", text: "Requirements and acceptance criteria reviewed for testability before code is written." },
      { title: "Checks on every pull request", text: "Lint, type checks and tests run before code merges, not after release." },
      { title: "Integration problems found early", text: "API and contract tests catch breakage between services before it reaches users." },
      { title: "Reliable test data and environments", text: "Stable setup, so a failing test points to a real bug and not to noise." },
      { title: "Learn from every escaped bug", text: "Root-cause review of defects, and a new test added to stop the same bug returning." },
    ],
  },
  {
    problem: "Regression testing takes days",
    lead: "I automate the repeat work and build it into delivery, so checks run on every change instead of by hand.",
    points: [
      { title: "Automation your team can own", text: "A maintainable framework covering your highest-value regression flows." },
      { title: "A CI/CD pipeline built for speed", text: "Staged runs, parallel jobs and caching, so developers get fast feedback." },
      { title: "The right suite at the right time", text: "Smoke tests on every pull request, fuller regression on merge or overnight." },
      { title: "AI across the development lifecycle", text: "AI-assisted drafting of test cases and test data, failure summaries and test maintenance, with human review." },
      { title: "More of the lifecycle automated", text: "Build, test, report and release gates connected, with fewer manual hand-offs." },
    ],
  },
  {
    problem: "Nobody trusts the tests",
    lead: "I make results visible and measurable, so you can see which tests earn their place.",
    points: [
      { title: "Every run captured automatically", text: "Results from all pipelines stored in one place, with history." },
      { title: "An automation health dashboard", text: "Pass rate, run time, flaky tests and failure trends at a glance." },
      { title: "Stability indicators", text: "Tell real defects apart from flaky tests and environment problems." },
      { title: "Flaky-test triage", text: "Unreliable tests identified, quarantined and fixed, so a red build means something." },
      { title: "Evidence on every failure", text: "Screenshots, logs and traces attached, so failures can be diagnosed quickly." },
      { title: "Proof the tests are useful", text: "Track the defects automation catches, so you can show its value to the business." },
    ],
  },
  {
    problem: "AI features behave unpredictably",
    lead: "I test AI the way it fails: with datasets, scoring, adversarial inputs and monitoring, not only a few manual prompts.",
    points: [
      { title: "Golden datasets", text: "Representative prompts with expected behaviour, grown from real usage." },
      { title: "Rubric-based scoring", text: "Automated scoring, including model-as-judge where reliable, calibrated with human review." },
      { title: "Adversarial and red-team testing", text: "Prompt injection, jailbreak attempts and data-leak probes." },
      { title: "Grounding and hallucination checks", text: "For retrieval-based features, answers must be supported by the retrieved sources." },
      { title: "Agent and tool-call verification", text: "Check that the right tool is called with the right arguments, and that failures are handled." },
      { title: "Consistency testing", text: "Repeat runs and measure variation, so non-determinism stays within agreed limits." },
      { title: "Safety, bias and privacy checks", text: "Sensitive topics, fairness across user groups and personal-data handling." },
      { title: "Regression across model and prompt changes", text: "Compare scores to a baseline before a new model or prompt ships." },
      { title: "Drift monitoring in production", text: "Track quality, latency and cost over time and alert when they move." },
    ],
  },
  {
    problem: "No clear view of release quality",
    lead: "I build a quality dashboard that your engineers and managers can both read at a glance.",
    points: [
      { title: "Release readiness view", text: "A green, amber or red call for each release, with the reason shown." },
      { title: "Quality metrics over time", text: "Test results, defect trends, automation coverage, flaky rate and escaped defects." },
      { title: "Risk by area", text: "See which parts of the product have weak coverage or rising defects." },
      { title: "Quality gates in the pipeline", text: "Agreed thresholds that stop a release when quality drops." },
      { title: "One source of truth", text: "Test results, defects and pipeline data brought together in one view." },
      { title: "Regular quality reports", text: "A short weekly or per-release summary for stakeholders." },
    ],
  },
];

export interface ProcessStep {
  title: string;
  text: string;
}

export const PROCESS: ProcessStep[] = [
  {
    title: "Intro call",
    text: "You tell me about your product, team and release process. I tell you honestly whether I can help.",
  },
  {
    title: "Scope",
    text: "We agree what will be delivered, how long it takes and how we will work together.",
  },
  {
    title: "Deliver",
    text: "I build, audit or embed, with regular updates and work committed to your repository.",
  },
  {
    title: "Hand off",
    text: "Documentation and a walkthrough so your team keeps the benefit without depending on me.",
  },
];

/** Excerpt of the real PULSE CI workflow (.github/workflows/ci.yml). */
export const CI_EXCERPT = `strategy:
  matrix:
    python-version: ["3.10", "3.11", "3.12"]
steps:
  - uses: actions/checkout@v4
  - name: Install dependencies
    run: uv sync --all-extras
  - name: Lint
    run: uv run ruff check .
  - name: Type check
    run: uv run mypy src/pulse_tf
  - name: Test
    run: |
      uv run pytest tests/
      uv run pytest examples/
  - name: Build package
    run: uv build`;

export const PULSE_REPO = "https://github.com/ferozeahmed/PULSE";

/** Verified against the PULSE source and CI; see /work/pulse. */
export const PULSE_HIGHLIGHTS: Point[] = [
  {
    title: "Web and API in one core",
    text: "A base page, a base API client and a client factory, delivered as a pytest plugin so fixtures are available once it is installed.",
  },
  {
    title: "Reports that read like a script",
    text: "Every page action is recorded as a step in Allure reports, with a screenshot captured when a web test fails.",
  },
  {
    title: "Built to be extended",
    text: "Install only the extras you need, configure through environment variables, and extend the base classes with your own pages and clients.",
  },
  {
    title: "Held to its own standard",
    text: "Linting, strict type checks and tests on Python 3.10 to 3.12 in CI. It has also been audited in public, gaps included.",
  },
];
