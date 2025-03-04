import Homepage from "@/components/pages/Homepage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
		],
	},
]);

export default router;
