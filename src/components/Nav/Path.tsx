//Store nav path data
import { atom } from "recoil";

export const pathState = atom({ key: "pathState", default: [0] });
export const activePathState = atom({ key: "activePathState", default: [0] });
