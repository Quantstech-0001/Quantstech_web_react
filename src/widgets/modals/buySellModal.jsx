import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch
} from "@material-tailwind/react";

export function BuySellModal({ open, setOpen, data, instrumentBuy, setInstrumentBuy }) {

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);

  const [product, setProduct] = useState("intraday");
  const [type, setType] = useState("market");

  const handleOpen = () => setOpen(!open);

  const proceedOrder = () =>{
    console.log(instrumentBuy);
  }

  return (
    <>
      <Dialog open={open} handler={handleOpen} className="p-2 relative">
        <div className="absolute right-6 top-10">
          <label class="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" checked={instrumentBuy} class="sr-only peer" onChange={(e) => { setInstrumentBuy(e.target.checked) }} />
            <div class="w-9 h-5 bg-red-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{instrumentBuy ? "Buy" : "Sell"}</span>
          </label>
        </div>
        <DialogHeader className="flex gap-x-4 pt-2 pb-0">
          <div className="w-16 h-16">
            <img src={data.img} alt="Quantstech" className="object-cover rounded-full w-full h-full" />
          </div>
          <div className="flex flex-col">
            <h2 className="">{data.name}</h2>
            <p className="text-base font-medium">{data.email}</p>
          </div>
        </DialogHeader>
        {/* <hr /> */}
        <DialogBody className="pb-2">
          <div className="flex flex-col">

            <div className="w-full flex">
              <button type="button" className="font-medium tracking-wide text-sm pb-1 px-2 py-0 outline-none border-b-2 border-[#6093e4] text-[#6093e4] cursor-pointer" >Regular</button>
              <button type="button" className="font-medium tracking-wide text-sm pb-1 px-2 py-0 outline-none border-b-2 border-transparent text-gray-600 cursor-pointer" >Cover</button>
              <button type="button" className="font-medium tracking-wide text-sm pb-1 px-2 py-0 outline-none border-b-2 border-transparent text-gray-600 cursor-pointer" >AMO</button>
              <button type="button" className="font-medium tracking-wide text-sm pb-1 px-2 py-0 outline-none border-b-2 text-gray-600 border-transparent cursor-pointer" >Iceberg</button>
            </div>

            <div className="w-full flex items-center gap-x-4 mt-4">
              <div className="">
                <div className="flex justify-between items-center">
                  <label htmlFor="quantity_input" className="font-medium text-sm text-gray-800 block pl-1 py-0.5">Quantity</label>
                  <span className="text-xs text-gray-400">Lot size 1</span>
                </div>
                <div className="h-8 w-[150px] bg-white flex border border-gray-300 rounded-lg items-center">
                  <input type="number" name="quantity_input" className="px-2 text-sm appearance-none outline-none text-gray-800 w-full" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                </div>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <label htmlFor="quantity_input" className="font-medium text-sm text-gray-800 block pl-1 py-0.5">Price</label>
                  <span className="text-xs text-gray-400">Tick size 0.05</span>
                </div>
                <div className="h-8 w-[150px] bg-white flex border border-gray-300 rounded-lg items-center">
                  <input type="number" name="quantity_input" className="px-2 text-sm appearance-none outline-none text-gray-800 w-full" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start mt-4">
              <div className="font-medium text-sm text-gray-800 block pl-1 py-0.5">Product</div>
              <div className="flex gap-x-4 h-10">
                <button type="button" className={`flex justify-center items-center w-[150px] h-full rounded-md cursor-pointer ${product === "intraday" ? "border-2 border-[#6093e4]" : "border-2 border-gray-200"}`} onClick={() => {
                  setProduct("intraday");
                }}>
                  <span className={`text-sm ${product === "intraday" ? "text-[#6093e4]" : "text-gray-800"}`}>Intraday</span>
                  <span className={`ml-2 text-sm ${product === "intraday" ? "text-[#adc7f0]" : "text-gray-400"}`}>MIS</span>
                </button>

                <button type="button" className={`flex justify-center items-center w-[150px] h-full rounded-md cursor-pointer ${product !== "intraday" ? "border-2 border-[#6093e4]" : "border-2 border-gray-200"}`} onClick={() => {
                  setProduct("longterm");
                }}>
                  <span className={`text-sm ${product !== "intraday" ? "text-[#6093e4]" : "text-gray-800"}`}>Longterm</span>
                  <span className={`ml-2 text-sm ${product !== "intraday" ? "text-[#adc7f0]" : "text-gray-400"}`}>CNG</span>
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start mt-4">

              <div className="font-medium text-sm text-gray-800 block pl-1 py-0.5">Type</div>
              <div className="flex gap-x-2.5 h-10">

                <button type="button" className={`flex justify-center items-center w-[70px] h-full rounded-md cursor-pointer ${type === "market" ? "border-2 border-[#6093e4] text-[#6093e4]" : "border-2 border-gray-200 text-gray-800"}`} onClick={() => {
                  setType("market");
                }}>
                  <span className={`text-sm ${type === "market" ? "text-[#6093e4]" : "text-gray-800"}`}>Market</span>
                </button>

                <button type="button" className={`flex justify-center items-center w-[70px] h-full rounded-md cursor-pointer ${type === "limit" ? "border-2 border-[#6093e4] text-[#6093e4]" : "border-2 border-gray-200 text-gray-800"}`} onClick={() => {
                  setType("limit");
                }}>
                  <span className={`text-sm ${type === "limit" ? "text-[#6093e4]" : "text-gray-800"}`}>Limit</span>
                </button>

                <button type="button" className={`flex justify-center items-center w-[70px] h-full rounded-md cursor-pointer ${type === "sl" ? "border-2 border-[#6093e4] text-[#6093e4]" : "border-2 border-gray-200 text-gray-800"}`} onClick={() => {
                  setType("sl");
                }}>
                  <span className={`text-sm ${type === "sl" ? "text-[#6093e4]" : "text-gray-800"}`}>SL</span>
                </button>

                <button type="button" className={`flex justify-center items-center w-[70px] h-full rounded-md cursor-pointer ${type === "sl-m" ? "border-2 border-[#6093e4] text-[#6093e4]" : "border-2 border-gray-200 text-gray-800"}`} onClick={() => {
                  setType("sl-m");
                }}>
                  <span className={`text-sm ${type === "sl-m" ? "text-[#6093e4]" : "text-gray-800"}`}>SL - M</span>
                </button>

              </div>

            </div>

          </div>
        </DialogBody>

        <DialogFooter>
          <Button variant="gradient" color="gray" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>

          <Button variant="gradient" color={instrumentBuy ? "green" : "red"} onClick={proceedOrder}>
            <span>{instrumentBuy ? "Buy" : "Sell"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}