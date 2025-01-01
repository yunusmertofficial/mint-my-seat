import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
  label: string;
  link?: string;
};

type BreadcrumbHeaderSectionProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
  alt: string;
  src: string;
  description?: string;
};

const BreadcrumbHeaderSection: FC<BreadcrumbHeaderSectionProps> = ({
  title,
  breadcrumbs,
  alt,
  src,
  description,
}) => (
  <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
        className="opacity-60 filter blur-sm"
      />
    </div>
    <div className="relative z-10 h-[450px] sm:h-[500px] w-full flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      {description && (
        <p className="text-gray-200 mt-2 text-lg sm:text-xl">{description}</p>
      )}
      <p className="text-gray-300 mt-3 text-sm sm:text-base">
        {breadcrumbs.map((crumb, index) => (
          <span key={`${crumb.label}-${index}`}>
            {crumb.link ? (
              <Link href={crumb.link} className="underline hover:text-blue-400">
                {crumb.label}
              </Link>
            ) : (
              crumb.label
            )}
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </p>
    </div>
  </div>
);
export default BreadcrumbHeaderSection;
