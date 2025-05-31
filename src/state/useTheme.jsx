import {create} from "zustand";

export const useTheme = create((set)=>{

    return{
        isDarkMode: false,
        counter: 0,
        increment: ()=>set((state)=>({counter: state.counter + 1})),
        decrement: ()=>set((state)=>({counter: state.counter - 1})),
        toggleTheme: ()=>set((state)=>({isDarkMode: !state.isDarkMode})),
    }

});