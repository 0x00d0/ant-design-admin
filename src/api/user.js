import {fetch} from "../libs/base";

export const login = params =>{
  return fetch("/api/login", params);
}
