describe('test reducer', () => {
    it('should handle initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState)
    })
})