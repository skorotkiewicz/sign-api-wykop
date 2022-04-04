const { signApi } = require("./index");

test("test sign to md5 with query content", () => {
  expect(
    signApi(
      "Search/Entries/page/1",
      { q: "openai", votes: 100, when: "week" },
      "APPK3Y",
      "S3CR3T"
    )
  ).toBe("2b59a009d3b608d37e899b64bd3bd1bb");
});
