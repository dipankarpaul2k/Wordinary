import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  // Initial state
  loading: false,
  currentWord: "",
  definitions: null,
  bookmarks: {},
  history: {},

  // Actions
  setLoading: (status) => set({ loading: status }),
  setCurrentWord: (word) => set({ currentWord: word }),
  setDefiniions: (definitions) => set({ definitions }),
  // bookmarks actions
  addBookmark: (word, definitions) =>
    set((state) => ({
      bookmarks: {
        [word.toLowerCase()]: {
          word,
          definitions,
          date: Date.now(),
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
  clearBookmarks: () => set({ bookmarks: {} }),
  // history actions
  addToHistory: (word) =>
    set((state) => {
      const lowercaseWord = word.toLowerCase();
      const isAlreayExist = Object.keys(state.history).includes(lowercaseWord);
      if (!isAlreayExist) {
        return {
          history: {
            [lowercaseWord]: {
              word,
              date: Date.now(),
            },
            ...state.history,
          },
        };
      }
      return state;
    }),
  clearHistory: () => set({ history: {} }),
});

const useStore = create(
  persist(store, {
    name: "wordinary-store",
  })
);

export default useStore;
