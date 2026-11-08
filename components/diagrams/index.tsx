import type { DiagramKey } from "@/lib/service-pages";
import EngagementDiagram from "./EngagementDiagram";
import FrameworkDiagram from "./FrameworkDiagram";
import LlmDiagram from "./LlmDiagram";
import PipelineDiagram from "./PipelineDiagram";

const DIAGRAMS: Record<DiagramKey, () => React.JSX.Element> = {
  framework: FrameworkDiagram,
  pipeline: PipelineDiagram,
  llm: LlmDiagram,
  engagement: EngagementDiagram,
};

export default function Diagram({ name }: { name: DiagramKey }) {
  const Component = DIAGRAMS[name];
  return <Component />;
}
