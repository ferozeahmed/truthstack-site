export type Severity = "High" | "Medium" | "Low";
export type Effort = "S" | "M" | "L";

export interface Finding {
  id: number;
  title: string;
  area: string;
  severity: Severity;
  effort: Effort;
  evidence: string;
  why: string;
  fix: string;
}

export const AUDIT_META = {
  slug: "pulse-audit",
  title: "Sample audit: reviewing my own PULSE framework",
  label: "Reference project · self-initiated audit of my own repo",
  repo: "https://github.com/ferozeahmed/PULSE",
  commit: "3be3248",
  summary:
    "I ran my audit method on PULSE, the test framework I built, so you can see what an audit report looks like. Every finding below is real and traceable to the code. The repo is at version 0.1.0, so these are a to-do list for a young project, not a verdict.",
  reviewed:
    "Source under src/pulse_tf, the unit tests and examples, pyproject.toml, the CI workflow and the README, at commit 3be3248. This was a static review. I also ran the redaction function directly to confirm findings 1 and 2. I did not run the full test suite or do any performance testing.",
};

export const STRENGTHS: string[] = [
  "Strict mypy on the package, ruff linting, and a CI matrix on Python 3.10, 3.11 and 3.12 plus a package build.",
  "Optional features (web, API, reporting) are install extras with guarded imports, so users only pull what they use.",
  "Fixture registration order is handled deliberately and explained in the code, instead of relying on plugin scan order.",
  "Settings avoid overriding pytest-playwright's own options unless a value was explicitly configured.",
  "The failure-screenshot hook is best effort, so a broken screenshot cannot hide the real test failure.",
  "Unfinished settings are labelled as reserved in the code and README rather than presented as working.",
];

export const FINDINGS: Finding[] = [
  {
    id: 1,
    title: "Redaction misses common secret names",
    area: "Security and logging",
    severity: "High",
    effort: "S",
    evidence:
      "src/pulse_tf/logging/logger.py matches keys exactly against a fixed set (authorization, password, token, api_key, secret). Running redact() left X-API-Key, access_token, client_secret and Cookie in clear text.",
    why: "Real APIs use many header and field names for credentials. Anything not on the list ends up in logs and Allure reports, which are often shared.",
    fix: "Match by pattern (for example any key containing token, secret, key, cookie or auth) and let projects add their own names.",
  },
  {
    id: 2,
    title: "Nested request values and response bodies are not redacted",
    area: "Security and logging",
    severity: "High",
    effort: "M",
    evidence:
      "In src/pulse_tf/api/base_client.py the request body is converted to strings before redaction, so a nested value such as {'creds': {'password': ...}} is logged with the password visible. Response bodies are attached to the report in full.",
    why: "Login and token endpoints return credentials in their responses, and nested JSON is normal for request bodies.",
    fix: "Redact recursively on the original structure, and apply the same rules to response bodies before attaching them.",
  },
  {
    id: 3,
    title: "HTTP clients are never closed",
    area: "Reliability",
    severity: "Medium",
    effort: "S",
    evidence:
      "BaseAPIClient creates an httpx.Client with no close method, and the api_factory fixture in src/pulse_tf/api/factory.py returns without a teardown. No timeout is exposed either, because the default_timeout setting is reserved.",
    why: "Open connection pools can leak across a long session, and tests cannot tune timeouts for slow services.",
    fix: "Make the fixture yield, close every created client at the end, and accept a timeout when creating a client.",
  },
  {
    id: 4,
    title: "Factory returns the base type and cannot pass auth or headers",
    area: "Extensibility",
    severity: "Medium",
    effort: "M",
    evidence:
      "APIClientFactory.create() is typed as returning BaseAPIClient and builds clients with only a base URL. The shipped example calls client.get_user() on that value. CI type-checks only src/pulse_tf, so examples are not checked.",
    why: "Users get type errors or must cast, and cannot give a client credentials or default headers without bypassing the factory.",
    fix: "Make create() generic so it returns the registered subclass, add a hook for headers or auth, and include examples in the mypy run.",
  },
  {
    id: 5,
    title: "Framework logs do not reach pytest's log capture",
    area: "Observability",
    severity: "Medium",
    effort: "M",
    evidence:
      "get_logger() sets propagate to False. tests/test_logging.py needs a collection-time workaround so caplog can capture records.",
    why: "Teams that configure logging in pytest will not see PULSE log lines in their normal output, and every user may need the same workaround.",
    fix: "Let records propagate and leave handler setup to the consumer, or provide an opt-in handler.",
  },
  {
    id: 6,
    title: "CI is slower and less reproducible than it needs to be",
    area: "CI/CD",
    severity: "Medium",
    effort: "S",
    evidence:
      ".github/workflows/ci.yml does not enable dependency caching, installs Playwright browsers in each of the three matrix jobs, runs uv sync without --locked, and sets no concurrency group or job timeout. There is no coverage report and no upload of test reports.",
    why: "Slow runs discourage people from waiting for CI, and an unlocked sync can change versions between runs.",
    fix: "Enable the uv cache, use --locked, cancel superseded runs, add a timeout, and upload reports as artifacts. Consider browser tests on one Python version only.",
  },
  {
    id: 7,
    title: "Reserved settings are accepted but silently ignored",
    area: "Configuration",
    severity: "Medium",
    effort: "M",
    evidence:
      "PulseSettings in src/pulse_tf/config/settings.py defines environment, browser, default_timeout, allure_results_dir and log_level. A comment marks them reserved, but nothing in the framework reads them.",
    why: "Setting PULSE_BROWSER=firefox appears to work and does nothing, which wastes debugging time.",
    fix: "Wire each setting to its behaviour, or warn when a reserved one is set to a non-default value.",
  },
  {
    id: 8,
    title: "Failure screenshots cover a narrow case and hide their own errors",
    area: "Reporting",
    severity: "Low",
    effort: "S",
    evidence:
      "The hook in src/pulse_tf/plugin.py only looks for a fixture named page during the call phase, swallows every exception without a log line, and still takes the screenshot when Allure is not installed, where it is then discarded.",
    why: "Tests using other fixtures, or failing during setup, get no evidence, and a missing screenshot gives no clue why.",
    fix: "Log the reason at debug level, skip the capture when no reporter is present, and cover browser context fixtures.",
  },
  {
    id: 9,
    title: "Project metadata and repository tidiness",
    area: "Packaging",
    severity: "Low",
    effort: "S",
    evidence:
      "pyproject.toml has no authors, project URLs or classifiers. A design document for an unrelated website sits in docs/superpowers/specs of the framework repo. BasePage stores settings but never uses them.",
    why: "Package indexes and visitors rely on metadata, and stray files make the repo harder to understand.",
    fix: "Fill in the metadata, move or remove the unrelated document, and either use or drop the unused settings argument.",
  },
  {
    id: 10,
    title: "BasePage accepts only raw selector strings",
    area: "Design",
    severity: "Low",
    effort: "M",
    evidence:
      "Every BasePage method takes a string and calls page.locator(). The methods is_visible and screenshot are also the only ones without an Allure step, unlike the other actions.",
    why: "Role-based and test-id locators are generally more resilient to UI change, and the API does not encourage them. This one is a design suggestion, not a defect.",
    fix: "Accept Playwright locators as well as strings, and show a role-based example in the README.",
  },
];

export interface RoadmapStage {
  title: string;
  note: string;
  ids: number[];
}

export const ROADMAP: RoadmapStage[] = [
  { title: "Fix first", note: "Security-relevant and quick", ids: [1, 2, 3, 6] },
  { title: "Plan next", note: "Bigger changes that improve daily use", ids: [4, 5, 7] },
  { title: "Tidy when passing", note: "Low risk, do alongside other work", ids: [8, 9, 10] },
];

export function findingById(id: number): Finding | undefined {
  return FINDINGS.find((f) => f.id === id);
}
