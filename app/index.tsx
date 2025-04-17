import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Button, FlatList, RefreshControl, Text, View } from "react-native";
const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};
export default function UserList() {
  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  if (isLoading) return <Text>불러오는 중...</Text>;
  if (isError) return <Text>오류 발생: {(error as Error).message}</Text>;
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListFooterComponent={() => (
        <Button title="Next" onPress={() => router.push("/next")} />
      )}
    />
  );
}
