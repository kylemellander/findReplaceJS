describe("findReplace", function() {
  it("will find a one word phrase and replace it with a new word", function() {
    expect(findReplace("word", "word", "awesome")).to.equal("awesome")
  })
})
