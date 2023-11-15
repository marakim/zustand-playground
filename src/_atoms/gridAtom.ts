import { atom } from "jotai";
import {atomFamily} from "jotai/utils"

export const colAtom = atomFamily((idx: number) => atom(idx))
export const rowAtom = atomFamily((idx: number) => atom(10*idx))