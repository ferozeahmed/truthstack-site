export interface CaseStudy {
  slug: string;
  title: string;
  label: string;
  summary: string;
  repo: string;
  problem: string;
  approach: string[];
  inside: { title: string; text: string }[];
  tradeoffs: { title: string; text: string }[];
  snippets: { title: string; language: string; code: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "pulse",
    title: "PULSE: a layered Python test framework",
    label: "Reference project · self-initiated",
    summary:
      "A pytest plugin for web and API testing that I built to demonstrate how I structure a framework. It is my own project, not a client engagement, so there are no client results here, only the design and what is verifiably in the code.",
    repo: "https://github.com/ferozeahmed/PULSE",
    problem:
      "Teams often rebuild the same plumbing in every project: browser setup, HTTP clients, configuration, reporting and logging. I wanted one small, tested core that a project extends with its own page objects and API clients.",
    approach: [
      "Ship the reusable layer as a pytest plugin, so fixtures are available automatically once it is installed.",
      "Keep the core small: a base page, a base API client, a client factory, settings and reporting helpers.",
      "Make optional pieces optional. Web, API and Allure support are install extras, not hard dependencies.",
      "Hold the project itself to the standard I would ask of a client: linting, strict typing, a CI matrix and its own tests.",
    ],
    inside: [
      {
        title: "Base page",
        text: "Navigate, click, fill, read text, visibility, waits and screenshots. Each action is wrapped in an Allure step so reports read like a script.",
      },
      {
        title: "Base API client",
        text: "GET, POST, PUT, PATCH and DELETE. It logs requests with sensitive headers and body keys redacted, attaches response bodies to the report, and raises a typed error carrying the status code and body.",
      },
      {
        title: "Client factory",
        text: "Register API clients by name and create them on demand, so tests do not construct clients by hand.",
      },
      {
        title: "Settings",
        text: "Environment-driven configuration with the PULSE_ prefix and .env support. Base URL, API base URLs and headless mode are wired in today.",
      },
      {
        title: "Failure evidence",
        text: "A best-effort screenshot is captured when a web test fails, and pytest-xdist is supported for parallel runs.",
      },
      {
        title: "Quality gates",
        text: "36 test functions across the test suite and examples, ruff linting, strict mypy on the package, and a CI matrix on Python 3.10, 3.11 and 3.12 plus a package build.",
      },
    ],
    tradeoffs: [
      {
        title: "One configuration per pytest process",
        text: "Settings are session-scoped, so the project's own tests and examples run as separate pytest invocations in CI. That keeps each run's configuration unambiguous, at the cost of two commands instead of one.",
      },
      {
        title: "Some settings are reserved, not wired",
        text: "Fields such as environment, browser, timeout, results directory and log level exist in the settings model but are not yet used by the framework. I list them as reserved rather than claim they work.",
      },
      {
        title: "Small core by design",
        text: "PULSE does not try to cover every tool. Mobile and other drivers would be added as extras when a project needs them.",
      },
    ],
    snippets: [
      {
        title: "Install (from the PULSE README)",
        language: "bash",
        code: "uv add \"pulse-tf[all]\"   # web + api + allure + xdist\nuv add \"pulse-tf[api]\"   # api only",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
