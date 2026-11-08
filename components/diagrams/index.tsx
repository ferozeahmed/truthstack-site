import type { DiagramKey } from "@/lib/service-pages";
import FrameworkDiagram from "./FrameworkDiagram";
import PipelineDiagram from "./PipelineDiagram";

export default function Diagram({ name }: { name: DiagramKey }) {
  return name === "framework" ? <FrameworkDiagram /> : <PipelineDiagram />;
}
