import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { BreadcrumbState, setBreadcrumbAction } from "../store/breadcrumbSlice";

const useBreadcrumb = (title?: string, subtitle?: string): BreadcrumbState => {
  const breadcrumb = useSelector<RootState, BreadcrumbState>(
    (state) => state.breadcrumb
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (title && subtitle) {
      dispatch(setBreadcrumbAction({ title, subtitle }));
    }
  }, [title, subtitle, dispatch]);

  return breadcrumb;
};

export default useBreadcrumb;
