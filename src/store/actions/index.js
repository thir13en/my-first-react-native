export const SelectLibrary = libraryId => ({
  type: 'select_library',
  payload: libraryId
});

export const EmailChanged = text => ({
  type: 'email_changed',
  payload: text
});
