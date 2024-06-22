import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import useManageProducts from "./useManageProducts";
import { useForm } from "react-hook-form";
import Edit from "../../../assets/Component 1.svg";
import GeneralPage from "../Presentational/GeneralPage";
import ButtonBlue from "../../../components/Ui/ButtonBlue";
import { ROUTE_PATHS } from "../../../routes/constants";
import { queryKeys } from "../../../constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useCreateNewTreatment } from "../../../services/useCreateNewTreatment";
import TableList from "../../../components/TableList";
import { tableColumns } from "./constants";
import { mapProductsData } from "./mapper";

const ManageContent = () => {
  const classes = useStyles();
  const {} = useManageProducts();
  const navigate = useNavigate();
  const { getTreatments } = useCreateNewTreatment();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.treatments],
    getTreatments
  );

  const { reset, control, handleSubmit } = useForm<any>({});

  return (
    <GeneralPage
      title="Páginas Individuais de Tratamento"
      subTitle="Gestão Conteúdos"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
        }}
      >
        <ButtonBlue
          label="Nova Página"
          icon={Edit}
          onClick={() =>
            navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENT_CREATE_NEW)
          }
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <TableList
          loading={isLoading}
          columns={tableColumns}
          rows={mapProductsData(data?.results || [])}
          onAction={() => {}}
          pagination={{ page: 1, numberPages: data?.count || 0 }}
        />
      </div>
    </GeneralPage>
  );
};

export default ManageContent;
