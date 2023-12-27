//Store nav path data
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
// export const pathState = atom({ key: "pathState", default: [0] });
export const activePathState = atom({ key: "activePathState", default: [0], effects: [persistAtom] });
