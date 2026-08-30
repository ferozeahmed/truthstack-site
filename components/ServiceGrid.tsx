import type { Service } from "@/lib/services-data";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({
  services,
  detailed = false,
}: {
  services: Service[];
  detailed?: boolean;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} detailed={detailed} />
      ))}
    </div>
  );
}
