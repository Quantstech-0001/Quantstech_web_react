import { ChartBarSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContextController } from "../../context";

export function Watchlist({ data, setData }) {

    const { setBuyModalData, setBuySwitch, setBuyModalOpen } = useContextController();

    return (
        <div className="w-full h-full">
            {data.map((item) => (
                <div className="hover:text-white hover:bg-gradient-to-br from-gray-800 to-gray-900 w-full p-2 rounded-md flex-col justify-between items-center transition-all duration-100"
                    key={item.name}
                    onMouseEnter={(e) => {
                        e.currentTarget.children[1].classList.remove("hidden");
                        e.currentTarget.children[1].classList.add("flex");
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.children[1].classList.remove("flex");
                        e.currentTarget.children[1].classList.add("hidden");
                    }}
                >
                    <div className="flex justify-between items-center w-full">
                        <div className="text-sm">
                            {item.name}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`mr-2 text-xs ${item.margin < 0 ? "text-red-700" : "text-green-700"}`}>{item.margin}%</span>
                            <span className="text-xs">{item.price}</span>
                        </div>
                    </div>

                    <div className="flex justify-end items-center mt-1">

                        <button type="button" className="w-5 h-5 rounded-full bg-transparent hover:bg-green-700 mr-2 flex justify-center items-center text-xs font-semibold border border-green-700 text-green-700 hover:text-white cursor-pointer transition-all duration-300"
                            onClick={() => {
                                setBuySwitch(true);
                                setBuyModalOpen(true);
                                setBuyModalData({
                                    name: item.name,
                                    img: "/img/team-2.jpeg",
                                    email: "green-energy@adani.com",
                                });
                            }}
                        >
                            B
                        </button>
                        <button type="button" className="w-5 h-5 rounded-full bg-transparent hover:bg-red-700 mr-2 flex justify-center items-center text-xs font-semibold border border-red-700 text-red-700 hover:text-white cursor-pointer transition-all duration-300"
                            onClick={() => {
                                setBuySwitch(false);
                                setBuyModalOpen(true);
                                setBuyModalData({
                                    name: item.name,
                                    img: "/img/team-2.jpeg",
                                    email: "green-energy@adani.com",
                                });
                            }}
                        >
                            S
                        </button>
                        <button type="button" className="w-6 h-6 bg-transparent hover:bg-red-700 mr-1.5 flex justify-center items-center text-xs font-semibold rounded-lg text-red-700 hover:text-white cursor-pointer transition-all duration-300">
                            <ChartBarSquareIcon className="h-full w-full" />
                        </button>
                        <button type="button" className="w-6 h-6 bg-transparent hover:bg-blue-700 flex justify-center items-center text-blue-700 hover:text-white rounded-lg cursor-pointer transition-all duration-300" onClick={() => {
                            setData(data.filter((e) => e.name !== item.name))
                        }}>
                            <TrashIcon className="h-6 w-6 p-0" />
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}