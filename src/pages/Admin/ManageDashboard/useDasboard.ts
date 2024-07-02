import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { useDashBoardActions } from "../../../actions/useDashboardActions";

export const useDashboard = () => {
  const { getMonthReports } = useDashBoardActions();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.dashboardMonthReport],
    getMonthReports
  );
  return { data };
};
