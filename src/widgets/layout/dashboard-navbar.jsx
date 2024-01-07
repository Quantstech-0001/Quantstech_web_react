import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Breadcrumbs,
} from "@material-tailwind/react";
import routes from "../../routes";

export function DashboardNavbar() {

  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const getSubPages = (pageName) => {
    let currentLayout = {}
    routes.forEach((item) => {
      item.layout === layout && (currentLayout = item)
    })

    if (Object.keys(currentLayout).length === 0) {
      return [];
    }
    console.log(currentLayout);
    let subPagesList = currentLayout.subPages.filter((item) => item.parent === pageName)
    return subPagesList;
  }

  return (
    <Navbar
      color={"white"}
      className={"rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"}
      fullWidth
    // blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={"bg-transparent p-0 transition-all mt-1"}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>

        <div className="flex items-center w-full">
          <ul className="mr-auto md:ml-auto w-full flex justify-end">
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, name, subPages }) => (
                  <div className="relative" key={name}
                    onMouseEnter={(e) => {
                      let target = e.currentTarget.lastChild;
                      if (target.tagName.toLowerCase() === "div") {
                        target.classList.remove("hidden");
                        target.classList.add("block");
                      }
                    }}
                    onMouseLeave={(e) => {
                      let target = e.currentTarget.lastChild;
                      if (target.tagName.toLowerCase() === "div") {
                        target.classList.remove("block");
                        target.classList.add("hidden");
                      }
                    }}
                  >
                    <Link to={`/${layout}${path}`} className={`px-3 py-2 mr-2 hover:text-white hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 rounded-md text-gray-900 capitalize transition-all duration-300 ease-in-out ${"/" + page === path ? "text-white bg-gradient-to-br from-gray-800 to-gray-900" : ""}`}
                    >
                      {name}
                    </Link>

                    
                    {subPages &&
                      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg absolute top-[130%] right-1.5 hidden`}>
                        <ul className="flex flex-col gap-1 p-1">
                          {
                            getSubPages(name).map(({ name: subName, path: subPath }) => (
                              <li className="bg-white hover:bg-gray-100 text-black capitalize rounded-sm h-8 min-w-28" key={subName}>
                                <Link to={`/${layout}${subPath}`} className="w-full h-full flex items-center px-2 cursor-pointer">
                                  {subName}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    }
                  </div>
                ))
            )}

          </ul>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
