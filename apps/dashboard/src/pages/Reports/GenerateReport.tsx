import { useFormik } from "formik";
import Card from "../../components/Card";
import { reportValidation } from "../../validations/reports";
import { ISector, IUser } from "shared";
import Input from "../../components/Input";
import { formikError } from "../../utils/utils";
import { ReportFormInputs } from "../../types/reports";
import Button from "../../components/Button";
import { DownloadIcon } from "../../assets";

const GenerateReport = () => {
  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      sector: "",
      rider: "",
    },
    validationSchema: reportValidation,
    onSubmit: (values) => {
      // handle form submission
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  const sectors: Pick<ISector, "id" | "name">[] = [
    { id: -1, name: "All Sectors" },
    { id: 1, name: "D-12/1" },
    { id: 2, name: "D-12/2" },
    { id: 3, name: "D-12/3" },
    { id: 4, name: "D-12/4" },
  ];
  const riders: Pick<IUser, "id" | "name">[] = [
    { id: -1, name: "All Riders" },
    { id: 1, name: "Rider One" },
    { id: 2, name: "Rider Two" },
    { id: 3, name: "Rider Three" },
    { id: 4, name: "Rider Four" },
  ];

  const fields: ReportFormInputs[] = [
    {
      label: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      label: "End Date",
      name: "endDate",
      type: "date",
      min: values.startDate,
    },
    {
      label: "Sector",
      name: "sector",
      variant: "select",
      options: sectors.map((sector) => ({
        label: sector.name,
        value: sector.name,
      })),
    },
    {
      label: "Rider",
      name: "rider",
      variant: "select",
      options: riders.map((rider) => ({
        label: rider.name,
        value: rider.name,
      })),
    },
  ];

  return (
    <Card title={"Report Filters"}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* filters */}
        <div className="flex gap-4">
          {fields.map((field) => (
            <Input
              {...field}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              key={field.name}
              className="flex-1"
              error={formikError(formik, field.name)}
            />
          ))}
        </div>
        {/* actions */}
        <div className="flex  gap-4">
          <Button text="Generate Report" />
          <Button
            icon={<DownloadIcon />}
            variant="outlined"
            text="Download PDF"
          />
          <Button
            icon={<DownloadIcon />}
            variant="outlined"
            text="Download CSV"
          />
        </div>
      </form>
    </Card>
  );
};

export default GenerateReport;
