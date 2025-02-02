interface PageHeadingProps {
  title: string;
}

export function PageHeading({ title }: PageHeadingProps) {
  return <h1 className="text-xl mb-4">{title}</h1>;
}
