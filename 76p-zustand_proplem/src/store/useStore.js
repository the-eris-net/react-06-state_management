import { create } from 'zustand';

const useStore = create((set, get) => ({
  isDarkMode: false,
  isLoggedIn: true,
  pokemonData: null,
  loading: false,
  error: null,

  toggleDarkMode: () => set({ isDarkMode: !get().isDarkMode }),
  
  setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  
  fetchPokemon: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      await new Promise(resolve => setTimeout(resolve, 2000));
      const data = await response.json();
      
      set({ 
        pokemonData: data, 
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error.message, 
        loading: false 
      });
    }
  },
}));

export default useStore;