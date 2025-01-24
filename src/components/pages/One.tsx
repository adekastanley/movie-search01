import { Button } from "../ui/button";
import backgrounds from "@/assets/backgrounds/backgrounds";
import { useIsMobile } from "@/hooks/use-mobile";

const One = () => {
	const isMobile = useIsMobile();
	return (
		<div className=" min-h-screen relative bg-black">
			<section className="w-full h-full flex  pt-40 flex-col items-center gap-5 bg-transparent">
				<h1 className="font-bold text-2xl sm:text-6xl text-white text-center ">
					GDG Web Development Track
				</h1>
				<p className="font-semibold text-white text-center ">
					Learn useful tech skills today
				</p>
				<Button>Get Started</Button>

				<div className="">
					<img
						className="w-[60rem] h-auto  object-fill sm:rounded-lg"
						src={backgrounds.two}
						alt=""
					/>
				</div>
			</section>
			<section className="">
				<p className="text-center my-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex
					eaque consequuntur reprehenderit aperiam explicabo tenetur neque,
					ducimus similique omnis?
				</p>
			</section>
			<section className="flex flex-col sm:flex-row  gap-5 sm:px-20">
				<div className="w-full h-full">
					<div className=" h-[20rem]  bg-[#EF3054] w-full"></div>
					{!isMobile && <div className=" h-[20rem]  bg-[#EF3054] w-full"></div>}
				</div>
				<div className="w-full h-full flex flex-col max-sm:gap-5">
					<div className="h-[20rem] bg-[#FF715B] w-full"></div>
					<div className="h-[20rem] bg-[#1EA896] w-full"></div>
				</div>
			</section>
		</div>
	);
};
export default One;
