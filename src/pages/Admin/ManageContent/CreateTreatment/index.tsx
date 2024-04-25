import { Box, Grid } from "@mui/material";
import ControlledFormInputEditor from "../../../../components/Inputs/ControlledInputEditor";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import Loader from "../../../../components/Loader";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";
import GeneralPage from "../../Presentational/GeneralPage";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";
import ButtonBlue from "../../../../components/Ui/ButtonBlue";
import Internet from "../../../../assets/internet.svg";
import Eye from "../../../../assets/eye.svg";
import FileUploaderAdmin from "../../../../components/Inputs/FileUploaderAdmin";
import {
  MultiControlInput,
  MultiControlInputLabel,
} from "../../../../components/Inputs/MultiControlledInput";
import { ControlledListDoubleInput } from "../../../../components/Inputs/ControlledListDoubleInput";

interface Props {
  edit?: boolean;
}

const CreateTreatment = ({ edit = false }: Props) => {
  const classes = useStyles();

  const {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    setError,
    watch,
    isCreatingProduct,
    isEditingProduct,
    isLoadingProduct,
    imagesLoader,
    imagesValue,
    setTouchedImages,
  } = useCreateProduct({ edit });
  return (
    <GeneralPage title="Novo tratamento" subTitle="Tratamentos">
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
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="Título"
                        control={control}
                        name="title"
                        inputPlaceholder="Escreva o Título"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="SubTítulo"
                        control={control}
                        name="subtitle"
                        inputPlaceholder="Escreva Subtítulo"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="specialty"
                        control={control}
                        name="specialty"
                        inputPlaceholder="Escreva Especialidade"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="Tempo Procedimento"
                        control={control}
                        name="tprocediment"
                        inputPlaceholder="T procedimento"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="Tempo Recuperação"
                        control={control}
                        name="trecuperation"
                        inputPlaceholder="T recuperação"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="Anestesia"
                        control={control}
                        name="anesthetic"
                        inputPlaceholder="anestesia"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="Results"
                        control={control}
                        name="results"
                        inputPlaceholder="Resultados"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledListDoubleInput
                        control={control}
                        name="listFAQ"
                        label="Adicionar FAQ"
                      />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "40px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "end",
                          columnGap: "10px",
                          width: "70%",
                        }}
                      >
                        <div style={{ width: "25%" }}>
                          <FileUploaderAdmin
                            name="images"
                            hasLabel
                            loading={imagesLoader}
                            touched={setTouchedImages}
                            value={imagesValue || undefined}
                            control={control}
                            setValue={setValue}
                            setError={setError}
                            fieldTitle={"Imagem Única"}
                          />
                        </div>
                        <div style={{ width: "50%" }}>
                          <ControlledFormInput
                            label=""
                            control={control}
                            name="altImage"
                            inputPlaceholder="Alt text"
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "40px" }}>
                      <ControlledFormInputEditor
                        control={control}
                        name="mainText"
                        label="Texto principal"
                        inputPlaceholder={i18n.t(
                          "pages.admin.createProducts.form.maintextPT",
                          "Main text PT"
                        )}
                      />
                    </Grid>
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

export default CreateTreatment;
