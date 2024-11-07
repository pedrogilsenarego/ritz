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
import { useDispatch } from "react-redux";
import { updatePreviewState } from "../../../../redux/admin/actions";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const user = useUser();
  const dispatch = useDispatch();
  const { createNewBlog } = useBlogServices();

  const {
    reset,
    control,
    handleSubmit,
    setValue,
    setError,
    getValues,
    watch,
    formState,
  } = useForm({
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

  const handlePreview = async (e: any) => {
    e.preventDefault();

    const updatedFormData = await prepareFormData(getValues()); // Prepare the form data (including converting images)

    dispatch(updatePreviewState(updatedFormData)); // Dispatch the action with updated form data

    const url = ROUTE_PATHS.BLOG_DETAIL.replace(":id", "preview");
    window.open(url, "_blank", "noreferrer");
  };

  const prepareFormData = async (formData: any) => {
    const updatedFormData = { ...formData }; // Clone the form data

    // Convert topImage if it's a FileList to a URL
    if (updatedFormData.image instanceof FileList) {
      updatedFormData.image = await convertFileListToUrl(updatedFormData.image);
    }

    return updatedFormData;
  };

  const convertFileListToUrl = async (
    fileList: FileList
  ): Promise<string | undefined> => {
    if (fileList.length === 0) return undefined; // Handle empty FileList

    const file = fileList[0]; // Get the first file from the FileList
    const imageUrl = URL.createObjectURL(file); // Create URL for the file
    return imageUrl;
  };

  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isSubmitting,
    setError,
    handlePreview,
    listcategories,
    watch,
  };
};

export default useCreateProduct;
