import { Box, Divider, Grid, useMediaQuery, useTheme } from "@mui/material";
import ControlledFormInput from "../../components/Inputs/ControlledInput";
import ControlledSelect from "../../components/Inputs/ControlledSelect";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Button";
import { i18n } from "../../translations/i18n";
import { countryOptions } from "./constants";
import useStyles from "./styles";
import useRegister from "./useRegister";

const Register = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isEditing } = useRegister();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("md"));
  return (
    <>
      {isEditing ? (
        <Loader />
      ) : (
        <Box
          className={classes.root}
          style={{ padding: mobile ? undefined : "80px 40px 0px 40px" }}
        >
          {" "}
          <form
            className={classes.form}
            id="login-in"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={2}>
                <Grid item xs={12} mt="50px">
                  <Divider>Personal Data</Divider>
                </Grid>

                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="phone"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.phone",
                      "Phone"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="fullName"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.fullName",
                      "Full Name"
                    )}
                  />
                </Grid>
                <Grid item xs={12} mt="50px">
                  <Divider>Address</Divider>
                </Grid>

                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="address1"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.address1",
                      "Address line 1"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="address2"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.address2",
                      "Address line 2"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="city"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.city",
                      "City"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="postalCode"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.postalCode",
                      "Postal Code"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledSelect
                    control={control}
                    name="country"
                    options={countryOptions}
                    defaultLabel={countryOptions[0].label}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button type="submit" darkenColors>
              {i18n.t("pages.myCollection.edit", "Edit Information")}
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default Register;
