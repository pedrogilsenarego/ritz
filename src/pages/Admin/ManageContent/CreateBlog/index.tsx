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
    watch,
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
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <MultiControlInput
                        miniLabels={["PT", "EN", "ES"]}
                        names={["titlePT", "titleEN", "titleES"]}
                        control={control}
                        placeholders={[
                          "Escreva em Português",
                          "Escreva em Inglês",
                          "Escreva em Espanhol",
                        ]}
                        watch={watch}
                      >
                        <MultiControlInputLabel>
                          H1|Título
                        </MultiControlInputLabel>
                      </MultiControlInput>
                    </Grid>
                    <Grid item xs={12}>
                      <ControlledFormInput
                        label="H2|Subtítulo"
                        control={control}
                        name="subtitlePT"
                        inputPlaceholder="Escreva em Português"
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
                        name="mainTextPT"
                        label="Corpo Único"
                        inputPlaceholder={i18n.t(
                          "pages.admin.createProducts.form.maintextPT",
                          "Main text PT"
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid item xs={12} marginTop={"30px"}>
                    <ControlledSelect
                      control={control}
                      name="template"
                      options={[
                        { value: "1", label: "1 -  Capa > Corpo" },
                        { value: "2", label: "2 -  Corpo > Imagem > Corpo" },
                      ]}
                      defaultLabel={"Template"}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <ControlledSelect
                      balls
                      control={control}
                      name="tag"
                      options={[
                        { value: "1", label: "ESTÉTICA" },
                        { value: "2", label: "CIRÚRGICO" },
                      ]}
                      defaultLabel={"Template"}
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
