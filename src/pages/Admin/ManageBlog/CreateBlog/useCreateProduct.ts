import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { defaultValues } from "./constants";
import { FORM_VALIDATION } from "./validation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { useBlogServices } from "../../../../services/useBlogServices";
import { queryKeys } from "../../../../constants/queryKeys";
import { handleFetchBlogCategories } from "../../../../actions/blog";
import useUser from "../../../../hooks/useUser";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const user = useUser();

  const { createNewBlog } = useBlogServices();

  const { reset, control, handleSubmit, setValue, setError, watch, formState } =
    useForm({
      resolver: yupResolver(FORM_VALIDATION),
      defaultValues: defaultValues,
    });

  const isSubmitting = false;

  const { data: dataCategories } = useQuery<any, any>(
    [queryKeys.blogCategories],
    () => handleFetchBlogCategories()
  );

  const listcategories = dataCategories
    ? dataCategories?.results?.map((concern: any) => ({
        label: concern.category_pt,
        value: concern.id,
        color: concern.colour,
      }))
    : [];

  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation(
    createNewBlog,
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_BLOG);
      },
    }
  );

  const onSubmit = async (formData: any) => {
    const newData = formData;
    newData.author = user?.data?.Data.id;
    createProduct(formData);
    console.log("submited", formData);
    return;
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isSubmitting,
    setError,
    listcategories,
    watch,
  };
};

export default useCreateProduct;
