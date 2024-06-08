import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../HomePage/HomePage.tsx";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <div className="hero min-h-min bg-base-200 mb-4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold"> Welcome to amazing food. </h1>
            <p className="py-6">No more eating the same dish day after day.</p>
          </div>
        </div>
      </div>

      <HomePage />
    </>
  ),
});
