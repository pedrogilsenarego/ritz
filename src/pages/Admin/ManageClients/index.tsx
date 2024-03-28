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

const ManageClients = () => {
  const { reset, control, handleSubmit } = useForm<any>({});
  const navigate = useNavigate();

  return (
    <GeneralPage title="Dados de Cliente" subTitle="Clientes">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          columnGap: "40px",
        }}
      >
        <form style={{ width: "100%" }}>
          <div style={{ width: "100%", display: "flex", columnGap: "30px" }}>
            <ControlledFormInput
              fullWidth
              type="search"
              control={control}
              name="search"
              inputPlaceholder="Nome de cliente"
              style={{
                width: "100%",
                padding: "20px 3px",
                borderRadius: "15px",

                display: "flex",
              }}
            />
            <ControlledFormInput
              fullWidth
              type="search"
              control={control}
              name="nif"
              inputPlaceholder="NIF"
              style={{
                width: "100%",
                padding: "20px 3px",
                borderRadius: "15px",

                display: "flex",
              }}
            />
          </div>
        </form>
        <div>
          <ButtonBlue
            label="Novo"
            icon={UserAdd}
            onClick={() => navigate(ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE)}
          />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <TableList
          columns={tableColumns}
          rows={mapAlarmHistoryList([1, 2, 2, 4, 5])}
          onAction={() => {}}
          pagination={{ page: 2, numberPages: 10 }}
        />
      </div>
    </GeneralPage>
  );
};

export default ManageClients;
