import {
	// Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	// DialogTrigger,
} from "@/components/ui/dialog";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useToast } from "@/hooks/use-toast";

// import siteImages from "@/assets/images/siteImages";
import siteIcons from "@/assets/icons/siteIcons";

const SignUpForm = () => {
	const { toast } = useToast();

	const handleSignUp = () => {
		toast({
			title: "Sign Up",
			description: "Sign Up Successful",
		});
	};
	return (
		<DialogContent className="px- rounded-3xl bg-secondary w-full flex flex-col justify-center items-center">
			<DialogHeader>
				<DialogTitle className="">
					<img
						className="w-[10rem] mx-auto"
						src={siteIcons.logo2}
						alt="qupid logo"
					/>
				</DialogTitle>
				<DialogDescription className="text-center font-bold text-xl text-primary mt-2">
					Getting started? Sign up!
				</DialogDescription>
			</DialogHeader>
			<div className="w-full flex flex-col gap-2">
				<form className="flex flex-col gap-3 w-full">
					<div className="grid w-full  items-center gap-1.5 ">
						<Label htmlFor="name">Your name</Label>
						<Input className="" id="name" type="text" />
					</div>
					<div className="grid w-full  items-center gap-1.5 ">
						<Label htmlFor="username">Choose your username</Label>
						<Input id="username" type="text" />
					</div>
					<div className="grid w-full  items-center gap-1.5 ">
						<Label htmlFor="dob"></Label>Your birthday is
						<Input id="dob" type="text" />
					</div>
					<div className="grid w-full  items-center gap-1.5 ">
						<Label htmlFor="gender"></Label>I am a
						<Select>
							<SelectTrigger className="">
								<SelectValue placeholder="gender" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Man</SelectItem>
								<SelectItem value="dark">Woman</SelectItem>
								<SelectItem value="system">LGBTQAIP*2+7</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid w-full  items-center gap-1.5 ">
						<Label htmlFor="password"></Label>Password
						<Input id="password" type="password" />
					</div>
					<div className="flex flex-col gap-2 ">
						<div className="flex items-center space-x-2">
							<Checkbox id="age" />
							<label
								htmlFor="age"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I am 18 years or older
							</label>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox id="terms" />
							<label
								htmlFor="terms"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I accept Qupid’s{" "}
								<Link to={"/terms-and-conditions"} className="font-bold">
									terms and condition
								</Link>
							</label>
						</div>
					</div>
				</form>
				<Button
					onClick={handleSignUp}
					className="bg-primary rounded-3xl   outline-black text-white mt-10"
				>
					Sign Up
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
export default SignUpForm;
