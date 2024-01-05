

export function Terminal({ data, open }) {

  return (
    <div className={`w-[calc(100%-30px)] xl:w-[calc(100%-350px)] flex flex-col px-4 py-2 h-80 fixed rounded-lg ${open ? "bottom-0" : "-bottom-80"} transition-all duration-500 ease-out bg-gray-200`}>
      <div className="h-8 w-full flex justify-start">
        <h3 className="text-lg font-semibold">Terminal</h3>
      </div>
      <div className="h-72 w-full">
        <table className="w-full" border={1}>
          <thead className="">
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Trigger Price</th>
            <th>Status</th>
            <th>Rate</th>
            <th>Side</th>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Jio Fin Service</td>
              <td >JioFin</td>
              <td >24.21</td>
              <td >25.04</td>
              <td >Pending</td>
              <td >2.51%</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td>Jio Fin Service</td>
              <td >JioFin</td>
              <td >24.21</td>
              <td >25.04</td>
              <td >Pending</td>
              <td >2.51%</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td>Jio Fin Service</td>
              <td >JioFin</td>
              <td >24.21</td>
              <td >25.04</td>
              <td >Pending</td>
              <td >2.51%</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td>Jio Fin Service</td>
              <td >JioFin</td>
              <td >24.21</td>
              <td >25.04</td>
              <td >Pending</td>
              <td >2.51%</td>
              <td >Buy</td>
            </tr>
            <tr>
              <td>Jio Fin Service</td>
              <td >JioFin</td>
              <td >24.21</td>
              <td >25.04</td>
              <td >Pending</td>
              <td >2.51%</td>
              <td >Buy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Terminal;