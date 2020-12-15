import {fetch} from "../libs/base";

export const login = params =>{
  return fetch("/login", params);
}
