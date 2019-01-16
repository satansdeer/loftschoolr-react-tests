import { take, put } from "redux-saga/effects";
import { changeNameSaga } from "./changeNameSaga";
import { CHOOSE_NAME, chooseName, updateUser } from "./actions";

describe("changeNameSaga", () => {
  const gen = changeNameSaga();

  it("takes CHOOSE_NAME action", () => {
    expect(gen.next().value).toEqual(take(CHOOSE_NAME));
  });

  it("dispatches an action to update user", () => {
    expect(gen.next(chooseName("Maksim")).value).toEqual(
      put(updateUser("Maksim"))
    );
  });
});
