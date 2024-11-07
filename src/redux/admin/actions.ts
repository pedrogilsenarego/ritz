import adminTypes from "./types";

//notifications
export const updatePreviewState = (payload: any) => ({
  type: adminTypes.PREVIEW_PIT,
  payload,
});
