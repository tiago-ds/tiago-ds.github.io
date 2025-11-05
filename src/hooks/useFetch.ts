import axios from "axios";
import { useState, useCallback, useEffect } from "react";

interface FetchState<Data> {
	data: Data | null;
	loading: boolean;
}

const useFetch = <Data,>(url: string): FetchState<Data> => {
	const [data, setData] = useState<Data | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setData(null);

			const { data, status } = await axios.get(url);

			if (status !== 200) {
				throw new Error("Unable to fetch data");
			}

			setData(data.trackData);
		} catch (error) {
			console.log("Unable to fetch data: ", error);
			setData(null);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, loading };
};

export default useFetch;
