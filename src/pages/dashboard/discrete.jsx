import React, { useState } from "react";
import { indexData, typeData, dateData, buySellData, strikeData, optionData, orderTypeData } from "../../data/temporary_data";
import { Dropdown } from "../../widgets/inputs";

export function Discrete() {

    const [index, setIndex] = useState(indexData[0].value);
    const [type, setType] = useState(typeData[0].value);
    const [date, setDate] = useState(dateData[0].value);
    const [buyOrSell, setBuyOrSell] = useState(buySellData[0].value);
    const [strike, setStrike] = useState(strikeData[0].value);
    const [option, setOption] = useState(optionData[0].value);

    const [quantity, setQuantity] = useState(0);
    const [orderType, setOrderType] = useState(orderTypeData[0].value);

    const [stopLossCheck, setStopLossCheck] = useState(false);
    const [stopLosspPrice, setStopLossPrice] = useState(0);
    const [triggeredPrice, setTriggeredPrice] = useState(0);

    return (
        <div className="my-10 max-w-screen-lg py-2 flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal flex-wrap gap-4">
                <div className="">
                    <Dropdown label={"Select an index"} options={indexData} value={index} setValue={setIndex} />
                </div>
                <div className="flex flex-col">
                    <Dropdown label={"Select type"} options={typeData} value={type} setValue={setType} />
                    {type === "opt" && <>
                        <Dropdown label={"Select a strike"} options={strikeData} value={strike} setValue={setStrike} />
                        <Dropdown label={"Select option type"} options={optionData} value={option} setValue={setOption} />
                    </>
                    }
                </div>
                <div className="">
                    <Dropdown label={"Select date"} options={dateData} value={date} setValue={setDate} />
                </div>
                <div className="">
                    <Dropdown label={"Select Buy or Sell"} options={buySellData} value={buyOrSell} setValue={setBuyOrSell} />
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start justify-start w-full mt-8">
                <p className="font-semibold text-gray-900 block py-1 pl-1 text-lg">You selected : {index} 1000</p>

                <div className="flex justify-center lg:justify-normal flex-wrap gap-4 mt-2">
                    <div className="">
                        <label htmlFor="quantity_input" className="font-semibold text-gray-800 block py-1 pl-1">Quantity</label>
                        <div className="h-10 bg-white flex border border-gray-200 rounded-lg items-center">
                            <input type="number" name="quantity_input" className="px-4 appearance-none outline-none text-gray-800 w-[280px]" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>

                    </div>
                    <div className="">
                        <Dropdown label={"Select order type"} options={orderTypeData} value={orderType} setValue={setOrderType} />
                    </div>
                </div>

                <div className="flex flex-col"> 
                    <div className="flex items-center ml-1 lg:mt-0 mt-6">
                        <input type="checkbox" id="stop_loss_checkbox" className="mr-2 accent-red-600 cursor-pointer outline-none" checked={stopLossCheck} onChange={() => { stopLossCheck ? setStopLossCheck(false) : setStopLossCheck(true) }} />
                        <label htmlFor="stop_loss_checkbox" className="cursor-pointer">Enter Stop Loss</label>
                    </div>
                    {stopLossCheck &&
                        <div className="flex justify-center lg:justify-normal flex-wrap gap-4 mt-4">
                            <div className="">
                                <label htmlFor="stop_loss_input" className="font-semibold text-gray-800 block py-1 pl-1">Stop Loss Price</label>
                                <div className="h-10 bg-white flex border border-gray-200 rounded-lg items-center">
                                    <input type="number" name="quantity_input" className="px-4 appearance-none outline-none text-gray-800 w-[280px]" value={stopLosspPrice} onChange={(e) => { setStopLossPrice(e.target.value) }} />
                                </div>

                            </div>
                            <div className="">
                                <label htmlFor="stop_loss_input" className="font-semibold text-gray-800 block py-1 pl-1">Trigger Price</label>
                                <div className="h-10 bg-white flex border border-gray-200 rounded-lg items-center">
                                    <input type="number" name="quantity_input" className="px-4 appearance-none outline-none text-gray-800 w-[280px]" value={triggeredPrice} onChange={(e) => { setTriggeredPrice(e.target.value) }} />
                                </div>

                            </div>
                        </div>
                    }
                </div>

                <div className="mt-8">
                    <button type="button" className="px-4 py-2 bg-red-700 hover:bg-red-900 text-white rounded-lg cursor-pointer"> Execute </button>
                </div>

            </div>
        </div>
    );
}

export default Discrete;