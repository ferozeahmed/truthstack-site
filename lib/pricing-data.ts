export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  included: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    id: "project-based",
    title: "Project-based",
    description: "A fixed-scope engagement to test a release, audit a system, or stand up a pipeline.",
    included: ["Scoped deliverables & timeline", "Dedicated QA engineer(s)", "Final report & handoff"],
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Our engineers embed in your team and sprints for as long as you need them.",
    included: ["Embedded QA engineer(s)", "Works inside your existing sprints", "Month-to-month flexibility"],
  },
  {
    id: "testing-as-a-service",
    title: "Testing-as-a-Service Retainer",
    description: "Ongoing QA coverage as a standing service, billed monthly.",
    included: ["Continuous test execution", "Monthly reporting", "Scales with your release cadence"],
  },
];
