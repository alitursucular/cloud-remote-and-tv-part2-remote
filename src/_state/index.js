import create from "zustand";

const useStore = create((set) => ({
    currentChannelNumber: null,
    updateCurrentChannelNumber: (n) => set(() => ({ currentChannelNumber: n }))
}));

export default useStore;
