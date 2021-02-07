const getMidIndex = (low, high) => Math.floor((low + high)/2);
const binary_search = (list, item) => {
	let low = 0, high = list.length-1;
	while (low <= high) {
		const mid = Math.floor((low + high)/2), guess = list[mid];
		if( guess === item ){
			return mid
		}
		else if(guess > item){
			high = mid - 1
		}
		else{
			low = mid +1
		}
	}
	return null;
}
const binary_search_improved = (list, item, mid = getMidIndex(0,list.length-1)) => {
	
	if (list[mid] === item){
		return mid
	}

	if (mid > 0){
		const { low, high } = getLimits(list, mid, getSearchDir(list[mid],item));
		return binary_search_improved(list, item, getMidIndex(low,high))
	}

	return null;
}

const getSearchDir = (guess, item) => guess > item ? "gt": "lt";

const getLimits = (list, mid, searchDir) => {

	const limitsByDirection={
		gt:{
			low: 0,
			high: mid-1
		},
		lt:{
			low: mid+1,
			high: list.length-1
		}
	}
	return limitsByDirection[searchDir]
}

export default binary_search_improved;