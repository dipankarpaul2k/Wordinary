import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  // Initial state
  loading: false,
  currentWord: "",
  definitions: null,
  bookmarks: [], // will contain {words and responses}
  history: [], // will only contain words

  // Actions
  setLoading: (status) => set({ loading: status }),
  setCurrentWord: (word) => set({ currentWord: word }),
  setDefiniions: (definitions) => set({ definitions }),
  // bookmarks actions
  addBookmark: (word) =>
    set((state) => ({ bookmarks: [...state.bookmarks, word] })),
  removeBookmark: (word) =>
    set((state) => ({ bookmarks: state.bookmarks.filter((w) => w !== word) })),
  clearBookmarks: () => set({ bookmarks: [] }),
  // history actions
  addToHistory: (word) =>
    set((state) => ({ history: [word, ...state.history] })),
  clearHistory: () => set({ history: [] }),
});

const useStore = create(devtools(store));

export default useStore;
