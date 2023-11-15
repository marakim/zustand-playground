import { useAtom, useAtomValue } from "jotai";
import { colAtom, rowAtom } from "~/_atoms/gridAtom";

export interface AtomGridProps {
    rows: number;
    cols: number;
}

export function AtomGrid({rows, cols}: AtomGridProps) {
    const rowArray = Array.from(Array(rows).keys()).map(x => x+1)
    const colArray = Array.from(Array(cols).keys()).map(x => x+1)

    console.log(`render AtomGrid(${rows}, ${cols})`)
    return <div className="flex flex-col gap-2 text-xl text-right">
        <div className="flex flex-row gap-2">
            <div className="basis-0 grow" />
            {
                colArray.map(col => <AtomGridColLabel key={col} col={col} />)
            }
        </div>
        {
            rowArray.map(row =>
                <div key={row} className="flex flex-row gap-2">
                    <AtomGridRowLabel row={row} />
                    {
                        colArray.map(col => <AtomGridCell key={col} row={row} col={col}/>)
                    }
                </div>
                )
        }
    </div>
}

export interface AtomGridRowLabelProps {
    row: number;
}

export function AtomGridRowLabel({row}: AtomGridRowLabelProps) {
    const [rowVal, setRowVal] = useAtom(rowAtom(row))

    console.log(`render AtomGridRowLabel(${row})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => setRowVal((state) => state + 10)}>
        {
            rowVal
        }
    </button>
}

export interface AtomGridColLabelProps {
    col: number;
}

export function AtomGridColLabel({col}: AtomGridColLabelProps) {
    const [colVal, setColVal] = useAtom(colAtom(col))

    console.log(`render AtomGridColLabel(${col})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => setColVal((state) => state + 1)}>
        {
            colVal
        }
    </button>
}


export interface AtomGridCellProps {
    row: number;
    col: number;
}

export function AtomGridCell({row, col}: AtomGridCellProps) {
    const rowVal = useAtomValue(rowAtom(row))
    const colVal = useAtomValue(colAtom(col))

    console.log(`render AtomGridCell(${row}, ${col})`)
    return <div className="basis-0 grow">
        {
            rowVal + colVal
        }
    </div>
}