import { useNavigate } from "react-router-dom";

import useManageProducts from "./useManageProducts";
import { useForm } from "react-hook-form";
import Plus from "../../../assets/plus.svg";
import GeneralPage from "../Presentational/GeneralPage";

import { ROUTE_PATHS } from "../../../routes/constants";

import TableList from "../../../components/TableList";
import { tableColumns } from "./constants";
import { mapProductsData } from "./mapper";
import { Search } from "../Presentational/Search";

const ManageContent = () => {
  const { handleAction, isLoading, data } = useManageProducts();
  const navigate = useNavigate();

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
            onAction={handleAction}
            pagination={{ page: 1, numberPages: data?.count || 0 }}
          />
        </div>
      </div>
    </GeneralPage>
  );
};

export default ManageContent;
