import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Filter_Search } from "../api/location_apis";

export const Search = () => {
    const [search, setSearch] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (search.length > 2) {
                handleFilterSearch(search);
            } else {
                setFilteredResults([]);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);

    const handleFilterSearch = async (query: string) => {
        setIsLoading(true);
        try {
            const [data, error] = await Filter_Search({ baseFilters: { name: query } });
            if (data) {
                setFilteredResults(data);
            } 
        } catch (error) {
            console.error("Error in handleFilterSearch:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const goToEvent = (id: string) => {
        // navigate(`/event/${id}`);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full max-w-3xl">
                <div className="bg-white shadow-xl rounded-xl z-[100]">
                    <input
                        className="w-full p-6 text-gray-700 placeholder-gray-400 outline-none rounded-xl max-w-[90%]"
                        type="text"
                        value={search}
                        placeholder="Search by Location, Time, or Keyword"
                        onChange={({ target: { value } }) => setSearch(value)}
                    />
                    {search.length > 2 && (
                        <div
                            className="absolute text-gray-500 bg-white cursor-pointer top-6 right-8 hover:text-gray-700"
                            onClick={() => setSearch("")}
                        >
                            <FiX size={24} color={"#7342d6"} />
                        </div>
                    )}
                </div>

                {/* Display Results */}
                <div
                    className="absolute w-full max-h-[320px] overflow-y-auto bg-white shadow-lg rounded-xl mt-1 z-10"
                    style={{ scrollbarWidth: 'none' }}
                >
                    <div className="bg-white">
                        {isLoading ? (
                            <ul className="divide-y">
                                {/* Loading state styled as a non-clickable list item */}
                                <li className="p-4 text-gray-500 cursor-not-allowed">
                                    <span className="text-center">Searching...</span>
                                </li>
                            </ul>
                        ) : filteredResults?.length > 0 ? (
                            <ul className="divide-y">
                                {filteredResults?.map((location) => (
                                    <li
                                        key={location.id}
                                        className="p-4 transition duration-200 ease-in-out transform cursor-pointer hover:bg-gray-100"
                                        onClick={() => goToEvent(location.id)}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                                        <p className="text-sm text-gray-600">{location.address}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (search.length > 3 && !isLoading) && (
                            // No results state styled as a non-clickable list item
                            <ul className="divide-y">
                                <li className="p-4 text-gray-500 cursor-not-allowed">
                                    <span className="text-center">No results found.</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};