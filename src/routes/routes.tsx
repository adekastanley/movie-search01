import { createBrowserRouter } from "react-router-dom";
import Base from "@/layouts/Base";
import Home from "@/pages/home";

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
]);

export default router;
