import clsx from "clsx";
import { JSX } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title?: string | JSX.Element;
  children?: React.ReactNode;
  className?: string;
  to?: string;
}

const Card = ({ title, children, className, to = "" }: CardProps) => {
  const TitleWrapper = to ? Link : "div";
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow p-4 flex flex-col",
        className
      )}
    >
      {title && (
        <TitleWrapper to={to} className="font-medium mb-5">
          {title}
        </TitleWrapper>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Card;
