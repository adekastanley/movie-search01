import { createBrowserRouter } from "react-router-dom";
import siteLinks from "./links";
import Base from "@/layouts/Base";

import Home from "@/pages/home";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";

import Login from "@/pages/login";
import SignUp from "@/pages/signUp";
import CookiePolicy from "@/pages/cookiePolicy";
import HelpPage from "@/pages/helpAndSupport";
import SafetyTipsPage from "@/pages/safety";

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
			{
				path: siteLinks.privacy,
				element: <Privacy />,
			},
			{
				path: siteLinks.cookie,
				element: <CookiePolicy />,
			},
			{
				path: siteLinks.cookie,
				element: <HelpPage />,
			},
			{
				path: siteLinks.safety,
				element: <SafetyTipsPage />,
			},
			{
				path: siteLinks.help,
				element: <HelpPage />,
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
