import { AppDispatch, RootState } from "../app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
