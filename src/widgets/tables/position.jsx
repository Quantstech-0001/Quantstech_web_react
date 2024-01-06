export function PositionTable({ data }) {

    let headers = [
        "Symbol", "Product", "Buy/Sell", "Net Qty", "Avg Price", "LTD", "Realized P&L", "Unrealized P&L", "Total P&L", "Buy Qty", "Buy Avg", "Sell Qty", "Sell Avg", "Net Avg"
    ]

    return (
        <table className="w-full border-collapse">

            <thead className="border-b border-solid border-gray-300 text-sm text-gray-500 sticky top-0 z-20 bg-white">
                <tr className="z-20">
                    {
                        headers.map((item) => (
                            <th className="py-2 border-r border-solid border-gray-300 font-normal whitespace-nowrap" key={item}>{item}</th>
                        ))
                    }
                </tr>
            </thead>

            <tbody className="text-center text-sm text-gray-900 max-h-32 w-full">

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

                <tr className="border-b border-solid border-gray-300 hover:bg-gray-100">
                    <td className="border-r border-solid border-gray-300 py-2">Jio Fin Service</td>
                    <td className="border-x border-solid border-gray-300 py-2">product</td>
                    <td className="border-x border-solid border-gray-300 py-2">Buy</td>
                    <td className="border-x border-solid border-gray-300 py-2">net_qty</td>
                    <td className="border-x border-solid border-gray-300 py-2">avg_prc</td>
                    <td className="border-x border-solid border-gray-300 py-2">ltd</td>
                    <td className="border-l border-solid border-gray-300 py-2">r_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">ur_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">t_p_l</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">buy_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_qty</td>
                    <td className="border-l border-solid border-gray-300 py-2">sell_avg</td>
                    <td className="border-l border-solid border-gray-300 py-2">net_avg</td>
                </tr>

            </tbody>

        </table>
    )
}