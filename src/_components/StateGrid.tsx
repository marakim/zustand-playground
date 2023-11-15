import { useEffect } from "react";
import { useGridStore } from "~/_state/gridState";

export interface StateGridProps {
    rows: number;
    cols: number;
}

export function StateGrid({rows, cols}: StateGridProps) {
    const rowArray = Array.from(Array(rows).keys())
    const colArray = Array.from(Array(cols).keys())

    const {initRow, initCol} = useGridStore(
        ({initRow, initCol}) => ({initRow, initCol})
    )

    useEffect(() => {
        rowArray.forEach(initRow)
        colArray.forEach(initCol)
    }, [rowArray, colArray, initRow, initCol])

    console.log(`render StateGrid(${rows}, ${cols})`)
    return <div className="flex flex-col gap-2 text-xl text-right">
        <div className="flex flex-row gap-2">
            <div className="basis-0 grow" />
            {
                colArray.map(col => <StateGridColLabel key={col} col={col} />)
            }
        </div>
        {
            rowArray.map(row =>
                <div key={row} className="flex flex-row gap-2">
                    <StateGridRowLabel row={row} />
                    {
                        colArray.map(col => <StateGridCell key={col} row={row} col={col}/>)
                    }
                </div>
                )
        }
    </div>
}

export interface StateGridRowLabelProps {
    row: number;
}

export function StateGridRowLabel({row}: StateGridRowLabelProps) {
    const {rowVal, incrementRow} = useGridStore(
        (state) => ({
            rowVal: state.row.get(row),
            incrementRow: state.incrementRow
        })
    )

    console.log(`render StateGridRowLabel(${row})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => incrementRow(row)}>
        {
            rowVal
        }
    </button>
}

export interface StateGridColLabelProps {
    col: number;
}

export function StateGridColLabel({col}: StateGridColLabelProps) {
    const {colVal, incrementCol} = useGridStore(
        (state) => ({
        colVal: state.col.get(col),
        incrementCol: state.incrementCol
        })
    )

    console.log(`render StateGridColLabel(${col})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => incrementCol(col)}>
        {
            colVal
        }
    </button>
}


export interface StateGridCellProps {
    row: number;
    col: number;
}

export function StateGridCell({row, col}: StateGridCellProps) {
    const {rowVal, colVal} = useGridStore(
        (state) => ({
            rowVal: state.row.get(row) ?? 0,
            colVal: state.col.get(col) ?? 0,
        })
    )

    console.log(`render StateGridCell(${row}, ${col})`)
    return <div className="basis-0 grow">
        {
            rowVal + colVal
        }
    </div>
}