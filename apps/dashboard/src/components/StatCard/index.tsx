import clsx from "clsx";
import Card from "../Card";
import { Link } from "react-router-dom";
import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  iconClassName?: string;
  to?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  subtitle,
  className,
  subtitleClassName,
  iconClassName,
  to,
}: StatCardProps) => {
  const Wrapper = to ? Link : React.Fragment;
  return (
    <Wrapper to={to ?? ""} className="flex-1">
      <Card className={clsx("h-full flex items-start", className)}>
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm text-secondary mb-1">{title}</h3>
            <p>{value}</p>
            {subtitle && (
              <div className={clsx("text-sm", subtitleClassName)}>
                {subtitle}
              </div>
            )}
          </div>
          {icon && <div className={iconClassName}>{icon}</div>}
        </div>
      </Card>
    </Wrapper>
  );
};

export default StatCard;
