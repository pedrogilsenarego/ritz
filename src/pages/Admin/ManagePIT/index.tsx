import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import useManageProducts from "./useManageProducts";
import { useForm } from "react-hook-form";
import Plus from "../../../assets/plus.svg";
import GeneralPage from "../Presentational/GeneralPage";

import { ROUTE_PATHS } from "../../../routes/constants";
import { queryKeys } from "../../../constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useCreateNewTreatment } from "../../../services/useCreateNewTreatment";
import TableList from "../../../components/TableList";
import { tableColumns } from "./constants";
import { mapProductsData } from "./mapper";
import { Search } from "../Presentational/Search";

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
      topButtons={[
        {
          icon: Plus,
          label: "Nova",
          onClick: () =>
            navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENT_CREATE_NEW),
        },
      ]}
      title="Páginas Individuais de Tratamento"
      subTitle="Gestão Conteúdos"
    >
      <div style={{ marginTop: "0px" }}>
        <div style={{ width: "80%", padding: "10px" }}>
          <Search />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TableList
            loading={isLoading}
            columns={tableColumns}
            rows={mapProductsData(data?.results || [])}
            onAction={() => {}}
            pagination={{ page: 1, numberPages: data?.count || 0 }}
          />
        </div>
      </div>
    </GeneralPage>
  );
};

export default ManageContent;
