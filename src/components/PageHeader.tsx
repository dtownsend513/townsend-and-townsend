import Container from "./Container";
import SectionHeading from "./SectionHeading";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          center
        />
      </Container>
    </section>
  );
}