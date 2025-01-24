import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const shapes = [
	{ type: "circle", color: "bg-purple-500" },
	{ type: "square", color: "bg-blue-500" },
	{
		type: "triangle",
		color: "border-l-green-500 border-r-green-500 border-b-green-500",
	},
	{ type: "pentagon", color: "text-yellow-500" },
	{ type: "hexagon", color: "text-pink-500" },
	{ type: "star", color: "text-red-500" },
];

const Animations = () => {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating((prev) => !prev);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold text-white mb-8">
				Animated Shapes Showcase
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
				{shapes.map((shape, index) => (
					<motion.div
						key={index}
						className="w-40 h-40 flex items-center justify-center"
						animate={{
							scale: isAnimating ? [1, 1.2, 1] : 1,
							rotate: isAnimating ? [0, 360, 0] : 0,
						}}
						transition={{
							duration: 2,
							ease: "easeInOut",
							times: [0, 0.5, 1],
							loop: Number.POSITIVE_INFINITY,
						}}
					>
						<Shape type={shape.type} color={shape.color} />
					</motion.div>
				))}
			</div>
			<button
				className="mt-8 px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition-colors"
				onClick={() => setIsAnimating((prev) => !prev)}
			>
				{isAnimating ? "Pause Animation" : "Start Animation"}
			</button>
		</div>
	);
};
export default Animations;

function Shape({ type, color }: { type: string; color: string }) {
	switch (type) {
		case "circle":
			return <div className={`w-32 h-32 rounded-full ${color}`} />;
		case "square":
			return <div className={`w-32 h-32 ${color}`} />;
		case "triangle":
			return (
				<div
					className={`w-0 h-0 
            border-l-[60px] border-l-transparent
            border-r-[60px] border-r-transparent
            border-b-[104px] ${color}`}
				/>
			);
		case "pentagon":
			return (
				<svg viewBox="0 0 100 100" className={`w-32 h-32 ${color}`}>
					<polygon
						points="50 0, 100 38, 82 100, 18 100, 0 38"
						fill="currentColor"
					/>
				</svg>
			);
		case "hexagon":
			return (
				<svg viewBox="0 0 100 100" className={`w-32 h-32 ${color}`}>
					<polygon
						points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25"
						fill="currentColor"
					/>
				</svg>
			);
		case "star":
			return (
				<svg viewBox="0 0 100 100" className={`w-32 h-32 ${color}`}>
					<polygon
						points="50 0, 61 35, 98 35, 68 57, 79 91, 50 70, 21 91, 32 57, 2 35, 39 35"
						fill="currentColor"
					/>
				</svg>
			);
		default:
			return null;
	}
}
