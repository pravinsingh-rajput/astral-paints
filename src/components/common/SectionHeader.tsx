import Image from "next/image";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  imageUrl?: string;
}

const SectionHeader = ({
  subtitle,
  title,
  imageUrl = "/images/colours/popular-colour-title-shade.svg",
}: SectionHeaderProps) => {
  return (
    <>
      <div className="mb-2">
        <span className="text-gray-600 font-medium">{subtitle}</span>
      </div>
      <div className="mb-8 flex flex-row items-center space-x-4">
        <h1 className="text-3xl font-bold">{title}</h1>

        <span className="mt-2">
          <Image
            src={imageUrl}
            alt="Underline"
            width={180}
            height={8}
            className="object-cover"
          />
        </span>
      </div>
    </>
  );
};

export default SectionHeader;
