import clsx from "clsx";
import { JSX } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title?: string | JSX.Element;
  children?: React.ReactNode;
  className?: string;
  to?: string;
  rightTitleElement?: JSX.Element;
}

const Card = ({
  title,
  children,
  className,
  to = "",
  rightTitleElement,
}: CardProps) => {
  const TitleWrapper = to ? Link : "div";
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow p-4 flex flex-col",
        className
      )}
    >
      <div className="flex justify-between items-center mb-5">
        {title && (
          <TitleWrapper to={to} className="font-medium">
            {title}
          </TitleWrapper>
        )}
        {rightTitleElement}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Card;
