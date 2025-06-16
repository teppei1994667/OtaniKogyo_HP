import { TextField, TextFieldProps } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

type FormTextFieldProps = TextFieldProps & {
  name: string;
  rules?: RegisterOptions;
};

export const FormTextField = (props: FormTextFieldProps) => {
  const { name, rules, className, ...restProps } = props;
  const form = useFormContext();
  return (
    <Controller
      name={name}
      control={form.control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          variant="outlined"
          error={!!error}
          helperText={error ? error.message : ""}
          className={`w-88 sm:w-96 ${className || ""}`}
          {...restProps}
        />
      )}
    />
  );
};
