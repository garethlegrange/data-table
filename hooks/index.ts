import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUser, fetchPosts } from "@/server/actions";

export const useFetchUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: () => fetchUsers() });
};

export const useFetchUser = (id: number) => {
  return useQuery({ queryKey: ["user", id], queryFn: () => fetchUser(id) });
};

export const useFetchPosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: () => fetchPosts() });
};
