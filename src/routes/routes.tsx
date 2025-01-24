import { createBrowserRouter } from "react-router-dom";
import Page from "@/app/dashboard/page";
import Animations from "@/components/pages/Animations";

import One from "@/components/pages/One";
import Interactions from "@/components/pages/Interactions";
const router = createBrowserRouter([
	{
		element: <Page />,
		children: [
			{
				path: "/",
				element: <One />,
			},
			{
				path: "/animations",
				element: <Animations />,
			},
			{
				path: "/interactions",
				element: <Interactions />,
			},
		],
	},
]);

export default router;
