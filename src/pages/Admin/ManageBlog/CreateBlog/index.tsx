import { Box, Divider, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../../components/Inputs/ControlledInput";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import FileUploader from "../../../../components/Inputs/FileUploader";
import Loader from "../../../../components/Loader";
import Button from "../../../../components/Ui/Button";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";

interface Props {
  edit?: boolean;
}

const CreateBlog = ({ edit = false }: Props) => {
  const classes = useStyles();
  const {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    setError,
    isCreatingProduct,
    isEditingProduct,
    isLoadingProduct,
    imagesLoader,
    imagesValue,
    setTouchedImages,
  } = useCreateProduct({ edit });
  return (
    <>
      <Typography fontSize="16px">
        {edit
          ? i18n.t(
              "pages.admin.createBlog.editTitle",
              "Manage Blog - Edit Blog Entry"
            )
          : i18n.t(
              "pages.admin.createBlog.title",
              "Manage Blog - Create Blog Entry"
            )}
      </Typography>
      <Divider />
      {isCreatingProduct || isEditingProduct || (isLoadingProduct && edit) ? (
        <Loader
          customMessage={
            isCreatingProduct
              ? i18n.t(
                  "pages.admin.createBlog.isCreatingProduct",
                  "The entry is being created"
                )
              : i18n.t(
                  "pages.admin.createBlog.isLoadingProduct",
                  "The entry is being fetched"
                )
          }
        />
      ) : (
        <Box className={classes.root}>
          {" "}
          <form
            className={classes.form}
            id="createBlog-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FileUploader
                    name="images"
                    multiple
                    loading={imagesLoader}
                    touched={setTouchedImages}
                    value={imagesValue || undefined}
                    control={control}
                    setValue={setValue}
                    setError={setError}
                    fieldTitle={i18n.t(
                      "pages.admin.createProducts.form.images",
                      "Images"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="titlePT"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.titlePT",
                      "Title PT"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="titleEN"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.titleEN",
                      "Title EN"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="subtitlePT"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.subtitlePT",
                      "SubTitle PT"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledFormInput
                    control={control}
                    name="subtitleEN"
                    inputPlaceholder={i18n.t(
                      "pages.admin.createProducts.form.subtitlePT",
                      "SubTitle EN"
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ControlledSelect
                    control={control}
                    name="clinic"
                    options={[
                      { value: "clinic1", label: "Clinic1" },
                      { value: "clinic2", label: "Clinic2" },
                      { value: "clinic3", label: "Clinic3" },
                      { value: "clinic4", label: "Clinic4" },
                    ]}
                    defaultLabel={i18n.t(
                      "pages.admin.createProducts.form.clinic",
                      "Clinic"
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button type="submit" darkenColors>
              {i18n.t(
                "pages.admin.createProducts.form.submitBlogEntry",
                "Create Blog Entry"
              )}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default CreateBlog;
