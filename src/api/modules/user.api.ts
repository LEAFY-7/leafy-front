import publicClient from "@api/clients/public.client";
import { handleError } from "@api/@utils/helpers";
import privateClient from "@api/clients/private.client";

/**
 * 자원명은 임시로 구성 추후에 회의에 따라 변경예정
 */

const userApiRoutes = {
  signIn: "user/signin",
  signUp: "user/signup",
  getInfo: "user/info",
  updateInfo: (userId: string) => `user/${userId}`,
};

const userApis = {
  signIn: async ({ email, password }: { email: string; password: string }) => {
    try {
      console.info("로그인 요청을 보내는 중 입니다. ");
      const response = await publicClient.post(userApiRoutes.signIn, {
        email,
        password,
      });
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  signUp: async ({
    email,
    password,
    confirmPassword,
    displayName,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
  }) => {
    try {
      const response = await publicClient.post(userApiRoutes.signUp, {
        email,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userApiRoutes.getInfo);
      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  updateInfo: async ({
    userId,
    password,
    newPassword,
    confirmNewPassword,
    displayName,
    phone,
    birthDate,
    address,
  }: {
    userId: string;
    password: string;
    newPassword: string;
    confirmNewPassword: string;
    displayName: string;
    phone: number;
    birthDate: string;
    address: {
      city: string;
      district: string;
    };
  }) => {
    try {
      const response = await privateClient.put(
        userApiRoutes.updateInfo(userId),
        {
          password,
          newPassword,
          confirmNewPassword,
          displayName,
          phone,
          birthDate,
          address,
        }
      );
      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
};
