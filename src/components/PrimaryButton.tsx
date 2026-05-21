type PrimaryButtonProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <button className="bg-black text-white px-7 py-4 rounded-full font-medium hover:bg-neutral-800 transition">
      {children}
    </button>
  );
}