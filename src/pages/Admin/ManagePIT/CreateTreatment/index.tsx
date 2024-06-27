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

import { ControlledFAQInput } from "../../../../components/Inputs/ControlledFAQInput";
import MultiSelectInput from "../../../../components/Inputs/MultiSelect/MultiSelectInput";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { LanguageContainer } from "../../Presentational/LanguageContainer";
import InfoCircle from "../../../../assets/info-circle.png";

const CreateTreatment = () => {
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
    listSpeciality,
    listBodyparts,
  } = useCreateProduct();

  const PTFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            DESCRIÇÃO DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInput
            label="H1 | Título"
            control={control}
            name="title_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>

        <Grid item xs={12}>
          <ControlledFormInput
            label="H2 | Subtítulo"
            control={control}
            name="subtitle_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInputEditor
            control={control}
            name="mainText_pt"
            label="Corpo Único"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            GUIA DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Procedimento "
            control={control}
            name="tprocediment_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Recuperação"
            control={control}
            name="trecuperation_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Anestesia"
            control={control}
            name="anesthetic_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Resultados"
            control={control}
            name="results_pt"
            inputPlaceholder="Escreva em Português"
          />
        </Grid>
      </Grid>
    );
  };
  const ENFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            DESCRIÇÃO DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInput
            label="H1 | Título"
            control={control}
            name="title_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>

        <Grid item xs={12}>
          <ControlledFormInput
            label="H2 | Subtítulo"
            control={control}
            name="subtitle_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInputEditor
            control={control}
            name="mainText_en"
            label="Corpo Único"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            GUIA DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Procedimento "
            control={control}
            name="tprocediment_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Recuperação"
            control={control}
            name="trecuperation_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Anestesia"
            control={control}
            name="anesthetic_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Resultados"
            control={control}
            name="results_en"
            inputPlaceholder="Escreva em Inglês"
          />
        </Grid>
      </Grid>
    );
  };
  const ESFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            DESCRIÇÃO DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInput
            label="H1 | Título"
            control={control}
            name="title_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>

        <Grid item xs={12}>
          <ControlledFormInput
            label="H2 | Subtítulo"
            control={control}
            name="subtitle_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledFormInputEditor
            control={control}
            name="mainText_es"
            label="Corpo Único"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography
            style={{
              color: "#848484",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            GUIA DE TRATAMENTO
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Procedimento "
            control={control}
            name="tprocediment_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Tempo Recuperação"
            control={control}
            name="trecuperation_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Anestesia"
            control={control}
            name="anesthetic_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>

        <Grid item xs={6}>
          <ControlledFormInput
            label="Resultados"
            control={control}
            name="results_es"
            inputPlaceholder="Escreva em Espanhol"
          />
        </Grid>
      </Grid>
    );
  };
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
        {isEditingProduct ? (
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
            <Box className={classes.inputBox}>
              <Grid container columnSpacing={"40px"}>
                <Grid item xs={5}>
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

                  <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={12}>
                      <Typography>Especialidade</Typography>
                      <ControlledSelect
                        control={control}
                        name="speciality"
                        options={listSpeciality}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Partes Corpo</Typography>
                      <MultiSelectInput
                        chips
                        items={listBodyparts}
                        control={control}
                        name="bodyPart"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Preocupações</Typography>
                      <MultiSelectInput
                        chips
                        items={listConcerns}
                        control={control}
                        name="concern"
                      />
                    </Grid>
                    <Grid item xs={4} style={{ marginTop: "40px" }}>
                      <FileUploaderAdmin
                        name="topImage"
                        hasLabel
                        control={control}
                        setValue={setValue}
                        setError={setError}
                        fieldTitle={"Imagem de Capa"}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      style={{ paddingTop: "40px", marginTop: "40px" }}
                    >
                      <ControlledFormInput
                        control={control}
                        name="topImageAlt"
                        inputPlaceholder="Alt text"
                      />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-10px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img src={InfoCircle} alt="" />
                        <p style={{ color: "#848484", fontSize: "10px" }}>
                          Nomeie corretamente a sua imagem antes de fazer o
                          upload.
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <FileUploaderAdmin
                        name="mainImage"
                        hasLabel
                        control={control}
                        setValue={setValue}
                        setError={setError}
                        fieldTitle={"Imagem de Corpo"}
                      />
                    </Grid>
                    <Grid item xs={8} style={{ paddingTop: "40px" }}>
                      <ControlledFormInput
                        control={control}
                        name="mainImageAlt"
                        inputPlaceholder="Alt text"
                      />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-10px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img src={InfoCircle} alt="" />
                        <p style={{ color: "#848484", fontSize: "10px" }}>
                          Nomeie corretamente a sua imagem antes de fazer o
                          upload.
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7}>
                  <LanguageContainer
                    childrenEN={<ENFields />}
                    childrenES={<ESFields />}
                    childrenPT={<PTFields />}
                  />
                </Grid>
              </Grid>
              <Box>
                <ControlledFAQInput
                  control={control}
                  name="listFAQ"
                  label="FAQ de tratamento"
                />
              </Box>
            </Box>
          </Box>
        )}
      </GeneralPage>
    </form>
  );
};

export default CreateTreatment;
