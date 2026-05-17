import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AppStore } from "./app.types";

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // ========== STATE ==========
      hasHydrated: false,

      hasCompletedOnboarding: false,

      userName: null,

      // ========== ACTIONS ==========
      setHasHydrated: (value) => set({ hasHydrated: value }),

      completeOnboarding: (name) =>
        set({
          hasCompletedOnboarding: true,
          userName: name,
        }),

      resetApp: () =>
        set({
          hasCompletedOnboarding: false,
          userName: null,
        }),
    }),

    {
      name: "app-storage",

      storage: createJSONStorage(() => AsyncStorage),

      // penting untuk gate screen
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
