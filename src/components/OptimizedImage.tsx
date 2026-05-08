import React from "react";

type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  source: PictureSource;
  alt: string;
  sizes?: string;
  eager?: boolean;
  pictureClassName?: string;
};

export const OptimizedImage: React.FC<Props> = ({
  source,
  alt,
  sizes = "100vw",
  eager = false,
  pictureClassName,
  className,
  ...imgProps
}) => {
  return (
    <picture className={pictureClassName}>
      {Object.entries(source.sources).map(([format, srcset]) => (
        <source
          key={format}
          type={`image/${format}`}
          srcSet={srcset}
          sizes={sizes}
        />
      ))}
      <img
        src={source.img.src}
        width={source.img.w}
        height={source.img.h}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className={className}
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedImage;
