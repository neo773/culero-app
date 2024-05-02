import { twMerge } from "tailwind-merge";
import { Card } from "./Card";
import { View, ViewProps, FlatList } from "react-native";
import { StyledText } from "./StyledText";
import { SortBy } from "./SortBy";
import { SearchBar } from "./SearchBar";
import { HorizontalDivider } from "./HorizontalDivider";
import { ConnectionDetails } from "./ConnectionDetails";
import { IconButton } from "./IconButton";
import { useState } from "react";
import { Item } from "react-native-picker-select";

export type SearchableConnectionsCardProps = {
  className?: ViewProps["className"];
  users: Array<{
    firstName: string;
    lastName: string;
    avatar: string;
    position: string;
    isVerified: boolean;
  }>;
};

export const SearchableConnectionsCard = ({
  className,
  users,
}: SearchableConnectionsCardProps) => {
  const [sortBy, setSortBy] = useState<Item | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Card
      className={className}
      headerComponent={
        <View className="flex-row justify-between p-2 py-4">
          <View>
            <StyledText
              lg
              weight={500}
            >{`${users.length} connections`}</StyledText>
            <SortBy
              items={[
                { value: "Recently added", label: "Recently added" },
                { value: "smth else", label: "Something else" },
              ]}
              onSelect={(item: Item) => setSortBy(item)}
            />
          </View>
          <View>
            <SearchBar
              placeholder="Search All"
              containerClassName="mt-2"
              value={searchTerm}
              onChangeText={(value) => setSearchTerm(value)}
            />
          </View>
        </View>
      }
      bodyComponent={
        <View>
          <FlatList
            data={users.filter(
              (user) =>
                user.lastName.search(searchTerm) !== -1 ||
                user.firstName.search(searchTerm) !== -1 ||
                user.position.search(searchTerm) !== -1
            )}
            ItemSeparatorComponent={() => <HorizontalDivider />}
            renderItem={({ item }) => (
              <View className="flex-row justify-between items-center p-4">
                <ConnectionDetails
                  userAvatar={item.avatar}
                  userName={`${item.firstName} ${item.lastName}`}
                  userPosition={item.position}
                  isVerified={item.isVerified}
                />
                <View className="flex-row items-center">
                  <IconButton
                    className="mr-2 md:mr-16"
                    onPress={() => {}}
                    iconProps={{ name: "message" }}
                    label="Write review"
                  />

                  <IconButton
                    onPress={() => {}}
                    iconProps={{ name: "dots-horizontal", size: 25 }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      }
    />
  );
};
