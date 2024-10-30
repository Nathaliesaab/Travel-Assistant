import { useState } from "react";
import { FiX } from "react-icons/fi";

export const Search = () => {
    const [search, setSearch] = useState<string>("");

    function inputChangeHandler(value: string) {
        setSearch(value);
    }

    return (
        <div className="flex items-center justify-center ">
            <div className="relative w-full max-w-3xl">
                <div className="mx-4 bg-white shadow-xl rounded-xl">
                    <input
                        className="w-full p-6 text-gray-700 placeholder-gray-400 outline-none rounded-xl"
                        type="text"
                        value={search}
                        placeholder="Search by Location, Time or Keyword"
                        onChange={({ target: { value } }) => inputChangeHandler(value)}
                    />
                    {search.length > 2 && (
                        <div
                            className="absolute text-gray-500 cursor-pointer top-6 right-8 hover:text-gray-700"
                            onClick={() => setSearch("")}
                        >
                            <FiX size={24} color={'#7342d6'} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
