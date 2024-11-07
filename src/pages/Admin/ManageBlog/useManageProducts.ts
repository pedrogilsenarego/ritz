import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { useBlogServices } from "../../../services/useBlogServices";
import { BlogList } from "./types";

const useManageProducts = () => {
  const { getBlogs } = useBlogServices();
  const { isLoading, data } = useQuery<BlogList, any>(
    [queryKeys.blogs],
    getBlogs
  );

  const handleAction = async (type: string, id: number, value?: any) => {
    switch (type) {
      case "edit": {
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
