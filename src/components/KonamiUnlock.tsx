import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useKonamiCode from "../hooks/useKonamiCode";
import { SECRET_PATH } from "../secret";

// Lives inside the router so it can navigate. Renders nothing.
export default function KonamiUnlock() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const unlock = useCallback(() => {
		if (pathname !== SECRET_PATH) {
			navigate(SECRET_PATH);
		}
	}, [navigate, pathname]);

	useKonamiCode(unlock);

	return null;
}
