import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/long-time')({
  component: () => <div>Hello /long-time!</div>
})