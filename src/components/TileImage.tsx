import React from "react";

type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  src: string;
  alt: string;
  eager?: boolean;
  pictureClassName?: string;
};

// Derives /foo/bar.png → { avif: "/foo/bar.avif", webp: "/foo/bar.webp" }
// Returns null for siblings when the source already is webp/avif/svg.
function deriveSiblings(src: string) {
  const m = src.match(/^(.+)\.(png|jpe?g)(\?.*)?$/i);
  if (!m) return null;
  const [, stem, , query = ""] = m;
  return {
    avif: `${stem}.avif${query}`,
    webp: `${stem}.webp${query}`,
  };
}

export const TileImage: React.FC<Props> = ({
  src,
  alt,
  eager = false,
  pictureClassName,
  className,
  ...imgProps
}) => {
  const siblings = deriveSiblings(src);

  const img = (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      className={className}
      {...imgProps}
    />
  );

  if (!siblings) return img;

  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={siblings.avif} />
      <source type="image/webp" srcSet={siblings.webp} />
      {img}
    </picture>
  );
};

export default TileImage;
