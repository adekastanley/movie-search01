import {
	Dialog,
	DialogContent,
	// DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import siteImages from "@/assets/images/siteImages";
import siteIcons from "@/assets/icons/siteIcons";
import { Link } from "react-router-dom";

import { useState } from "react";

import SignUpForm from "./Components/SignUpForm";

const SignUpModelPc = () => {
	const [showEmailSignUP, setShowEmailSignUp] = useState(false);

	return (
		<Dialog>
			<DialogTrigger className=" px-8 rounded-xl outline outline-1 outline-primary hover:bg-primary hover:text-white">
				Sign Up
			</DialogTrigger>

			<>
				{!showEmailSignUP ? (
					<SelectSignUp setShowEmailSignUp={setShowEmailSignUp} />
				) : (
					<SignUpForm />
				)}
			</>
		</Dialog>
	);
};
export default SignUpModelPc;
//@ts-ignore
const SelectSignUp = ({ setShowEmailSignUp }) => {
	return (
		<DialogContent className="px-20 rounded-3xl bg-secondary">
			<DialogHeader>
				<DialogTitle className="">
					<img
						className="w-[10rem] mx-auto"
						src={siteIcons.logo2}
						alt="qupid logo"
					/>
				</DialogTitle>
			</DialogHeader>
			<div className="w-full flex flex-col gap-3 ">
				<img src={siteImages.birds} alt="" />
				<Button
					className="bg-primary rounded-3xl   outline-black text-white mt-10"
					onClick={() => setShowEmailSignUp(true)}
				>
					Continue with email
				</Button>
				<Button className="bg-transparent text-black rounded-3xl outline outline-1 outline-black ">
					Continue with Facebook
				</Button>
				<Button className="bg-transparent  text-black rounded-3xl outline outline-1 outline-black ">
					Continue with Google
				</Button>
				<p className="text-center ">
					Already have an account?{" "}
					<Link className="underline" to={"/login"}>
						Login
					</Link>
				</p>
			</div>
		</DialogContent>
	);
};
