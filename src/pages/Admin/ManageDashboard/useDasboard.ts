import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { useDashBoardActions } from "../../../actions/useDashboardActions";

export const useDashboard = () => {
  const { getMonthReportsLatest, getMonthReportsList } = useDashBoardActions();
  const { isLoading, data } = useQuery<any, any>(
    [queryKeys.dashboardMonthReportLastest],
    getMonthReportsLatest
  );
  const {
    isLoading: loadingMonthReportList,
    data: dataDashboardMonthReportList,
  } = useQuery<any, any>(
    [queryKeys.dashboardMonthReportList],
    getMonthReportsList
  );

  return { data, dataDashboardMonthReportList };
};
