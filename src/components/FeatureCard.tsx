type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm">
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}