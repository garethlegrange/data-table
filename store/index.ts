import { create } from "zustand";

import type { User } from "@/types";

interface Store {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useStore = create<Store>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
