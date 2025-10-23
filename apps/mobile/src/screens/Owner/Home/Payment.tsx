import { Text, View } from "react-native";
import { IPayment, IPaymentStatus } from "shared";
import { ClockIcon, DownloadIcon, PaidIcon } from "../../../../assets";
import Button, { ButtonVariants } from "../../../components/Button";
import Card from "../../../components/Card";
import Chip from "../../../components/Chip";
import tw from "../../../lib/tailwind";
import dayjs from "dayjs";

interface PaymentProps
  extends Pick<IPayment, "paymentId" | "amount" | "paymentDate"> {
  variant?: "light" | "dark";
  status?: IPaymentStatus;
}

const Payment = ({
  variant = "dark",
  status = IPaymentStatus.PENDING,
  ...payment
}: PaymentProps) => {
  const colors = {
    light: {
      background: "bg-white",
      text: "text-black",
      button: "primary",
      border: "border-gray-400",
      status: {
        [IPaymentStatus.COMPLETED]: {
          text: "text-green-600",
          background: "bg-green-100",
        },
        [IPaymentStatus.PENDING]: {
          text: "text-theme",
          background: "bg-primary/10",
        },
      },
    },
    dark: {
      background: "bg-primary",
      text: "text-white",
      button: "white",
      border: "border-white",
      status: {
        [IPaymentStatus.COMPLETED]: {
          text: "text-green-600",
          background: "bg-white",
        },
        [IPaymentStatus.PENDING]: {
          text: "text-primary",
          background: "bg-white",
        },
      },
    },
  };
  return (
    <Card style={tw`${colors[variant].background}`}>
      {/* Month and Status */}
      <View style={tw`flex-row justify-between items-start`}>
        {/* Month and amount */}
        <View>
          <Text style={tw`text-sm ${colors[variant].text}/80`}>
            {new Date(payment.paymentDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </Text>
          <Text style={tw`text-xl ${colors[variant].text} font-bold`}>
            PKR {payment.amount.toLocaleString()}
          </Text>
        </View>
        {/* Status */}
        <Chip
          Icon={status === IPaymentStatus.COMPLETED ? PaidIcon : undefined}
          text={status}
          textStyle={tw`${colors[variant].status[status].text}`}
          containerStyle={tw`${colors[variant].status[status].background}`}
        />
      </View>
      {/* Due Date */}
      <View style={tw`my-7 flex-row items-center gap-2`}>
        <ClockIcon
          style={tw`${colors[variant].text}/80`}
          height={18}
          width={18}
        />
        <Text style={tw`text-sm ${colors[variant].text}/80 `}>
          Due Date:{" "}
          {dayjs(payment.paymentDate).endOf("month").format("DD MMM, YYYY")}
        </Text>
      </View>
      {/* Actions */}
      {status === IPaymentStatus.PENDING && (
        <Button
          variant={colors[variant].button as ButtonVariants}
          text="Pay Now"
          textStyle={tw`font-semibold`}
          style={tw`rounded-full`}
        />
      )}
      {status === IPaymentStatus.COMPLETED && (
        <View
          style={tw`flex-row justify-between items-center border-t-[0.2px] ${colors[variant].border} pt-4`}
        >
          <Text style={tw`text-sm ${colors[variant].text}/80 `}>
            {payment.paymentId}
          </Text>
          <Button
            Icon={DownloadIcon}
            variant={colors[variant].button as ButtonVariants}
            text="View Receipt"
            textStyle={tw`font-semibold text-xs`}
            style={tw`px-3 py-2`}
            iconSize={16}
          />
        </View>
      )}
    </Card>
  );
};

export default Payment;
