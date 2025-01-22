import { Button } from "@/components/ui/button";
import siteImages from "@/assets/images/siteImages";
import siteIcons from "@/assets/icons/siteIcons";
import { Link } from "react-router-dom";
import {
	// Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

const SelectSignUp = ({ setShowEmailSignUp }: any) => {
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

export default SelectSignUp;
