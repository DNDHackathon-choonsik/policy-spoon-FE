import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
interface ILogin {
  role: string;
  access: string;
  refresh: string;
}

export const loginState = atom<ILogin>({
  key: "loginState",
  default: {
    role: "ROLE_EMPTY",
    access: "",
    refresh: "",
  },
  effects_UNSTABLE: [persistAtom],
});
