import axios from "axios";
import { loginState } from "@/recoil/state";
import { BASE_URL } from "@/utils/routePath";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import LocalStorage from "@/utils/localStorage";

const Kakao = () => {
  const router = useRouter();
  const code = router.query.code as string;
  const state = router.query.state as string;
  const [user, setUser] = useRecoilState(loginState);

  const getToken = async () => {
    if (!code) {
      return;
    }

    try {
      const response = await axios.get(
        `https://${BASE_URL}/login/oauth2/code/kakao?code=${code}&state=${state}`,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      const data = response.data.data;
      setUser(data);
      LocalStorage.setItem("accessToken", data.accessToken);
      LocalStorage.setItem("oauthAccessToken", data.oauthAccessToken);

      if (data.role === "ROLE_EMPTY") {
        router.push("/trainer-select");
      } else {
        router.push("/health-management");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>
        카카오 로그인 진행중 ...
        <br />
        Loading...
      </div>
    </>
  );
};

const KakaoWithRecoilRoot = () => (
  <RecoilRoot>
    <Kakao />
  </RecoilRoot>
);

export default KakaoWithRecoilRoot;
