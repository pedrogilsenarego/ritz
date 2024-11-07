import ControlledFormInput from "../../../../components/Inputs/ControlledInputAdmin";
import { useForm } from "react-hook-form";

export const Search = () => {
  const { reset, control, handleSubmit } = useForm<any>({});
  return (
    <form style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <ControlledFormInput
          fullWidth
          type="search"
          control={control}
          name="search"
          inputPlaceholder="Encontrar páginas"
          style={{
            width: "100%",
            padding: "20px 3px",
            borderRadius: "15px",

            display: "flex",
          }}
        />
      </div>
    </form>
  );
};
