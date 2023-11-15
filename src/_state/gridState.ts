import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

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

const gridStore = create<GridState & GridAction>((set) => ({
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

export function useGridState<U>(selector: (state: GridState & GridAction) => U) {
    return gridStore(useShallow(selector))
}