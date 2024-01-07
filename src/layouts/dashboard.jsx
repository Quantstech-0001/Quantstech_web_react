import { Routes, Route } from "react-router-dom";
import { ChevronUpIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Footer,
} from "../widgets/layout";
import routes from "../routes";
import {allStocksData} from "../data/temporary_data"
import { useState } from "react";
import { useContextController } from "../context";
import Terminal from "../widgets/layout/terminal";

export function Dashboard() {

  const {terminalOpen, setTerminalOpen} = useContextController();

  const [searchStockResult, setSearchStockResult] = useState([]);

  // Searching the stocks
  const getSearchedStock = (value) =>{
      let newResult = [];
      allStocksData.forEach((item)=>{
        item.name.toLowerCase().includes(value.toLowerCase()) && newResult.push(item)
      })
      setSearchStockResult(newResult);
  }

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        data={searchStockResult}
        getStocksList={getSearchedStock}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />

        <Routes>
          {routes.map(
            ({ layout, pages, subPages }) =>
              layout === "dashboard" &&
              pages.concat(subPages).map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>

        <Terminal data={[]} open={terminalOpen} />

        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
