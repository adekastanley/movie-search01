import siteIcons from "@/assets/icons/siteIcons";
import siteLinks from "@/routes/links";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import SignUpModelPc from "@/app/signUp/SignUpModelPc";
import SignUpModelMobile from "@/app/signUp/SignUpModelMobile";

import {
	Drawer,
	// DrawerClose,
	DrawerContent,
	// DrawerDescription,
	DrawerFooter,
	// DrawerHeader,
	// DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

const NavBar = () => {
	const isTablet = typeof window !== "undefined" && window.innerWidth < 1200;
	return <>{isTablet ? <MobileNav /> : <PcNav />}</>;
};
export default NavBar;

const MobileNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-5 mt-5 absolute ">
			<div>
				<Link to={"/"}>
					<img className="w-20" src={siteIcons.logo} alt="qupid logo" />
				</Link>
			</div>
			{/* <div className="flex gap-10">
				<Button variant="outline" className="rounded-xl">
					Download Qupid
				</Button>
			</div> */}
			<div>
				<Drawer>
					<DrawerTrigger>
						<FaBars size={32} />
					</DrawerTrigger>
					<DrawerContent>
						{/* <DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader> */}
						<DrawerFooter>
							<SignUpModelMobile />

							<Button>Download On Android</Button>
							{/* <DrawerClose>
								<Button variant="outline">Cancel</Button>
							</DrawerClose> */}
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	);
};
const PcNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-28 mt-5 absolute z-10 ">
			<Link to={siteLinks.signUp}>
				<img className="w-20" src={siteIcons.logo} alt="qupid logo" />
			</Link>
			<div className="flex gap-10">
				<SignUpModelPc />
				<Button className="rounded-xl bg-primary text-white outline outline-1 outline-primary hover:bg-transparent hover:text-primary ">
					Download On Android
				</Button>
			</div>
		</header>
	);
};
