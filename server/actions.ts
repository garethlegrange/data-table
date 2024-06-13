"use server";

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${process.env.URL}/users/`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const fetchUser = async (id: number) => {
  try {
    const res = await fetch(`${process.env.URL}/users/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};

export const fetchUserPosts = async (id: number) => {
  try {
    const res = await fetch(`${process.env.URL}/users/${id}/posts`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};