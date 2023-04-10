import React from "react";
import { PaginationPropsType } from "./pagination.type";

const Pagination = (props: PaginationPropsType) => {
    const { pages, page, setPage } = props;

    return (
        <div className="text-center mt-5">
            <button
                disabled={pages === page}
                onClick={() => setPage((p) => p + 1)}
                className={`text-gray-600 mr-2 cursor-pointer py-0 font-medium px-2 border-2 border-blue-400 ${pages === page
                    ? "bg-blue-400 text-white border-blue-400"
                    : ""
                    } hover:bg-blue-400  hover:text-white transition-all`}
            >
                Next
            </button>

            {[...Array(pages).keys()].map((number) => (
                <button
                    key={number}
                    className={`px-3 py-[3px] mr-1 leading-tight text-gray-700  border border-blue-300 hover:bg-blue-400 hover:text-white transition-all  ${page === number + 1 ? "bg-blue-400 text-white" : ""
                        }`}
                    onClick={() => setPage(number + 1)}
                >
                    {number + 1}
                </button>
            ))}
            <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className={`text-gray-600 ml-1 cursor-pointer py-0 font-medium px-2 border-2  border-blue-400 ${page === 1
                    ? "bg-blue-400 text-white border-blue-400"
                    : ""
                    } hover:bg-blue-400  hover:text-white transition-all`}
            >
                Prev
            </button>
        </div>
    );
};

export default Pagination;
