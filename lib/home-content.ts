export interface ProblemFix {
  problem: string;
  fix: string;
}

export const PROBLEMS: ProblemFix[] = [
  {
    problem: "Bugs keep reaching production",
    fix: "I move checks earlier, into the pipeline, so problems are caught on the pull request instead of by your users.",
  },
  {
    problem: "Regression testing takes days",
    fix: "I automate the flows that matter most, in a framework your team can own and extend.",
  },
  {
    problem: "Nobody trusts the tests",
    fix: "Flaky tests get triaged, and failures come with screenshots and logs so they can be understood quickly.",
  },
  {
    problem: "AI features behave unpredictably",
    fix: "I build evaluation suites and adversarial checks so you have evidence, not guesses, when a model or prompt changes.",
  },
  {
    problem: "No clear view of release quality",
    fix: "An audit or a weekly QA report gives you a ranked list of risks and a plain readiness call.",
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
