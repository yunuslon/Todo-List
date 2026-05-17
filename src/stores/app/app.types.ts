export type AppState = {
  hasHydrated: boolean;
  hasCompletedOnboarding: boolean;
  userName: string | null;
};

export type AppActions = {
  setHasHydrated: (value: boolean) => void;
  completeOnboarding: (name: string) => void;
  resetApp: () => void;
};

export type AppStore = AppState & AppActions;
