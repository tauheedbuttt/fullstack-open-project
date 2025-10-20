import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useMemo } from "react";
import { BreadcrumbState, setBreadcrumbAction } from "../store/breadcrumbSlice";
import { Action, useActionContext } from "../context/ActionContext";

const useBreadcrumb = (
  title?: string,
  subtitle?: string,
  actions: Action<unknown>[] = []
): BreadcrumbState => {
  const breadcrumb = useSelector<RootState, BreadcrumbState>(
    (state) => state.breadcrumb
  );
  const dispatch = useDispatch();
  const memoActions = useMemo(() => actions, []);
  useActionContext(memoActions);

  useEffect(() => {
    if (title && subtitle) {
      dispatch(setBreadcrumbAction({ title, subtitle }));
    }
  }, [title, subtitle, dispatch]);

  return breadcrumb;
};

export default useBreadcrumb;
