describe("findReplace", function() {
  it("will find a one word phrase and replace it with a new word", function() {
    expect(findReplace("word", "word", "awesome")).to.equal("awesome")
  })

  it("will find many words in a sentence and replace it with a new word", function() {
    expect(findReplace("How much wood would you trade for more wood?", "wood", "steak")).to.equal("How much steak would you trade for more steak?")
  })

  it("will replace correctly even with special characters", function(){
    expect(findReplace("How much wood%#) would you trade for more wood?", "wood%#)", "wood")).to.equal("How much wood would you trade for more wood?")
  })
})
