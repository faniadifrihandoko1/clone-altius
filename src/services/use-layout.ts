import { create } from "zustand";

export interface ApplicationSettings {
  expandSidebar: boolean;
}

export interface ApplicationSettingsState {
  value: ApplicationSettings;
  toggleExpandSidebar: () => void;
  setExpandSidebar: (expandSidebar: boolean) => void;
}

const defaultValue: ApplicationSettings = {
  expandSidebar: true,
};

export const useApplicationSettings = create<ApplicationSettingsState>()(
  (set) => ({
    value: defaultValue,

    toggleExpandSidebar: () =>
      set((state) => ({
        value: {
          ...state.value,
          expandSidebar: !state.value.expandSidebar,
        },
      })),

    setExpandSidebar: (expandSidebar) =>
      set((state) => ({
        value: {
          ...state.value,
          expandSidebar,
        },
      })),
  })
);
