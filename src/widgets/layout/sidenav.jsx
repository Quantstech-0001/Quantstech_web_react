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
import { Watchlist, OptionTrade } from "../sidenav/";

export function Sidenav({ data, getStocksList }) {

  const { sidenavOpen, setSidenavOpen, buyModalOpen, setBuyModalOpen, buyModalData, buySwitch, setBuySwitch } = useContextController();

  const [searchTerm, setSearchTerm] = useState("");
  const [savedStocks, setSavedStocks] = useState([]);
  const [buySellModalOpen, setBuySellModalOpen] = useState(false);
  const [buySellData, setBuySellData] = useState({});
  const [instrumentBuy, setInstrumentBuy] = useState(true);
  const [sideNavOptions, setSideNavOptions] = useState("watchlist");

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  const sidenav_routes = [
    {
      name: "watchlist",
      title: "Watchlist",
      component: <Watchlist data={savedStocks} setData={setSavedStocks} />
    },
    {
      name: "option_trader",
      title: "Option Trader",
      component: <OptionTrade data={savedStocks} setData={setSavedStocks} />
    },
  ]

  useMemo(() => {
    if (searchTerm.length > 1) {
      getStocksList(searchTerm)
    }
  }, [searchTerm]);

  return (
    <aside
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

      <div className="mx-4 flex flex-col justify-between gap-1 h-[calc(100%-80px)]">

        {sideNavOptions === "watchlist" &&
          <div className="mb-2">
            <DropdownWithSuggestion placeholder={"Search stocks"} options={data} value={searchTerm} setValue={setSearchTerm} setSavedStocks={setSavedStocks} savedStocks={savedStocks} setBuySellData={setBuySellData} setBuySellModalOpen={setBuySellModalOpen} setInstrumentBuy={setInstrumentBuy} />
          </div>
        }

        <div className="overflow-y-auto w-full h-[calc(100%-60px)]">
          {
            sidenav_routes.map((item) => (
              item.name === sideNavOptions && item.component
            ))
          }
        </div>


        <div className="w-full min-h-10 flex border-t border-solid border-gray-300">
          {
            sidenav_routes.map((item, idx) => (
              <button type="button" className={`h-full w-1/2 flex items-center justify-center border-solid border-gray-300 ${sideNavOptions === item.name ? "text-blue-700" : "text-gray-600"} ${sidenav_routes.length - 1 !== idx ? "border-r" : ""}`} key={item.name} onClick={() => setSideNavOptions(item.name)}>{item.title}</button>
            ))
          }
        </div>


      </div>

      {buyModalOpen &&
        <BuySellModal open={buyModalOpen} setOpen={setBuyModalOpen} data={buyModalData} instrumentBuy={buySwitch} setInstrumentBuy={setBuySwitch} />
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
