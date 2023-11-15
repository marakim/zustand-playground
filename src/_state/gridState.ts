import { create } from "zustand";

export interface GridState {
    row: Map<number,number>,
    col: Map<number,number>,
}

export interface GridAction {
    initRow: (idx: number) => void,
    initCol: (idx: number) => void,
    incrementRow: (idx: number) => void,
    incrementCol: (idx: number) => void,
}

export const useGridState = create<GridState & GridAction>((set) => ({
    row: new Map(),
    col: new Map(),
    initRow: (idx: number) => {
        set((prev) => ({
            row: new Map(prev.row).set(idx, idx+1)
        }))
    },
    initCol: (idx: number) => {
        set((prev) => ({
            col: new Map(prev.col).set(idx, (idx+1)*10)
        }))
    },
    incrementRow: (idx: number) => {
        set((prev) => ({
            row: new Map(prev.row).set(idx, (prev.row.get(idx) ?? 0) + 1)
        }))
    },
    incrementCol: (idx: number) => {
        set((prev) => ({
            col: new Map(prev.col).set(idx, (prev.col.get(idx) ?? 0) + 10)
        }))
    },
}))