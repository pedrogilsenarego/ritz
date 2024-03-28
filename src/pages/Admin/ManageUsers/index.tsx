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

const ManageUsers = () => {
  const { reset, control, handleSubmit } = useForm<any>({});
  const navigate = useNavigate();

  return (
    <GeneralPage title="STAFF INTERNO" subTitle="Utilizadores">
      <div
        style={{
          display: "flex",
          width: "100%",
          columnGap: "40px",
        }}
      >
        <form style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <ControlledFormInput
              fullWidth
              type="search"
              control={control}
              name="search"
              inputPlaceholder="Encontrar páginas"
              style={{
                width: "100%",
                padding: "20px 3px",
                borderRadius: "15px",
                background: "red",
                display: "flex",
              }}
            />
          </div>
        </form>

        <ButtonBlue
          label="Novo"
          icon={UserAdd}
          onClick={() => navigate(ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE)}
        />
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
