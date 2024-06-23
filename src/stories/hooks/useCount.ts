import { useCallback, useState } from "react";

export const useCount = (initialValue = 1) => {
	const [count, setCount] = useState(initialValue);

	const decrement = useCallback(() => {
		setCount((currentCount) => (currentCount > 1 ? currentCount - 1 : 1));
	}, []);

	const increment = useCallback(() => {
		setCount((currentCount) => currentCount + 1);
	}, []);

	return { count, increment, decrement };
};
