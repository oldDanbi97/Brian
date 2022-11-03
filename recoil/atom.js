import {atom} from "recoil";

export const menuOpen = atom({
  key: "menuOpen",
  default: false
});

export const recoilText = atom({
  key: "recoilText",
  default: ""
})