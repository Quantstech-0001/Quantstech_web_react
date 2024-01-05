import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip
} from "@material-tailwind/react";
import { authorsTableData } from "../../data";
import { stocksTableData } from "../../data/temporary_data";
import { BuySellModal } from '../../widgets/modals';

export function Stocks() {

    const [buySellModalOpen, setBuySellModalOpen] = useState(false);
    const [buySellData, setBuySellData] = useState({});

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12 relative">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Stocks Table
                    </Typography>
                </CardHeader>

                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["name", "function", "status", "employed", ""].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {stocksTableData.map(
                                ({ img, name, email, job, online, date }, key) => {
                                    const className = `py-3 px-5 ${key === authorsTableData.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <Avatar src={img} alt={name} size="sm" variant="rounded" />
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {name}
                                                        </Typography>
                                                        <Typography className="text-xs font-normal text-blue-gray-500">
                                                            {email}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {job[0]}
                                                </Typography>
                                                <Typography className="text-xs font-normal text-blue-gray-500">
                                                    {job[1]}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Chip
                                                    variant="gradient"
                                                    color={online ? "green" : "blue-gray"}
                                                    value={online ? "online" : "offline"}
                                                    className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                                />
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {date}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <button type="button" className="text-xs font-semibold text-blue-gray-600 px-2 py-0.5 rounded-lg hover:bg-green-600 hover:text-white" onClick={() => {
                                                    setBuySellModalOpen(true);
                                                    setBuySellData({
                                                        name: name,
                                                        img: img,
                                                        email: email
                                                    });
                                                }}> Buy </button>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>

            {buySellModalOpen &&
                <BuySellModal open={buySellModalOpen} setOpen={setBuySellModalOpen} data={buySellData} />
            }
        </div>
    );
}

export default Stocks;  