import Search from "../Search";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Homepage() {
	// const [results, setResults] = useState(null);
	const [results, setResults] = useState<any[]>([]);
	// const valuesArray = Object.values(results);

	const handleSearchResults = (data: any) => {
		setResults(data);
	};

	console.log("this is results", results);
	return (
		<section className=" w-full  relative">
			<div className="h-screen bg-green-300 w-full flex justify-center items-center relative">
				<Search onSearchResults={handleSearchResults} />
			</div>

			<div className="bg-yellow-300  h-auto absolute w-full top-[80%] sm:px-20">
				<div className="">{results && <DisplayCards results={results} />}</div>
			</div>
		</section>
	);
}

const DisplayCards = ({ results }: { results: any }) => {
	return (
		<div className="grid grid-cols-3 sm:gap-4">
			{results.map((result: any, index: number) => (
				<Card key={index}>
					<CardHeader>
						<div className="">
							<img className="w-full" src={result.Poster} alt={result.Title} />
						</div>
						<CardTitle className="text-xs sm:text-base">
							{result.Title}
						</CardTitle>
						<CardDescription>{result.Plot}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex justify-between">
							<p>Year: {result.Year}</p>
							<p>Genre: {result.Type}</p>
						</div>
					</CardContent>
					<CardFooter>
						<p>{results.year}</p>
					</CardFooter>
				</Card>
			))}
		</div>
	);
};
