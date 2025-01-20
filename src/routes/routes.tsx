import { createBrowserRouter } from "react-router-dom";
import Base from "@/layouts/Base";
import Home from "@/pages/home";

import Login from "@/pages/login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Base />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

export default router;
