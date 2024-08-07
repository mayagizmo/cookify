import { createFileRoute } from "@tanstack/react-router";

import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/recipes")({
  component: () => <PageHeading title="Recipes" />,
});
