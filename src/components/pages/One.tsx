import { Button } from "../ui/button";
import backgrounds from "@/assets/backgrounds/backgrounds";

const One = () => {
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
						className="w-[60rem] h-auto  object-fill rounded-lg"
						src={backgrounds.one}
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
			<section>
				<div></div>
				<div></div>
			</section>
		</div>
	);
};
export default One;
