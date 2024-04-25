import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  // Initial state
  loading: false,
  currentWord: "",
  definitions: null,
  bookmarks: {},
  history: [],

  // Actions
  setLoading: (status) => set({ loading: status }),
  setCurrentWord: (word) => set({ currentWord: word }),
  setDefiniions: (definitions) => set({ definitions }),
  // bookmarks actions
  addBookmark: (word, definition) =>
    set((state) => ({
      bookmarks: {
        [word.toLowerCase()]: {
          word,
          definition,
        },
        ...state.bookmarks,
      },
    })),
  removeBookmark: (word) =>
    set((state) => {
      const newBookmarks = { ...state.bookmarks };
      delete newBookmarks[word.toLowerCase()];
      return { bookmarks: newBookmarks };
    }),
  clearBookmarks: () => set({ bookmarks: [] }),
  // history actions
  addToHistory: (word) =>
    set((state) => ({ history: [word, ...state.history] })),
  clearHistory: () => set({ history: [] }),
});

const useStore = create(
  persist(store, {
    name: "wordinary-store",
  })
);

export default useStore;

/*
structure of bookmarks = {
  word.toLowerCase(): {
    word,
    definitions
  },
  ...oldBookmarks
}
*/
