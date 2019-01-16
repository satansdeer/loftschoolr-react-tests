export const UPDATE_USER = "UDATE_USER";
export const CHOOSE_NAME = "CHOOSE_NAME";

export const chooseName = name => ({
  type: CHOOSE_NAME,
  payload: {
    name
  }
});

export const updateUser = name => ({
  type: UPDATE_USER,
  payload: {
    name
  }
});
