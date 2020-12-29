import {fetch} from "../../../libs/base";

export const addDict = params =>{
  return fetch("/dict/adDict", params);
}

export const checkTypeAndCode = params =>{
  return fetch("/dict/checkTypeAndCode", params)
}
