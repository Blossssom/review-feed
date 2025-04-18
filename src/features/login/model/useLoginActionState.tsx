import { redirect } from "next/navigation";
import { useActionState } from "react";

import { AuthFormState } from "@/features/auth/model/auth.interface";
import { login } from "@/features/login/api/login";
import { MAIN_PATHNAME } from "@/shared/config/pathname";

export const useLoginActionState = () => {
  const loginWithFormData = async (
    prevState: AuthFormState,
    formData: FormData,
  ) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await login({ email, password });

    if (res.message !== "SUCCESS") {
      return res;
    }

    redirect(MAIN_PATHNAME);
  };

  const [loginFormState, loginFormAction] = useActionState<
    AuthFormState,
    FormData
  >(loginWithFormData, null);

  return { loginFormState, loginFormAction };
};
