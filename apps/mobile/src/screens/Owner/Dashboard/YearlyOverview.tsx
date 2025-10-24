import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DownIcon, UpIcon } from "../../../../assets";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import tw from "../../../lib/tailwind";

const YearlyOverview = () => {
  const [year, setYear] = useState<number | undefined>(undefined);

  const years = [
    {
      year: 2025,
      amount: 12334,
      quarters: [
        { quarter: 3, amount: 2000 },
        { quarter: 4, amount: 2334 },
      ],
    },
    {
      year: 2024,
      amount: 15000,
      quarters: [
        { quarter: 1, amount: 5000 },
        { quarter: 3, amount: 4000 },
        { quarter: 4, amount: 3000 },
      ],
    },
    {
      year: 2023,
      amount: 18000,
      quarters: [
        { quarter: 1, amount: 6000 },
        { quarter: 2, amount: 5000 },
        { quarter: 4, amount: 3000 },
      ],
    },
  ];

  const onYear = (value: number) => () =>
    setYear(year === value ? undefined : value);

  return (
    <Card>
      <Text style={tw`font-bold text-base`}>Payment History by Year</Text>
      <View style={tw`mt-4 gap-3`}>
        {years.map((item) => (
          <View key={item.year} style={tw`gap-2`}>
            {/* Card */}
            <TouchableOpacity onPress={onYear(item.year)} activeOpacity={0.7}>
              <Card
                key={item.year}
                style={tw`flex-row justify-between border border-blue/50 bg-blue/10`}
              >
                {/* Year and quarter count */}
                <View>
                  <Text style={tw`text-base font-bold`}>{item.year}</Text>
                  <Text style={tw`text-sm text-gray-500`}>
                    {item.quarters.length}{" "}
                    {item.quarters.length === 1 ? "Quarter" : "Quarters"}
                  </Text>
                </View>
                {/* Amount and dropdown */}
                <View style={tw`flex-row items-center gap-3`}>
                  {/* Amount */}
                  <View style={tw`gap-1`}>
                    <Text style={tw`text-right text-xs text-gray-500`}>
                      Total Amount
                    </Text>
                    <Text style={tw`text-right text-base font-bold`}>
                      PKR {item.amount.toLocaleString()}
                    </Text>
                  </View>
                  {/* Dropdown */}
                  <Button
                    Icon={year === item.year ? UpIcon : DownIcon}
                    style={tw`bg-blue p-[2px]`}
                    textStyle={tw`text-white`}
                    onPress={onYear(item.year)}
                  />
                </View>
              </Card>
            </TouchableOpacity>
            {/* Quarters */}
            {year === item.year && (
              <View style={tw`ml-2 gap-2`}>
                {item.quarters.map((quarter) => (
                  <Card
                    key={quarter.quarter}
                    style={tw`flex-row justify-between border-b bg-gray-50 border-[0.2] border-gray-200`}
                  >
                    {/* Quarter Details */}
                    <View style={tw`flex-row items-center gap-2`}>
                      <Card style={tw`p-3 bg-blue`}>
                        <Text style={tw`text-white font-bold`}>
                          Q{quarter.quarter}
                        </Text>
                      </Card>
                      <View>
                        <Text style={tw`font-medium text-base`}>
                          Quarter {quarter.quarter}
                        </Text>
                        <Text style={tw`text-xs text-secondary`}>
                          Year {item.year}
                        </Text>
                      </View>
                    </View>
                    {/* Amount Details */}
                    <View>
                      <Text style={tw`text-right text-xs`}>Total Amount</Text>
                      <Text
                        style={tw`font-medium text-right text-base text-green-600`}
                      >
                        PKR {quarter.amount.toLocaleString()}
                      </Text>
                    </View>
                  </Card>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </Card>
  );
};

export default YearlyOverview;
