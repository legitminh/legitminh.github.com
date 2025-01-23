import {create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GenerationState {
    theme: string
    setTheme: (theme: string) => void
}

export const useGenerationStore = create<
GenerationState,
any
>(
    // persist<GenerationState>(
    //     (set) => ({
    //         theme: 'dark',
    //         audioURL: '',
    //         setTheme: (theme: string) => set({ theme }),
    //         setAudioURL: (audioURL: string) => set({ audioURL }),
    //     }),
    //     {
    //         name: 'generation-store', // key used in localStorage
    //     }
    // )
    devtools(
        persist(
            (set) => ({
                theme: "dark",
                setTheme: (theme: string) => set({ theme }),
            }),
            {
                name: 'generation-store', // key used in localStorage
            }
        )
    )
)