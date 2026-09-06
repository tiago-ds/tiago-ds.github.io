import { useCallback, useEffect, useRef } from "react";

/**
 * Returns a click handler that fires `onComplete` after `taps` taps, as long
 * as the gaps stay under `windowMs`. Pausing mid-way starts the count over.
 */
export default function useTapSequence(
	taps: number,
	onComplete: () => void,
	windowMs = 1500
) {
	const count = useRef(0);
	const timer = useRef<number | undefined>(undefined);
	const onCompleteRef = useRef(onComplete);

	useEffect(() => {
		onCompleteRef.current = onComplete;
	}, [onComplete]);

	useEffect(() => {
		return () => window.clearTimeout(timer.current);
	}, []);

	return useCallback(() => {
		window.clearTimeout(timer.current);
		count.current += 1;

		if (count.current >= taps) {
			count.current = 0;
			onCompleteRef.current();
			return;
		}

		timer.current = window.setTimeout(() => {
			count.current = 0;
		}, windowMs);
	}, [taps, windowMs]);
}
