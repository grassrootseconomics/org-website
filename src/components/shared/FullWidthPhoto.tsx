import Image from "next/image";

interface FullWidthPhotoProps {
  src: string;
  alt: string;
  height?: string;
}

export function FullWidthPhoto({
  src,
  alt,
  height = "h-[40vh] min-h-[300px]",
}: FullWidthPhotoProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </section>
  );
}
