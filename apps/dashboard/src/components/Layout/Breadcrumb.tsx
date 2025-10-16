import useBreadcrumb from "../../hooks/useBreadcrumb";

const Breadcrumb = () => {
  const { title, subtitle } = useBreadcrumb();
  return (
    <div className="py-6 flex flex-col gap-1">
      <h3 className="text-2xl">{title}</h3>
      <span className="text-[15px] text-secondary">{subtitle}</span>
    </div>
  );
};

export default Breadcrumb;
