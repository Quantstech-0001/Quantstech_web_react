import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ChartBarIcon,
  PresentationChartLineIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, Discrete, Stocks, Strategies, Screeners } from "./pages/dashboard";
import { SignIn, SignUp } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        subPages: false,
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        subPages: false,
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        subPages: false,
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        subPages: false,
        element: <Notifications />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "strategies",
        path: "/strategies",
        subPages: true,
        element: <Strategies />,
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "stocks",
        path: "/stocks",
        subPages: false,
        element: <Stocks />,
      }
    ],
    subPages:[
      {
        icon: <ChartBarIcon {...icon} />,
        name: "discrete",
        path: "/strategies/discrete",
        parent: "strategies",
        element: <Discrete />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "screeners",
        path: "/strategies/screeners",
        parent: "strategies",
        element: <Screeners />,
      }
    ]
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  }
];

export default routes;
