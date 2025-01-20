import { createBrowserRouter } from "react-router-dom";
import siteLinks from "./links";
import Base from "@/layouts/Base";

import Home from "@/pages/home";
import Terms from "@/pages/terms";

import Login from "@/pages/login";
import SignUp from "@/pages/signUp";

const router = createBrowserRouter([
	{
		// path: "/",
		element: <Base />,
		children: [
			{
				path: siteLinks.Home,
				element: <Home />,
			},
			{
				path: siteLinks.terms,
				element: <Terms />,
			},
		],
	},
	{
		path: siteLinks.Login,
		element: <Login />,
	},
	{
		path: siteLinks.signUp,
		element: <SignUp />,
	},
]);

export default router;
