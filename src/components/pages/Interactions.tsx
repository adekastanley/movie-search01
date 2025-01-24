import { motion } from "motion/react";
// import { Button } from "../ui/button";
const Interactions = () => {
	return (
		<div className="bg-black min-h-screen w-full ">
			<section className="flex  pt-40 flex-col items-center gap-5">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1 } }}
					exit={{ opacity: 0 }}
					whileHover={{
						scale: 1.2,
						transition: { duration: 1 },
					}}
					whileTap={{ scale: 0.9 }}
					className="w-[20rem] bg-red-800 flex  pt-40 flex-col items-center gap-5"
				></motion.div>
			</section>
		</div>
	);
};
export default Interactions;
