type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-sm font-medium underline underline-offset-4">
        Learn More
      </button>
    </div>
  );
}