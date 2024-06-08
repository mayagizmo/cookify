import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recently-added')({
  component: () => <div>Hello /recently-added!</div>
})