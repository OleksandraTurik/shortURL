import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStore } from "../redux";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
