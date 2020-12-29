import {fetch} from "../../../libs/base";

export const addDict = params =>{
  return fetch("/dict/adDict", params);
}

export const delDict = params =>{
  return fetch("/dict/delDict", params);
}

export const updateDict = params =>{
  return fetch("/dict/updateDict", params);
}

export const getListDict = params =>{
  return fetch("/dict/getListDict", params);
}

export const checkTypeAndCode = params =>{
  return fetch("/dict/checkTypeAndCode", params)
}
