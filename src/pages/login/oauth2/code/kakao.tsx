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
    if (!code) return;

    try {
      const response = await axios.get(
        `http://${BASE_URL}/login/oauth2/code/kakao?code=${code}&state=${state}`,
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      const data = response.data.data;
      console.log("Token response data:", data);
      setUser(data);
      LocalStorage.setItem("accessToken", data.accessToken);

      router.push("/signup-gender");
    } catch (error) {
      console.error("Failed to fetch token:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, [code]);

  useEffect(() => {
    console.log("User state:", user);
  }, [user]);

  return (
    <div>
      카카오 로그인 진행중 ...
      <br />
      Loading...
    </div>
  );
};

const KakaoWithRecoilRoot = () => (
  <RecoilRoot>
    <Kakao />
  </RecoilRoot>
);

export default KakaoWithRecoilRoot;
