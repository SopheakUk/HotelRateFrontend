import { create } from 'zustand';

interface AppState {
  userId: string;
  propertyId: string;
  language: 'en' | 'km';
  setLanguage: (lang: 'en' | 'km') => void;
}

export const useAppStore = create<AppState>((set) => ({
  userId: 'user123',
  propertyId: 'property456',
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));