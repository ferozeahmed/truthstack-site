import { AUDIT_META } from "./audit-pulse";
import { caseStudies } from "./case-studies";

export interface WorkItem {
  slug: string;
  title: string;
  label: string;
  summary: string;
  cta: string;
}

export const workItems: WorkItem[] = [
  ...caseStudies.map((c) => ({
    slug: c.slug,
    title: c.title,
    label: c.label,
    summary: c.summary,
    cta: "Read the case study",
  })),
  {
    slug: AUDIT_META.slug,
    title: AUDIT_META.title,
    label: AUDIT_META.label,
    summary: AUDIT_META.summary,
    cta: "Read the sample audit",
  },
];
