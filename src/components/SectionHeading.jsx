export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-content">{title}</h2>
      <p className="mt-3 text-gray-500">{children}</p>
    </div>
  );
}
