import { createFileRoute } from "@tanstack/react-router";

import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/most-cooked")({
  component: () => <PageHeading title="Most Cooked" />,
});
