import { Box, Grid, Typography } from "@mui/material";
import ControlledFormInputEditor from "../../../../components/Inputs/ControlledInputEditor";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import Loader from "../../../../components/Loader";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";
import GeneralPage from "../../Presentational/GeneralPage";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";

import Internet from "../../../../assets/internet.svg";
import ArrowLeft from "../../../../assets/arrowLeft.png";
import FileUploaderAdmin from "../../../../components/Inputs/FileUploaderAdmin";

import { ControlledListDoubleInput } from "../../../../components/Inputs/ControlledListDoubleInput";
import MultiSelectInput from "../../../../components/Inputs/MultiSelect/MultiSelectInput";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";

interface Props {
  edit?: boolean;
}

const CreateTreatment = ({ edit = false }: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    setError,
    watch,
    listConcerns,
    isCreatingProduct,
    isEditingProduct,
    isLoadingProduct,
    imagesLoader,
    imagesValue,
    setTouchedImages,
  } = useCreateProduct({ edit });
  return (
    <form
      id="createBlog-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ height: "100%" }}
    >
      <GeneralPage
        title="PIT - Novo tratamento"
        subTitle="Tratamentos"
        topButtons={[
          { label: "Preview", styles: { backgroundColor: "white" } },
          { label: "Publicar", icon: Internet, type: "submit" },
        ]}
      >
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
          <Box className={classes.form}>
            <div
              onClick={() =>
                navigate(ROUTE_PATHS.ADMIN_MANAGE_CONTENT_TREATMENTS)
              }
              style={{
                display: "flex",
                columnGap: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img src={ArrowLeft} alt="" style={{ width: "20px" }} />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  textDecoration: "underline",
                }}
              >
                voltar
              </Typography>
            </div>
            <Box className={classes.inputBox}>
              <Grid container columnSpacing={"40px"}>
                <Grid item xs={5}>
                  <Grid container spacing={"80px"}>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography>Especialidade</Typography>
                          <ControlledSelect
                            control={control}
                            name="specialty"
                            options={[
                              { value: "1", label: "Estética e cirurgia" },
                              { value: "2", label: "Dentária" },
                              { value: "3", label: "Pós Cirurgia e Bem estar" },
                              { value: "4", label: "Saude Preventiva" },
                            ]}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MultiSelectInput
                            chips
                            items={[
                              { title: "Face", value: "1" },
                              { title: "Smile", value: "2" },
                              { title: "Body", value: "3" },
                              { title: "Health 360", value: "4" },
                            ]}
                            control={control}
                            label="Partes corpo"
                            name="bodyPart"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MultiSelectInput
                            chips
                            items={listConcerns}
                            control={control}
                            label="Preocupações"
                            name="concerns"
                          />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "40px" }}>
                          <FileUploaderAdmin
                            name="topImage"
                            hasLabel
                            loading={imagesLoader}
                            touched={setTouchedImages}
                            value={imagesValue || undefined}
                            control={control}
                            setValue={setValue}
                            setError={setError}
                            fieldTitle={"ImagemTopo"}
                          />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "40px" }}>
                          <FileUploaderAdmin
                            name="mainImage"
                            hasLabel
                            loading={imagesLoader}
                            touched={setTouchedImages}
                            value={imagesValue || undefined}
                            control={control}
                            setValue={setValue}
                            setError={setError}
                            fieldTitle={"ImagemPrincipal"}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7}>
                  <Grid container spacing={"80px"}>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Título PT"
                            control={control}
                            name="title_pt"
                            inputPlaceholder="Escreva o Título"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Título EN"
                            control={control}
                            name="title_en"
                            inputPlaceholder="Escreva o Título"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Título ES"
                            control={control}
                            name="title_es"
                            inputPlaceholder="Escreva o Título"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="SubTítulo PT"
                            control={control}
                            name="subtitle_pt"
                            inputPlaceholder="Escreva Subtítulo"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="SubTítulo EN"
                            control={control}
                            name="subtitle_en"
                            inputPlaceholder="Escreva Subtítulo"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="SubTítulo ES"
                            control={control}
                            name="subtitle_es"
                            inputPlaceholder="Escreva Subtítulo"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Typography>Especialidade</Typography>
                          <ControlledSelect
                            control={control}
                            name="specialty"
                            options={[
                              { value: "1", label: "Estética e cirurgia" },
                              { value: "2", label: "Dentária" },
                              { value: "3", label: "Pós Cirurgia e Bem estar" },
                              { value: "4", label: "Saude Preventiva" },
                            ]}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <MultiSelectInput
                            chips
                            items={[
                              { title: "Face", value: "1" },
                              { title: "Smile", value: "2" },
                              { title: "Body", value: "3" },
                              { title: "Health 360", value: "4" },
                            ]}
                            control={control}
                            label="Partes corpo"
                            name="bodyPart"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <MultiSelectInput
                            chips
                            items={listConcerns}
                            control={control}
                            label="Preocupações"
                            name="concerns"
                          />
                        </Grid>

                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Procedimento PT"
                            control={control}
                            name="tprocediment_pt"
                            inputPlaceholder="T procedimento"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Procedimento EN"
                            control={control}
                            name="tprocediment_en"
                            inputPlaceholder="T procedimento"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Procedimento ES"
                            control={control}
                            name="tprocediment_es"
                            inputPlaceholder="T procedimento"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Recuperação PT"
                            control={control}
                            name="trecuperation_pt"
                            inputPlaceholder="T recuperação"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Recuperação EN"
                            control={control}
                            name="trecuperation_en"
                            inputPlaceholder="T recuperação"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Tempo Recuperação ES"
                            control={control}
                            name="trecuperation_es"
                            inputPlaceholder="T recuperação"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Anestesia PT"
                            control={control}
                            name="anesthetic_pt"
                            inputPlaceholder="anestesia"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Anestesia EN"
                            control={control}
                            name="anesthetic_en"
                            inputPlaceholder="anestesia"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Anestesia ES"
                            control={control}
                            name="anesthetic_es"
                            inputPlaceholder="anestesia"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Results PT"
                            control={control}
                            name="results_pt"
                            inputPlaceholder="Resultados"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Results EN"
                            control={control}
                            name="results_en"
                            inputPlaceholder="Resultados"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <ControlledFormInput
                            label="Results ES"
                            control={control}
                            name="results_es"
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
                                name="topImage"
                                hasLabel
                                loading={imagesLoader}
                                touched={setTouchedImages}
                                value={imagesValue || undefined}
                                control={control}
                                setValue={setValue}
                                setError={setError}
                                fieldTitle={"ImagemTopo"}
                              />
                            </div>
                          </div>
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
                                name="mainImage"
                                hasLabel
                                loading={imagesLoader}
                                touched={setTouchedImages}
                                value={imagesValue || undefined}
                                control={control}
                                setValue={setValue}
                                setError={setError}
                                fieldTitle={"ImagemPrincipal"}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "40px" }}>
                          <ControlledFormInputEditor
                            control={control}
                            name="mainText_pt"
                            label="Texto  PT"
                            inputPlaceholder={i18n.t(
                              "pages.admin.createProducts.form.maintextPT",
                              "Main text PT"
                            )}
                          />
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "40px" }}>
                          <ControlledFormInputEditor
                            control={control}
                            name="mainText_en"
                            label="Texto principal EN"
                            inputPlaceholder={i18n.t(
                              "pages.admin.createProducts.form.maintextPT",
                              "Main text PT"
                            )}
                          />
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "40px" }}>
                          <ControlledFormInputEditor
                            control={control}
                            name="mainText_es"
                            label="Texto principal ES"
                            inputPlaceholder={i18n.t(
                              "pages.admin.createProducts.form.maintextPT",
                              "Main text PT"
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </GeneralPage>
    </form>
  );
};

export default CreateTreatment;
