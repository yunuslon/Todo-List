import { AppStore } from "./app.types";

// onboarding status
export const selectHasCompletedOnboarding = (state: AppStore) =>
  state.hasCompletedOnboarding;

// hydration
export const selectHasHydrated = (state: AppStore) => state.hasHydrated;

// user name
export const selectUserName = (state: AppStore) => state.userName;
