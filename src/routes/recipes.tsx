import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes')({
  component: () => <div>Hello /recipes!</div>
})