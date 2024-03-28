import ArrowRight from "../../../assets/arrow-right-02-round.svg";

const mapAlarmHistory = (alarm: any, index: number) => {
  return {
    id: index,
    name: "teste",
    telephone: "91765433",
    email: "pedrogilsenarego@gmail.com",
    processes: "5",
    actions: [
      {
        buttonType: "icon",
        event: "edit",
        icon: (
          <img
            src={ArrowRight}
            alt=""
            style={{ width: "24px", cursor: "pointer" }}
          />
        ),
        label: "Edit User",
      },
    ],
  };
};

export const mapAlarmHistoryList = (alarmHistory: any) => {
  return alarmHistory.map((alarm: any, index: number) =>
    mapAlarmHistory(alarm, index)
  );
};
