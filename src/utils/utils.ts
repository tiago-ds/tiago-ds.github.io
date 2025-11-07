export const createSpotifyTrackURL = (
	trackID: string | undefined
): string | undefined => {
	if (!trackID) {
		return;
	}

	return `https://open.spotify.com/track/${trackID}`;
};
