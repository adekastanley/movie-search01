import Search from "../Search";
import { useState } from "react";
import {
	Card,
	CardContent,
	// CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Homepage() {
	// const [results, setResults] = useState(null);
	const [results, setResults] = useState<any[]>([]);
	const [showSkeleton, setShowSkeleton] = useState(false);

	const flipSkeleton = (arg: boolean) => {
		setShowSkeleton(arg);
	};
	// const keysArray = Object.keys(results);

	// const valuesArray = Object.values(results);

	const handleSearchResults = (data: any) => {
		setResults(data);
	};

	console.log("this is results", results);
	return (
		<section className=" w-full  relative bg-[url(https://images.pexels.com/photos/6235464/pexels-photo-6235464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat bg-fixed">
			<div className="h-screen  w-full flex justify-center items-center relative ">
				<Search
					onSearchResults={handleSearchResults}
					flipSkeleton={flipSkeleton}
				/>
			</div>

			<div className=" h-auto absolute w-full top-[65%] sm:top-[70%] sm:px-20 bg-transparent">
				<div className="bg-transparent">
					{/* {results && showSkeleton ? (
						<DisplaySkeleton />
					) : (
						<DisplayCards results={results} />
					)} */}

					{results && <DisplayCards results={results} />}
					{showSkeleton && results && <DisplaySkeleton />}
				</div>
			</div>
		</section>
	);
}

const DisplayCards = ({ results }: { results: any }) => {
	// const isHandHeld = window.innerWidth < 1000;
	return (
		<div className="grid grid-cols-3 gap-1 sm:gap-4 px-2 ">
			{results.map((result: any, index: number) => (
				<Card className="rounded-lg" key={index}>
					<div className="">
						<img
							className="w-full  aspect-square rounded-t-lg"
							src={result.Poster}
							alt={result.Title}
						/>
					</div>
					<div className="flex flex-col gap-2 w-full px-2 sm:my-5">
						<CardHeader className="m-0 p-0">
							<CardTitle className="text-xs sm:text-base">
								{result.Title}
							</CardTitle>
						</CardHeader>

						<CardContent className="m-0 p-0">
							<div className="flex justify-between text-xs sm:text-base">
								<p>Year: {result.Year}</p>
							</div>
						</CardContent>
					</div>
					{/* {isHandHeld && (
						<CardFooter>
							<p>{results.year}</p>
						</CardFooter>
					)} */}
				</Card>
			))}
		</div>
	);
};

const DisplaySkeleton = () => {
	return (
		<div>
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		</div>
	);
};
