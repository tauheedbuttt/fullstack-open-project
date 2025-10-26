import { useFormik } from "formik";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { formikError } from "shared";
import { CameraIcon } from "../../assets";
import Button from "../components/Button";
import Card from "../components/Card";
import IconCard from "../components/IconCard";
import Input from "../components/Input";
import tw from "../lib/tailwind";
import { ProfileFormInputs } from "../types/auth";
import { profileValidationSchema } from "../validation/profile";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { openGallery } from "../config/utils";

const EditProfile = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      image: "",
    },
    validationSchema: profileValidationSchema,
    onSubmit: (values) => {
      // Handle form submission
    },
  });

  const { values, setValues, handleChange, handleSubmit } = formik;

  const onSubmit = () => handleSubmit();
  const onBack = () => navigate(-1);

  const handleOpenGallery = async () => {
    const result = await openGallery();
    if (!result) return;

    setValues({ ...values, image: result.assets[0].uri });
  };

  const fields: ProfileFormInputs[] = [
    { label: "Name", placeholder: "Enter your name", name: "name" },
    { label: "Email", placeholder: "Enter your email", name: "email" },
    { label: "Phone", placeholder: "Enter your phone number", name: "phone" },
  ];

  return (
    <View style={tw`flex-1 gap-5 justify-center`}>
      {/* Image */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={tw`relative w-full items-center `}
        // open gallery to select image
        onPress={handleOpenGallery}
      >
        {/* Avatar */}
        <View
          style={tw`w-24 h-24 rounded-full bg-primary items-center justify-center`}
        >
          {values.image ? (
            <Image
              source={{ uri: values.image }}
              style={tw`w-24 h-24 rounded-full`}
              resizeMode="cover"
            />
          ) : (
            <Text style={tw`text-white text-xl font-semibold`}>T</Text>
          )}
        </View>
        {/* Add Image Icon */}
        <View style={tw`absolute bottom-0 right-32`}>
          <IconCard
            Icon={CameraIcon}
            style={tw`text-theme`}
            bgStyle={tw`rounded-full p-2 bg-white`}
          />
        </View>
      </TouchableOpacity>
      {/* Fields */}
      <Card style={tw`py-6 gap-4`}>
        {fields.map((field) => (
          <Input
            {...field}
            key={field.name}
            value={values[field.name]}
            onChangeText={handleChange(field.name)}
            error={formikError(formik, field.name)}
          />
        ))}
      </Card>
      {/* Actions */}
      <View style={tw`gap-2`}>
        <Button text="Save Changes" onPress={onSubmit} />
        <Button text="Cancel" variant="white" onPress={onBack} />
      </View>
    </View>
  );
};

export default EditProfile;
