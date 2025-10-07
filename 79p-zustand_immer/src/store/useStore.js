import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  immer((set, get) => ({
    isDarkMode: false,
    auth: {
      isLoggedIn: true,
    },
    pokemonData: null,
    loading: false,
    error: null,

    toggleDarkMode: () =>
      set((state) => {
        state.isDarkMode = !state.isDarkMode;
      }),

    setLoggedIn: (isLoggedIn) =>
      set((state) => {
        state.auth.isLoggedIn = isLoggedIn;
      }),

    fetchPokemon: async () => {
      set((state) => {
        state.loading = true;
        state.error = null;
      });

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        await new Promise(resolve => setTimeout(resolve, 2000));
        const data = await response.json();

        set((state) => {
          state.pokemonData = data;
          state.loading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
  }))
);

export default useStore;