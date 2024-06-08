import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/most-cooked')({
  component: () => <div>Hello /most-cooked!</div>
})