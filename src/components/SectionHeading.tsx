type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-6xl font-light leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}