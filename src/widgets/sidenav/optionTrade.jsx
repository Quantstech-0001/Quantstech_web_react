import { useState } from "react";
import { DropdownSimple } from "../inputs";
import { indexData, dateData } from "../../data/temporary_data"
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function OptionTrade({ }) {

    const auto_find_options = [
        "Nearest Strike Price with Index/Equity Price", "Highest Volume", "Highest Bid Qty", "Highest Ask Qty", "Lowest Spread", "Price Between"]

    const [equityName, setEquityName] = useState(indexData[0].name);
    const [expiry, setExpiry] = useState(dateData[0].name);
    const [investmentOpen, setInvestmentOpen] = useState(false);
    const [investment, setInvestment] = useState({ type: "percent", value: 0 });
    const [quantityOpen, setQuantityOpen] = useState(false);
    const [quantity, setQuantity] = useState({ type: "auto", value: 0 });
    const [orderTypeOpen, setOrderTypeOpen] = useState(false);
    const [orderType, setOrderType] = useState({ type: "market", value: 0 });
    const [targetProfileOpen, setTargetProfileOpen] = useState(false);
    const [targetProfile, setTargetProfile] = useState({ type: "notset", value: 0 });
    const [stopLossOpen, setStopLossOpen] = useState(false);
    const [stopLoss, setStopLoss] = useState({ type: "notset", value: 0 });
    const [autoFindOpen, setAutoFindOpen] = useState(false);
    const [autoFind, setAutoFind] = useState({ type: "", value: 0 });

    return (
        <div className="w-full h-full flex flex-col gap-1 overflow-x-hidden">
            <div className="w-full min-h-10 flex justify-center items-center text-white bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">Option Trader</div>

            <div className="w-full h-full">

                <DropdownSimple label="Index/Equity" options={indexData} value={equityName} setValue={setEquityName} />
                <DropdownSimple label="Expiry" options={dateData} value={expiry} setValue={setExpiry} />

                <div className="w-full h-full flex flex-col gap-1 mt-2">
                    {/* INVESTMENT */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setInvestmentOpen(!investmentOpen)}>
                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${investmentOpen ? "rotate-90" : "rotate-0"}`} /> Investment  </span>
                            <span className="text-xs"> {investment["value"]} {investment["type"] === "percent" && "%"} </span>
                        </div>

                        {investmentOpen &&
                            <div className="w-full flex flex-col px-2">

                                <div className="w-full flex items-center mt-1.5">
                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="investment_ib_p" id="investment_ib_p" checked={investment.type === "percent" ? true : false} onChange={(e) => { e.currentTarget.checked && setInvestment({ type: "percent", value: 0 }) }} />
                                        <label htmlFor="investment_ib_p" className="ml-1">Percentage</label>
                                    </span>

                                    <span className="ml-2">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${investment.type === "amount" ? "bg-gray-200" : ""}`} value={investment.type === "percent" ? investment.value : ""} onChange={(e) => {
                                            setInvestment({ type: "percent", value: e.currentTarget.value })
                                        }} disabled={investment.type === "amount" ? true : false} />
                                    </span>
                                </div>

                                <div className="w-full flex items-center mt-1.5">
                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="investment_ib_a" id="investment_ib_a" checked={investment.type === "amount" ? true : false} onChange={(e) => { e.currentTarget.checked && setInvestment({ type: "amount", value: 0 }) }} />

                                        <label htmlFor="investment_ib_a" className="ml-1 whitespace-nowrap">Fixed Amt.</label>
                                    </span>

                                    <span className="ml-2">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${investment.type === "percent" ? "bg-gray-200" : ""}`} value={investment.type === "amount" ? investment.value : ""} onChange={(e) => {
                                            setInvestment({ type: "amount", value: e.currentTarget.value })
                                        }}
                                            disabled={investment.type === "percent" ? true : false}
                                        />
                                    </span>
                                </div>

                            </div>
                        }

                    </div>

                    {/* QUANTITY */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setQuantityOpen(!quantityOpen)}>

                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${quantityOpen ? "rotate-90" : "rotate-0"}`} /> Quantity  </span>
                            <span className="text-xs"> {quantity.type === "auto" ? "Auto" : quantity.value} </span>
                        </div>

                        {quantityOpen &&
                            <div className="w-full flex flex-col px-2">
                                <div className="w-full flex items-center mt-1.5">
                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="quantity_ib_a" id="quantity_ib_a" checked={quantity.type === "auto" ? true : false} onChange={(e) => { e.currentTarget.checked && setQuantity({ type: "auto", value: 0 }) }} />

                                        <label htmlFor="quantity_ib_a" className="ml-1">Auto</label>
                                    </span>

                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="quantity_ib_f" id="quantity_ib_f" checked={quantity.type === "fixed" ? true : false} onChange={(e) => { e.currentTarget.checked && setQuantity({ type: "fixed", value: 0 }) }} />

                                        <label htmlFor="quantity_ib_f" className="ml-1">Fixed</label>
                                    </span>

                                    <span className="ml-2">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${quantity.type === "auto" ? "bg-gray-200" : ""}`} value={quantity.type === "fixed" ? quantity.value : ""} onChange={(e) => {
                                            setQuantity({ type: "fixed", value: e.currentTarget.value })
                                        }} disabled={quantity.type === "auto" ? true : false} />
                                    </span>
                                </div>
                            </div>
                        }

                    </div>

                    {/* ORDER TYPE */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setOrderTypeOpen(!orderTypeOpen)}>

                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${orderTypeOpen ? "rotate-90" : "rotate-0"}`} /> Order Type  </span>
                            <span className="text-xs"> {orderType.type === "market" ? "Market" : "Limit"} </span>
                        </div>

                        {orderTypeOpen &&
                            <div className="w-full flex flex-col px-2">

                                <div className="w-full flex items-center mt-1.5">

                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="order_type_ib_m" id="order_type_ib_m" checked={orderType.type === "market" ? true : false} onChange={(e) => { e.currentTarget.checked && setOrderType({ type: "market", value: 0 }) }} />

                                        <label htmlFor="order_type_ib_m" className="ml-1">Market</label>
                                    </span>

                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="radio" name="order_type_ib_l" id="order_type_ib_l" checked={orderType.type === "limit" ? true : false} onChange={(e) => { e.currentTarget.checked && setOrderType({ type: "limit", value: 0 }) }} />

                                        <label htmlFor="order_type_ib_l" className="ml-1">Fixed</label>
                                    </span>

                                    <span className="ml-2 flex items-center">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${orderType.type === "market" ? "bg-gray-200" : ""}`} value={orderType.type === "limit" ? orderType.value : ""}
                                            onChange={(e) => {
                                                setOrderType({ type: "limit", value: e.currentTarget.value })
                                            }} disabled={orderType.type === "market" ? true : false} />

                                        <span className="ml-2">%</span>
                                    </span>
                                </div>

                            </div>
                        }

                    </div>

                    {/* TARGET PROFILE */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setTargetProfileOpen(!targetProfileOpen)}>

                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${targetProfileOpen ? "rotate-90" : "rotate-0"}`} /> Target Profile  </span>
                            <span className="text-xs"> {targetProfile.type === "set" ? targetProfile.value : "Not Set"} </span>
                        </div>

                        {targetProfileOpen &&
                            <div className="w-full flex flex-col px-2">

                                <div className="w-full flex items-center mt-1.5">
                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="checkbox" name="target_profile_ib" id="target_profile_ib" onChange={(e) => { e.target.checked ? setTargetProfile({ type: "set", value: 0 }) : setTargetProfile({ type: "notset", value: 0 }) }} />

                                    </span>

                                    <span className="ml-2 flex items-center">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${targetProfile.type === "notset" ? "bg-gray-200" : ""}`} value={targetProfile.type === "set" ? targetProfile.value : ""}
                                            onChange={(e) => {
                                                setTargetProfile({ type: "set", value: e.currentTarget.value })
                                            }} disabled={orderType.type === "notset" ? true : false} />

                                        <span className="ml-2">%</span>
                                    </span>
                                </div>

                            </div>
                        }

                    </div>

                    {/* STOP LOSS */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setStopLossOpen(!stopLossOpen)}>

                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${stopLossOpen ? "rotate-90" : "rotate-0"}`} /> Stop Loss  </span>
                            <span className="text-xs"> {stopLoss.type === "set" ? stopLoss.value : "Not Set"} </span>
                        </div>

                        {stopLossOpen &&
                            <div className="w-full flex flex-col px-2">

                                <div className="w-full flex items-center mt-1.5">
                                    <span className="flex justify-center items-center text-xs w-24">
                                        <input type="checkbox" name="stop_loss_ib" id="stop_loss_ib" onChange={(e) => { e.target.checked ? setStopLoss({ type: "set", value: 0 }) : setStopLoss({ type: "notset", value: 0 }) }} />
                                    </span>

                                    <span className="ml-2 flex items-center">
                                        <input type="number" className={`py-1 px-2 rounded-lg w-full border border-gray-300 outline-none ${stopLoss.type === "notset" ? "bg-gray-200" : ""}`} value={stopLoss.type === "set" ? stopLoss.value : ""}
                                            onChange={(e) => {
                                                setStopLoss({ type: "set", value: e.currentTarget.value })
                                            }} disabled={stopLoss.type === "notset" ? true : false} />

                                        <span className="ml-2">%</span>
                                    </span>
                                </div>

                            </div>
                        }

                    </div>

                    {/* AUTO FIND OPTION BASED ON */}
                    {/* NEED TO DO MORE CONCISE */}
                    <div className="w-full flex flex-col">

                        <div className="w-full flex items-center justify-between rounded-md px-2 py-1 cursor-pointer text-white bg-gradient-to-br from-gray-800 to-gray-900" onClick={() => setAutoFindOpen(!autoFindOpen)}>
                            <span className="text-sm flex items-center"> <ChevronRightIcon className={`w-3 h-3 mr-1 transition-all duration-300 ${autoFindOpen ? "rotate-90" : "rotate-0"}`} /> Auto Find Option Based on </span>
                        </div>

                        {autoFindOpen &&
                            <div className="w-full flex flex-col px-2">

                                {auto_find_options.map((item) => (
                                    <div className="w-full flex items-center mt-1.5" key={item}>
                                        <span className="flex justify-start items-center text-xs w-full">
                                            <input type="radio" name="investment_ib_p" id="investment_ib_p" value={item} />
                                            <label htmlFor="investment_ib_p" className="ml-1 whitespace-nowrap">{item}</label>
                                        </span>
                                    </div>
                                ))
                                }

                            </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}