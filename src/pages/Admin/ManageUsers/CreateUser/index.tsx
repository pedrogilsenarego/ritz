import GeneralPage from "../../Presentational/GeneralPage";
import User from "../../../../assets/Pic.svg";
import { Grid } from "@mui/material";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";

import Tick from "../../../../assets/tick-02.svg";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import { useCreateUser } from "./useCreateUser";

const CreateUser = () => {
  const { reset, control, handleSubmit, onSubmit } = useCreateUser();
  return (
    <form
      id="createUser-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ height: "100%" }}
    >
      <GeneralPage
        title="Novo Utilizador"
        subTitle="Staff Interno"
        topButtons={[
          {
            icon: Tick,
            label: "Guardar",
            type: "submit",
          },
        ]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
          >
            <img alt="" src={User} style={{ width: "58px" }} />
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "#515151",
                borderRadius: "20px",
                padding: "6px 20px",
              }}
            >
              <p style={{ fontWeight: 500, color: "white" }}>
                Editar Fotografia
              </p>
            </div>
            <div
              style={{ width: "2px", height: "30px", backgroundColor: "black" }}
            ></div>
            <p style={{ fontWeight: 600, fontSize: "24px" }}>Nome...</p>
          </div>
          <div>
            <p>Utilizador desde 5/03/2024</p>
          </div>
        </div>

        <Grid container columnSpacing={"150px"}>
          <Grid
            item
            xs={6}
            style={{ display: "flex", flexDirection: "column" }}
            rowGap={"30px"}
          >
            <ControlledFormInput
              label="Nome"
              control={control}
              name="username"
              type="default"
              inputPlaceholder="Nome"
            />
            <ControlledFormInput
              label="E-mail"
              control={control}
              name="email"
              type="default"
              inputPlaceholder="e-mail"
            />
            <ControlledFormInput
              label="Telefone"
              control={control}
              name="mobile"
              type="default"
              inputPlaceholder="telefone"
              width="60%"
            />
            <ControlledFormInput
              label="Função"
              control={control}
              name="role"
              type="default"
              inputPlaceholder="função"
              width="70%"
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", flexDirection: "column" }}
            rowGap={"30px"}
          >
            <ControlledSelect
              name="access"
              control={control}
              options={[{ value: "s", label: "dqdq" }]}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "6px",
              }}
            >
              <p
                style={{
                  color: "#575757",
                  fontSize: "10px",
                  lineHeight: "11px",
                }}
              >
                Dita que funcionalidades do sistema poderão ser utilizadas.
              </p>
              <p
                style={{
                  color: "#575757",
                  fontSize: "10px",
                  lineHeight: "11px",
                }}
              >
                Para alterar as permissões de cada acesso contacte o
                Departamento de Informática.
              </p>
            </div>
            <ControlledFormInput
              multiline
              label="Observações internas"
              control={control}
              name="observations"
              inputPlaceholder="Apenas visíveis para acessos administrativos."
            />
          </Grid>
        </Grid>
      </GeneralPage>
    </form>
  );
};

export default CreateUser;
