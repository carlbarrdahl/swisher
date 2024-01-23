import { useLocalStorage } from "react-use";

export function useSavedShop() {
  return useLocalStorage("swisher-shop");
}
