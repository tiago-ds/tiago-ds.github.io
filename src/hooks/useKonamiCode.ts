import { useEffect, useRef } from "react";

const KONAMI_CODE = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];

// Rolling buffer rather than an index, so a false start still matches.
export default function useKonamiCode(onUnlock: () => void) {
	const onUnlockRef = useRef(onUnlock);

	useEffect(() => {
		onUnlockRef.current = onUnlock;
	}, [onUnlock]);

	useEffect(() => {
		let buffer: string[] = [];

		const handleKeyDown = (event: KeyboardEvent) => {
			const key =
				event.key.length === 1 ? event.key.toLowerCase() : event.key;

			buffer = [...buffer, key].slice(-KONAMI_CODE.length);

			if (
				buffer.length === KONAMI_CODE.length &&
				KONAMI_CODE.every((expected, i) => expected === buffer[i])
			) {
				buffer = [];
				onUnlockRef.current();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
}
