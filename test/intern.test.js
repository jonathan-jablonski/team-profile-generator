const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school via constructor argument", () => {
  const testValue = 100;
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getOffice()", () => {
  const testValue = 100;
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});