import { createFileRoute } from "@tanstack/react-router";

import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/long-time")({
  component: () => <PageHeading title="Long time no see" />,
});
