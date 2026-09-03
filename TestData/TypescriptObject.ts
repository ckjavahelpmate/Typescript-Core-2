export const testData = {
    login: [
        {
            username: "user1",
            password: "pass1",
            expected: "success"
        },
        {
            username: "user2",
            password: "wrong",
            expected: "failure"
        }
    ],

    search: [
        {
            keyword: "TypeScript",
            expectedResult: "results found"
        },
        {
            keyword: "SDET",
            expectedResult: "results found"
        }
    ]
};