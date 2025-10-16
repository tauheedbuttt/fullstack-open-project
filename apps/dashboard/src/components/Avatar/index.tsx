import clsx from "clsx";

interface AvatarProps {
  alt: string;
  src?: string;
  size?: number;
}

const Avatar = ({ alt, src, size }: AvatarProps) => {
  const first = alt.charAt(0).toUpperCase();
  const last = alt.split(first).pop()?.charAt(0).toUpperCase();
  return (
    <div>
      {src && (
        <img
          alt={alt}
          src={src}
          className={clsx(
            `rounded-full`,
            size ? `w-${size} h-${size}` : "w-10 h-10"
          )}
        />
      )}
      {!src && (
        <div
          className={clsx(
            `rounded-full bg-primary flex items-center justify-center text-white`,
            size ? `w-${size} h-${size}` : "w-10 h-10"
          )}
        >
          {first}
          {last}
        </div>
      )}
    </div>
  );
};

export default Avatar;
