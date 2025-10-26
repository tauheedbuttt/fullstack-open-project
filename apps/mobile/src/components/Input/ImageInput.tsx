import { Image, Text, TouchableOpacity } from "react-native";
import { InputProps } from ".";
import tw from "../../lib/tailwind";
import { openGallery } from "../../config/utils";

const ImageInput = ({ value, placeholder, onChangeText }: InputProps) => {
  const handleOpenGallery = async () => {
    const result = await openGallery();
    if (!result) return;
    onChangeText?.(result.assets[0].uri);
  };

  return (
    <TouchableOpacity
      onPress={handleOpenGallery}
      activeOpacity={0.7}
      style={tw`mt-2 bg-secondary/10 border border-secondary border-dashed h-70 rounded-lg items-center justify-center`}
    >
      {value ? (
        <Image
          source={typeof value === "string" ? { uri: value } : value}
          style={tw`w-full h-full rounded-lg`}
          resizeMode="cover"
        />
      ) : (
        <Text style={tw`text-secondary font-medium text-lg`}>
          {placeholder}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ImageInput;
