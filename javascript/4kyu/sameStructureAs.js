Array.prototype.sameStructureAs = function (other) {
	console.log(other);
	if (!isArray(other)) {
		return false;
	}

	const checkArray = (arr1, arr2) => {
		if (arr1.length !== arr2.length) {
			return false;
		}
		for (let i = 0; i < arr1.length; i++) {
			if (isArray(arr1[i]) !== isArray(arr2[i])) {
				return false;
			}

			if (isArray[arr1[i]] === false && isArray[arr2[i]] === false) {
				continue;
			}

			if (isArray[arr1[i]] === true && isArray[arr2[i]] === true) {
				if (!checkArray(arr1[i], arr2[i])) {
					return false;
				}
			}
		}

		return true;
	};

	return checkArray(this, other);
};
