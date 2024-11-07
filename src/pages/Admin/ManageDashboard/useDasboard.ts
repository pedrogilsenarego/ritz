import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { useDashBoardActions } from "../../../actions/useDashboardActions";

export const useDashboard = () => {
  const { getMonthReportsLatest } = useDashBoardActions();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.dashboardMonthReportLastest],
    getMonthReportsLatest
  );

  return { data };
};
