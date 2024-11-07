import { z } from "zod";
import { i18n } from "../../../../../../translations/i18n";

export const CreateUserSchema = z
  .object({
    username: z.string({
      required_error: i18n.t(
        "pages.access.subpages.login.validation.usernameRequired",
        "The username is required"
      ),
    }),
    email: z
      .string()
      .email({
        message: i18n.t(
          "pages.access.subpages.login.validation.invalidEmail",
          "Invalid email address"
        ),
      })
      .min(1, {
        message: i18n.t(
          "pages.access.subpages.login.validation.emailRequired",
          "The email is required"
        ),
      }),
    phone: z.string().optional(),
    prePhone: z.string().optional(),

    password: z
      .string({
        required_error: i18n.t(
          "pages.access.subpages.login.validation.passwordRequired",
          "The password is required"
        ),
      })
      .min(
        6,
        i18n.t(
          "pages.access.subpages.login.validation.passwordShort",
          "The password is to short"
        )
      ),
    confirmPassword: z
      .string({
        required_error: i18n.t(
          "pages.access.subpages.login.validation.passwordRequired",
          "The password is required"
        ),
      })
      .min(6, "passwordTooShort"),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;
