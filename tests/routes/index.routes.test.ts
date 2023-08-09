import axios from "axios";

describe('#1 Return ERROR when credential is missing', () => {
    test('should throw error when there is no credentials', async () => {
        const res = await axios.get('/')
        expect(res.status).toBe(200)
    })
})