
export function ThenObserverCallCountIs(mockObserver: jest.Mock, totalCalls: number): void {
	expect(mockObserver.mock.calls.length).toStrictEqual(totalCalls);
}

export function ThenObserverWasCalled<T>(mockObserver: jest.Mock, totalCalls: number, newValue: T): void {
	ThenObserverCallCountIs(mockObserver, totalCalls);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	expect(mockObserver.mock.calls[totalCalls - 1][0]).toStrictEqual(newValue);
}
