describe("person", () => {
  beforeEach(() => {});

  beforeEach(() => {});

  it("should have name", () => {
    const person = {
      name: null,
      setName: name => {
        this.name = name;
      }
    };
    person.setName("Maksim");
    expect(person.name).toBeTruthy();
  });
});
