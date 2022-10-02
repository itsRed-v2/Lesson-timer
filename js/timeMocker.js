let mockedTimeOffset;

function setMockTime(hours, minutes) {
	let now = new Date();
	let mockNow = new Date();
	mockNow.setHours(hours, minutes);

	mockedTimeOffset = mockNow.getTime() - now.getTime();
}

function unmockTime() {
	mockedTimeOffset = undefined;
}

function dateNow() {
	if (mockedTimeOffset) {
		return new Date(Date.now() + mockedTimeOffset);
	} else {
		return new Date();
	}
}