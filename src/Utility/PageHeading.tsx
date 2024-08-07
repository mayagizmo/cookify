interface PageHeadingProps {
  title: string;
}

export function PageHeading({ title }: PageHeadingProps): JSX.Element {
  return <h1 className="text-xl mb-4">{title}</h1>;
}
