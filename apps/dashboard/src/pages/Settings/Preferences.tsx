import { useFormik } from "formik";
import { SettingIcon } from "../../assets";
import Card from "../../components/Card";
import { SettingsFormInputs } from "../../types/settings";
import Input from "../../components/Input";
import { formikError } from "../../utils/utils";
import Button from "../../components/Button";
import { settingsValidation } from "../../validations/settings";

const Preferences = () => {
  const formik = useFormik({
    initialValues: {
      defaultFees: 0,
      dueDay: 0,
      lateFeePenalty: 0,
      gracePeriod: 0,
      isEmail: "false",
    },
    validationSchema: settingsValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  const fields: SettingsFormInputs[][] = [
    [
      { name: "defaultFees", label: "Default Fees" },
      { name: "lateFeePenalty", label: "Late Fee Penalty" },
    ],
    [
      { name: "dueDay", label: "Payment Due Day" },
      { name: "gracePeriod", label: "Grace Period (Days)" },
    ],
  ];
  const toggles: SettingsFormInputs[] = [
    {
      name: "isEmail",
      label: "Email Notifications",
      subLabel: "Send payment receipts via email",
      variant: "toggle",
      type: "checkbox",
    },
  ];

  return (
    <Card icon={<SettingIcon />} title={"System Preferences"}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="flex gap-4">
          {fields.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-2 flex-1">
              {group.map((field) => (
                <Input
                  {...field}
                  key={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="flex-1"
                  error={formikError(formik, field.name)}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Toggles */}
        <div className="flex flex-col gap-2 w-1/4">
          {toggles.map((field) => (
            <Input
              {...field}
              key={field.name}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={formikError(formik, field.name)}
              inputClassName={"!p-0 !border-0 !w-fit"}
            />
          ))}
        </div>
        {/* Actions */}
        <div className="flex justify-end ">
          <Button text="Save Changes" />
        </div>
      </form>
    </Card>
  );
};

export default Preferences;
