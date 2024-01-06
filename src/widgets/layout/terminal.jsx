import { useEffect, useState } from 'react';
import { useContextController } from "../../context";
import { ChevronUpIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { PositionTable, OrderTable } from '../tables';

export function Terminal({ data, open }) {

  // const table_header = {
  //   "position": {
  //     header: [
  //       "Symbol","Product"
  //     ]
  //   },
  //   "order": {
  //     header: [
  //       "Name", "Symbol", "Price", "Trigger Price", "Status", "Rate", "Side"
  //     ]
  //   },
  // }


  const routes_terminal = [
    {
      name: "position",
      title: "Position",
      child: [],
      table: <PositionTable />
    },
    {
      name: "order",
      title: "Order",
      child: [
        {
          name: "all",
          title: "All"
        },
        {
          name: "working",
          title: "Working"
        },
        {
          name: "inactive",
          title: "Inactive"
        },
        {
          name: "filled",
          title: "Filled"
        },
        {
          name: "cancelled",
          title: "Cancelled"
        },
        {
          name: "rejected",
          title: "Rejected"
        }
      ],
      table: <OrderTable />
    },
    {
      name: "all_position",
      title: "All Position",
      child: []
    },
    {
      name: "trade",
      title: "Trade",
      child: []
    },
    {
      name: "holding",
      title: "Holding",
      child: []
    }
  ]

  const { terminalOpen, setTerminalOpen } = useContextController();

  const [terminalRoute, setTerminalRoute] = useState("position")
  const [terminalChildRoute, setTerminalChildRoute] = useState("all")
  const [terminalChildAvailable, setTerminalChildAvailable] = useState(false)

  useEffect(() => {
    routes_terminal.forEach((elem) => {
      if (elem.child.length > 0) {
        setTerminalChildAvailable(true);
      } else {
        setTerminalChildAvailable(false);
      }
    })
  }, [terminalRoute]);

  return (
    <div className={`w-[calc(100%-30px)] xl:w-[calc(100%-350px)] flex flex-col px-4 py-2 h-88 fixed rounded-lg shadow-upper-md transition-all duration-500 ease-out bg-white ${open ? "bottom-0" : "-bottom-80"}`}>

      <div className="h-8 w-full flex justify-start relative">
        <h3 className="text-lg font-semibold text-blue-700">Terminal</h3>

        <span className={`absolute top-0 right-0 z-20 hover:bg-gray-300 p-1 rounded-full cursor-pointer transition-all duration-500 ease-out ${terminalOpen ? "rotate-180" : "rotate-0"}`}
          onClick={() => setTerminalOpen(!terminalOpen)}
        >
          <ChevronUpIcon className="h-5 w-5" />
        </span>
      </div>

      <ul className="min-h-8 flex justify-start items-center border-y border-solid border-gray-300">
        {
          routes_terminal.map((item) => (
            <li className={`mr-4 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:transition-all after:duration-500 font-medium text-sm ${terminalRoute === item.name ? "after:bg-blue-700 after:w-full after:h-0.5 after:rounded-xl" : "after:bg-transparent hover:text-gray-800 after:w-0 after:h-0"}`} key={item.name} onClick={() => setTerminalRoute(item.name)}> {item.title} </li>
          ))
        }
      </ul>

      {
        routes_terminal.map((item,idx) => (
          (terminalRoute === item.name && item.child.length) > 0 &&
          <ul className="min-h-10 flex justify-start items-center border-b border-solid border-gray-300" key={idx}>
            {item.child.map((childItem) => (
              <li className={`mr-4 cursor-pointer font-normal text-sm px-2 py-1 rounded-md ${childItem.name === terminalChildRoute ? "bg-blue-100 text-blue-700" : "bg-transparent hover:bg-gray-100 text-gray-900"}`} key={childItem.name} onClick={() => { setTerminalChildRoute(childItem.name) }}> {childItem.title} </li>
            ))
            }
          </ul>
        ))
      }

      <div className={`${terminalChildAvailable ? "h-62" : "h-72"} w-full flex flex-col overflow-auto`}>
        {
          routes_terminal.map((item) => (
            item.name === terminalRoute && item.table
          ))
        }
      </div>

    </div>
  );
}


export default Terminal;