import { useState } from "react";
import PropTypes from "prop-types";

export function DropdownSimple({ label, options, value, setValue }) {

  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="max-w-md mx-auto">
        <label htmlFor="select" className="font-semibold text-gray-800 block py-1 pl-1">{label}</label>

        <div className="relative">
          <div className="h-10 bg-white flex border border-gray-200 rounded-lg items-center">
            <input value={value} name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" onClick={() => setDropDownOpen(true)}
            />

            {/* <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600" onClick={() => {
              setValue("");
              setDropDownOpen(false);
            }}>
              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button> */}

            <button type="button" className={`cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600 duration-300 ${dropDownOpen ? "rotate-0" : "rotate-180"}`} onClick={() => {
              dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
            }}>
              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>

          </div>

          {dropDownOpen &&
            <div className="absolute rounded-md shadow bg-white overflow-hidden flex flex-col w-full mt-1 border border-gray-200 z-40">

              {
                options?.map((item, idx) => (
                  <div className={`cursor-pointer group ${idx !== 0 ? "border-t" : ""}`}>
                    <div className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" onClick={() => {
                      setValue(item.name);
                      setDropDownOpen(false);
                    }} >{item.name}</div>
                  </div>
                ))
              }

            </div>
          }
        </div>

        {/* <span className="text-xs pl-1 text-gray-700">
          Selected : {value}
        </span> */}
      </div>
    </div>
  );
}

DropdownSimple.defaultProps = {
  action: null,
};

DropdownSimple.propTypes = {
  label: PropTypes.string,
  name: PropTypes.object.isRequired,
  // message: PropTypes.node.isRequired,
  // action: PropTypes.node,
};

// MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default DropdownSimple;