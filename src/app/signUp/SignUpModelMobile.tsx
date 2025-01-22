import {
	Dialog,
	// DialogContent,
	// DialogDescription,
	// DialogHeader,
	// DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import siteImages from "@/assets/images/siteImages";
// import siteIcons from "@/assets/icons/siteIcons";
// import { Link } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import { useState } from "react";
import SelectSignUp from "./Components/SelectSignUp";

const SignUpModelMobile = () => {
	const [showEmailSignUP, setShowEmailSignUp] = useState(false);
	return (
		<Dialog>
			<DialogTrigger className="w-full py-2  rounded-xl outline outline-1 outline-primary hover:bg-primary hover:text-white">
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
export default SignUpModelMobile;
