import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useContextController } from "../../context";

export function DropdownWithSuggestion({ label, placeholder, options, value, setValue, savedStocks, setSavedStocks}) {

    const { setBuyModalOpen, setBuyModalData, setBuySwitch } = useContextController();

    const [dropDownOpen, setDropDownOpen] = useState(false);

    useMemo(() => {
        if (value.length > 1) {
            setDropDownOpen(true)
        } else {
            setDropDownOpen(false)
        }
    }, [value]);

    return (
        <div className="bg-transparent">
            <div className="max-w-md mx-auto">
                {label &&
                    <label htmlFor="select" className="font-semibold text-gray-800 block py-1 pl-1">{label}</label>
                }
                <div className="relative">
                    <div className="h-10 bg-white flex border border-gray-200 rounded-lg items-center">
                        <input value={value} className="px-4 appearance-none outline-none text-gray-800 w-full" placeholder={placeholder} onChange={(e) => { setValue(e.target.value) }} />

                        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600" onClick={() => {
                            setValue("");
                            setDropDownOpen(false);
                        }}>
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                    </div>

                    {dropDownOpen &&
                        <div className="absolute rounded-md shadow bg-white overflow-hidden flex flex-col w-full mt-1 border border-gray-200 z-40">

                            {
                                options?.map((item, idx) => (
                                    <div className={`group ${idx !== 0 ? "border-t" : ""}`} key={item.name}>
                                        <div className="p-2 border-transparent group-hover:bg-gray-100 flex justify-between items-center">
                                            <span>
                                                {item.name}
                                            </span>
                                            <div className="flex justify-around items-center">
                                                <button type="button" className="w-5 h-5 rounded-full bg-transparent hover:bg-green-700 mr-1.5 flex justify-center items-center text-xs font-semibold border border-green-700 text-green-700 hover:text-white cursor-pointer transition-all duration-300"
                                                    onClick={() => {
                                                        setBuySwitch(true)
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
                                                <button type="button" className="w-5 h-5 rounded-full bg-transparent hover:bg-red-700 mr-1 flex justify-center items-center text-xs font-semibold border border-red-700 text-red-700 hover:text-white cursor-pointer transition-all duration-300"
                                                    onClick={() => {
                                                        setBuySwitch(false)
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
                                                <button type="button" className="w-6 h-6 rounded-full bg-transparent hover:bg-blue-700 flex justify-center items-center text-blue-700 hover:text-white cursor-pointer transition-all duration-300" onClick={() => {
                                                    setSavedStocks([...savedStocks, item]);
                                                    setValue("")
                                                }}>
                                                    <PlusCircleIcon className="h-6 w-6 p-0" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

DropdownWithSuggestion.defaultProps = {
    action: null,
};

DropdownWithSuggestion.propTypes = {
    label: PropTypes.string,
    // name: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    // options: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    // setValue:PropTypes.func
};

// MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default DropdownWithSuggestion;