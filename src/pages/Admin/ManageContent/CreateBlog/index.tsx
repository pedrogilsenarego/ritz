import { Box, Grid } from "@mui/material";

import ControlledFormInputEditor from "../../../../components/Inputs/ControlledInputEditor";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import FileUploader from "../../../../components/Inputs/FileUploader";
import MultiSelectInput from "../../../../components/Inputs/MultiSelect/MultiSelectInput";
import Loader from "../../../../components/Loader";

import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";
import GeneralPage from "../../Presentational/GeneralPage";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";
import ButtonBlue from "../../../../components/Ui/ButtonBlue";
import Internet from "../../../../assets/internet.svg";
import Eye from "../../../../assets/eye.svg";

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
    <GeneralPage title="Nova Publicação" subTitle="Blog EHTIQ">
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
          <form
            className={classes.form}
            id="createBlog-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={"80px"}>
                <Grid item xs={8}>
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="H1|Título"
                        control={control}
                        name="titlePT"
                        inputPlaceholder="Escreva em Português"
                      />
                      <ControlledFormInput
                        control={control}
                        name="titleEN"
                        inputPlaceholder="Escreva em Inglês"
                      />
                      <ControlledFormInput
                        control={control}
                        name="ES"
                        inputPlaceholder="Escreva em Espanhol"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="H2|Subtítulo"
                        control={control}
                        name="subtitlePT"
                        inputPlaceholder="Escreva em Português"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FileUploader
                        name="images"
                        hasLabel
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

                    <Grid item xs={12}>
                      <ControlledFormInputEditor
                        control={control}
                        name="mainTextPT"
                        label={i18n.t(
                          "pages.admin.createProducts.form.maintextPT",
                          "Main text PT"
                        )}
                        inputPlaceholder={i18n.t(
                          "pages.admin.createProducts.form.maintextPT",
                          "Main text PT"
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid item xs={12}>
                    <ControlledSelect
                      control={control}
                      label="Template"
                      name="clinic"
                      options={[
                        { value: "clinic1", label: "Clinic1" },
                        { value: "clinic2", label: "Clinic2" },
                        { value: "clinic3", label: "Clinic3" },
                        { value: "clinic4", label: "Clinic4" },
                      ]}
                      defaultLabel={"Template"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MultiSelectInput
                      disableDefaultLabel
                      setValue={setValue}
                      multiple
                      control={control}
                      chips
                      label="Etiqueta"
                      items={[
                        {
                          value: "unique",
                          title: "Unique",
                          titlePT: "Unico",
                        },
                        {
                          value: "original",
                          title: "Original",
                          titlePT: "Original",
                        },
                        { value: "kids", title: "Kids", titlePT: "Crianças" },
                      ]}
                      name="etiqueta"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "end",
                columnGap: "30px",
              }}
            >
              <div>
                <ButtonBlue
                  label="Pre-visualizar"
                  icon={Eye}
                  styles={{ backgroundColor: "white" }}
                />
              </div>
              <div>
                <ButtonBlue
                  type="submit"
                  label="Publicar"
                  icon={Internet}
                ></ButtonBlue>
              </div>
            </Box>
          </form>
        </Box>
      )}
    </GeneralPage>
  );
};

export default CreateBlog;
