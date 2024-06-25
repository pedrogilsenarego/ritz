import { useNavigate } from "react-router-dom";
import useManageProducts from "./useManageProducts";
import Eye from "../../../assets/eye.svg";
import SquareEdit from "../../../assets/dashboard-square-edit.svg";
import ControlledFormInput from "../../../components/Inputs/ControlledInputAdmin";
import { useForm } from "react-hook-form";
import GeneralPage from "../Presentational/GeneralPage";
import { ROUTE_PATHS } from "../../../routes/constants";
import Plus from "../../../assets/plus.svg";
import TableList from "../../../components/TableList";
import { tableColumns } from "./constants";
import { mapProductsData } from "./mapper";
import { AdminCard } from "../../../components/Atoms/AdminCard";

const ManageContent = () => {
  const { isLoading, data, handleAction } = useManageProducts();
  const navigate = useNavigate();
  const { reset, control, handleSubmit } = useForm<any>({});

  return (
    <GeneralPage
      title="BLOG EHTIQ"
      subTitle="Gestão Conteúdos"
      topButtons={[
        {
          icon: Plus,
          label: "Nova",
          onClick: () =>
            navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG_CREATE_NEW),
        },
      ]}
    >
      <div style={{ maxWidth: "800px" }}>
        <form>
          <ControlledFormInput
            type="search"
            control={control}
            name="search"
            inputPlaceholder="Encontrar páginas"
            style={{
              width: "100%",
              padding: "20px 3px",
              borderRadius: "15px",
              background: "red",
            }}
          />
        </form>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={{ width: "70%" }}>
          <TableList
            loading={isLoading}
            columns={tableColumns}
            rows={mapProductsData(data?.results || [])}
            onAction={handleAction}
            pagination={{ page: 1, numberPages: data?.count || 0 }}
          />
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <AdminCard>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 400,
                textTransform: "uppercase",
              }}
            >
              páginas do blog
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                marginTop: "50px",
                marginLeft: "30px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: 400,

                  lineHeight: "50px",
                }}
              >
                {data?.count}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <p
                  style={{
                    marginTop: "calc(50px - 16px)",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#636262",
                    lineHeight: "14px",
                  }}
                >
                  Páginas
                </p>
              </div>
            </div>
          </AdminCard>
          <AdminCard>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                Etiquetas
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                Estética
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                Estética
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                Estética
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                Estética
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                Estética
              </p>
            </div>
          </AdminCard>
        </div>
      </div>
    </GeneralPage>
  );
};

export default ManageContent;
