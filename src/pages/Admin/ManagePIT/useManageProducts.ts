import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";
import { useCreateNewTreatment } from "../../../services/useCreateNewTreatment";
import { queryKeys } from "../../../constants/queryKeys";

const useManageProducts = () => {
  const { getTreatments } = useCreateNewTreatment();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.treatments],
    getTreatments
  );
  const navigate = useNavigate();

  const handleAction = async (type: string, id: number, value?: any) => {
    switch (type) {
      case "visit": {
        const treatment = data.results[id];

        navigate(ROUTE_PATHS.TREATMENT_ID.replace(":id", treatment.id));
        break;
      }
      case "edit": {
        const treatment = data.results[id];

        navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENT_CREATE_NEW, {
          state: { treatment },
        });
        break;
      }
      case "delete": {
        break;
      }
      default:
        break;
    }
  };
  return { handleAction, isLoading, data };
};

export default useManageProducts;
