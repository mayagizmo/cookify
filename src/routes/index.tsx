import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../HomePage/HomePage.tsx";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <div className="hero min-h-min bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold"> Welcome to amazing food. </h1>
            <p className="py-6">
              No more eating the same dish day after day. No more wondering
              "Where was the recipe from that amazing dinner from?". It's all
              here. All in one place. Happy cooking!
            </p>
          </div>
        </div>
      </div>

      <HomePage />
    </>
  ),
});
