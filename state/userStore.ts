import { create } from 'zustand';

interface UserStateStore {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useUserStore = create<UserStateStore>((set) => ({
  isLoggedIn: false,
  login: () =>
    set((state) => ({
      ...state,
      isLoggedIn: true,
    })),
  logout: () =>
    set((state) => ({
      ...state,
      isLoggedIn: false,
    })),
}));

export default useUserStore;
