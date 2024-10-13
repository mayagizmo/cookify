import { createFileRoute } from "@tanstack/react-router";

import { PageHeading } from "../Utility/PageHeading.tsx";

export const Route = createFileRoute("/recently-added")({
  component: () => <PageHeading title="Recently Added" />,
});
