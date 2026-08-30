export interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
  included: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "software-testing",
    title: "Software Testing",
    summary: "Manual and automated testing across web, API, and mobile.",
    details:
      "We design and run functional, regression, and exploratory test suites tailored to your product, catching defects before your users do.",
    included: ["Test plan design", "Manual & automated execution", "Defect tracking & reporting"],
    icon: "🧪",
  },
  {
    id: "ai-capability-testing",
    title: "AI-Capability Testing",
    summary: "Validate AI-powered features against real-world usage.",
    details:
      "We test the AI-driven parts of your product — prompts, agents, tool calls, retrieval — for correctness, robustness, and graceful failure.",
    included: ["Prompt & agent test design", "Adversarial input testing", "Regression harness setup"],
    icon: "🤖",
  },
  {
    id: "ai-model-testing",
    title: "AI Model Testing",
    summary: "Evaluate model outputs for accuracy, bias, and drift.",
    details:
      "We build evaluation suites for your models — accuracy benchmarks, bias checks, and drift monitoring — so quality holds as models change.",
    included: ["Evaluation harness", "Bias & fairness checks", "Drift monitoring setup"],
    icon: "🧠",
  },
  {
    id: "test-consultants",
    title: "Test Consultants",
    summary: "Embedded QA experts who work inside your team.",
    details:
      "Our consultants join your sprints, pair with your engineers, and raise the bar on testing practice from the inside.",
    included: ["Embedded QA engineers", "Sprint-based engagement", "Knowledge transfer to your team"],
    icon: "🧑‍💻",
  },
  {
    id: "testing-solutions",
    title: "Testing Solutions",
    summary: "Custom tooling and frameworks built for your stack.",
    details:
      "When off-the-shelf tools don't fit, we build test frameworks and internal tooling designed around your architecture.",
    included: ["Custom framework design", "Tooling integration", "Documentation & handoff"],
    icon: "🛠️",
  },
  {
    id: "test-strategy-audits",
    title: "Test-Strategy Audits",
    summary: "An outside review of how your team tests today.",
    details:
      "We audit your current testing strategy, coverage, and process, and hand back a prioritized plan to close the gaps.",
    included: ["Coverage & process audit", "Risk-ranked findings", "Actionable roadmap"],
    icon: "🔍",
  },
  {
    id: "cicd-pipeline-setup",
    title: "CI/CD Pipeline Setup",
    summary: "Automated pipelines that run your tests on every change.",
    details:
      "We design and stand up CI/CD pipelines that run your test suite automatically, gate merges, and ship with confidence.",
    included: ["Pipeline design", "CI/CD tool setup", "Test-gate configuration"],
    icon: "🔁",
  },
  {
    id: "testing-as-a-service",
    title: "Testing-as-a-Service",
    summary: "Ongoing QA coverage, billed as a flexible retainer.",
    details:
      "A standing QA team on retainer — continuous test execution, triage, and reporting — without the overhead of hiring in-house.",
    included: ["Continuous test execution", "Ongoing triage & reporting", "Flexible monthly retainer"],
    icon: "♾️",
  },
];
