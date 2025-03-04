import {
	useState,
	// useEffect
} from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchProps {
	onSearchResults: (results: any) => void;
	flipSkeleton: (value: boolean) => void;
}

export default function Search({ onSearchResults, flipSkeleton }: SearchProps) {
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const fetchMovieData = async (searchQuery: string) => {
		setIsLoading(true);
		flipSkeleton(true);

		// console.log(import.meta.env.VITE_API_KEY);
		// imp
		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${
					import.meta.env.VITE_API_KEY
				}&s=${searchQuery}`
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			// console.log(data);

			onSearchResults(data.Search);
		} catch (error) {
			console.error("Error fetching data:", error);
			onSearchResults(null); // Pass null to indicate an error
		} finally {
			flipSkeleton(false);
			setIsLoading(false);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (query.trim()) {
			fetchMovieData(query);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full sm:w-1/3 mx-2 bg-white p-8 rounded-lg flex flex-col items-center gap-5"
		>
			<Input
				type="text"
				placeholder="Enter movie title"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				disabled={isLoading}
			/>
			<Button type="submit" disabled={isLoading} className="w-full">
				{isLoading ? "Searching..." : "Search"}
			</Button>
		</form>
	);
}
