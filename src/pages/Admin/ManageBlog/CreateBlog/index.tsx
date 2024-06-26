import { Box, Grid } from "@mui/material";
import ControlledFormInputEditor from "../../../../components/Inputs/ControlledInputEditor";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import Loader from "../../../../components/Loader";
import { i18n } from "../../../../translations/i18n";
import useStyles from "./styles";
import useCreateProduct from "./useCreateProduct";
import GeneralPage from "../../Presentational/GeneralPage";
import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";
import Internet from "../../../../assets/internet.svg";
import FileUploaderAdmin from "../../../../components/Inputs/FileUploaderAdmin";
import InfoCircle from "../../../../assets/info-circle.png";
import { LanguageContainer } from "../../Presentational/LanguageContainer";

const CreateBlog = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    setError,
    watch,
    isSubmitting,
  } = useCreateProduct();

  const PTFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
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
      </Grid>
    );
  };
  const ENFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
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
      </Grid>
    );
  };
  const ESFields = () => {
    return (
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
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
      </Grid>
    );
  };
  return (
    <form
      className={classes.form}
      id="createBlog-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ height: "100%" }}
    >
      <GeneralPage
        title="Nova Publicação"
        subTitle="Blog EHTIQ"
        topButtons={[
          { label: "Preview", styles: { backgroundColor: "white" } },
          { label: "Publicar", icon: Internet, type: "submit" },
        ]}
      >
        {isSubmitting ? (
          <Loader
            customMessage={i18n.t(
              "pages.admin.createBlog.isCreatingProduct",
              "The entry is being created"
            )}
          />
        ) : (
          <Box className={classes.root}>
            <Box className={classes.inputBox}>
              <Grid container spacing={"80px"}>
                <Grid item xs={5}>
                  <Grid container spacing={2}>
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
                    <Grid item xs={4} style={{ marginTop: "40px" }}>
                      <FileUploaderAdmin
                        name="images"
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
                        name="altImage"
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
            </Box>
          </Box>
        )}
      </GeneralPage>
    </form>
  );
};

export default CreateBlog;
