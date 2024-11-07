import { useForm } from "react-hook-form";
import ControlledFormInput from "../../../components/Inputs/ControlledInputAdmin";
import TableList from "../../../components/TableList";
import GeneralPage from "../Presentational/GeneralPage";
import { tableColumns } from "./constants";
import { mapAlarmHistoryList } from "./mapper";
import UserAdd from "../../../assets/user-add--01.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";
import ButtonBlue from "../../../components/Ui/ButtonBlue";
import { Search } from "../Presentational/Search";

const ManageUsers = () => {
  const { reset, control, handleSubmit } = useForm<any>({});
  const navigate = useNavigate();

  return (
    <GeneralPage
      title="STAFF INTERNO"
      subTitle="Utilizadores"
      topButtons={[
        {
          icon: UserAdd,
          label: "Novo",
          onClick: () => navigate(ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE),
        },
      ]}
    >
      <div style={{ maxWidth: "800px" }}>
        <Search />
      </div>
      <div style={{ marginTop: "30px" }}>
        <TableList
          columns={tableColumns}
          rows={mapAlarmHistoryList([1, 2, 2])}
          onAction={() => {}}
          pagination={{ page: 2, numberPages: 10 }}
        />
      </div>
    </GeneralPage>
  );
};

export default ManageUsers;
