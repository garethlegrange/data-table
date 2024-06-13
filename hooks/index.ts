import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUser, fetchUserPosts } from "@/server/actions";
import { useStore } from "@/store";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
};

export const useFetchUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    placeholderData: () => {
      const users = useStore.getState().users;
      return users.find((user) => user.id === id);
    },
  });
};

export const useFetchUserPosts = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchUserPosts(id),
  });
};
