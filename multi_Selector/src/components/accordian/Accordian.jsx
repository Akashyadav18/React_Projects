import { useState } from "react"
import data from "./data"

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const [color, setColor] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
        setColor(getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultiple(cpyMultiple);
    }
    console.log(multiple);
    console.log("Button :", enableMultiSelect);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <button onClick={() => setEnableMultiSelect(!enableMultiSelect)} className="border-2 border-gray-300 py-2 px-4">Multi Selection</button>
                <div>
                    {
                        data && data.length > 0 ?
                            data.map((dataItem) => (
                                <div className={`w-full max-w-xl shadow-xl my-5 p-5 ${color === dataItem.id ? "bg-gray-500 text-teal-300" : null}`}>
                                    <div onClick={enableMultiSelect ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="flex justify-between items-center gap-10 cursor-pointer text-xl font-bold">
                                        <h1>{dataItem.question}</h1>
                                        {selected === dataItem.id ? <span>-</span> : <span>+</span>}
                                    </div>
                                    <div className="text-lg font-semibold pt-3">
                                        {
                                            enableMultiSelect ? multiple.indexOf(dataItem.id) !== -1 && <h1>{dataItem.answer}</h1> :
                                                selected === dataItem.id && <h1>{dataItem.answer}</h1>
                                        }
                                        {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                            <h1>{dataItem.answer}</h1>
                                            : null} */}
                                    </div>
                                </div>
                            ))
                            : <h1>No Data Found</h1>
                    }
                </div>
            </div>
        </>
    )
}