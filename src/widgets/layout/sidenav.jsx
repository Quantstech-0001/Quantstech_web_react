import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { ChartBarSquareIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMemo, useState } from "react";
import DropdownWithSuggestion from "../inputs/dropdown-suggestion";
import { BuySellModal } from "../modals";
import { useContextController } from "../../context";

export function Sidenav({ data, getStocksList }) {

  const {sidenavOpen,setSidenavOpen} = useContextController();

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [savedStocks, setSavedStocks] = useState([]);
  const [buySellModalOpen, setBuySellModalOpen] = useState(false);
  const [buySellData, setBuySellData] = useState({});
  const [instrumentBuy, setInstrumentBuy] = useState(true);

  useMemo(() => {
    if (searchTerm.length > 1) {
      getStocksList(searchTerm)
    }
  }, [searchTerm]);

  return (
    <aside
      // className={`${sidenavTypes['white']} ${openSidenav ? "translate-x-0" : "-translate-x-80"
      className={`${sidenavTypes['white']} ${sidenavOpen ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div
        className={`relative`}
      >
        <Link to="/" className="py-6 px-8 text-center">
          <Typography
            variant="h6"
            // color={sidenavType === "dark" ? "white" : "blue-gray"}
            color={"blue-gray"}
          >
            {"Quantstech"}
          </Typography>
        </Link>

        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setSidenavOpen(false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
        </IconButton>

      </div>
      <div className="mx-4 flex flex-col gap-1">

        <div className="mb-4">
          <DropdownWithSuggestion placeholder={"Search stocks"} options={data} value={searchTerm} setValue={setSearchTerm} setSavedStocks={setSavedStocks} savedStocks={savedStocks} setBuySellData={setBuySellData} setBuySellModalOpen={setBuySellModalOpen} setInstrumentBuy={setInstrumentBuy} />
        </div>  


        {savedStocks.map((item) => (
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
                  setInstrumentBuy(true);
                  setBuySellModalOpen(true);
                  setBuySellData({
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
                  setInstrumentBuy(false);
                  setBuySellModalOpen(true);
                  setBuySellData({
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
                setSavedStocks(savedStocks.filter((e) => e.name !== item.name))
              }}>
                <TrashIcon className="h-6 w-6 p-0" />
              </button>
            </div>
          </div>
        ))}

      </div>
      {buySellModalOpen &&
        <BuySellModal open={buySellModalOpen} setOpen={setBuySellModalOpen} data={buySellData} instrumentBuy={instrumentBuy} setInstrumentBuy={setInstrumentBuy} />
      }
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
