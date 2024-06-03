export interface Actions {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}
export type NeedConfirmation = {
  declineButtonLabel: string;
  confirmationButtonLabel: string;
  onAccept: any;
  setOpenPopup: (openPopup: boolean) => void;
};
