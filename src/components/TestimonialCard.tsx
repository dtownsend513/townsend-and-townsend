type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm">
      <p className="text-lg leading-relaxed text-neutral-700">
        "{quote}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold text-lg">
          {name}
        </h4>

        <p className="text-sm text-neutral-500">
          {role}
        </p>
      </div>
    </div>
  );
}