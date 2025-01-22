import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import siteImages from "@/assets/images/siteImages";
import siteIcons from "@/assets/icons/siteIcons";
import { Link } from "react-router-dom";

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	return (
		<form className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<div className="">
					<img src={siteIcons.logo2} alt="qupid logo" />
				</div>
				<div className="text-balance text-sm text-muted-foreground">
					<img src={siteImages.birds} alt="" />
				</div>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Username/email</Label>
					<Input
						className="rounded-xl"
						id="email"
						type="email"
						placeholder="username/email"
						required
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
					</div>
					<Input
						className="rounded-xl"
						id="password"
						type="password"
						required
					/>
				</div>
				<p className="text-center font-bold">Forgot password?</p>
				<Button type="submit" className="w-full rounded-xl">
					Login
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link to="/sign-up" className="underline underline-offset-4">
					Sign up
				</Link>
			</div>
		</form>
	);
}
