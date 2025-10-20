// context/ActionContext.tsx
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Action as BaseAction } from "../types";
import { ButtonType } from "../components/Button";

export interface Action<T> extends Omit<BaseAction<T>, "onClick"> {
  modal?: string;
  onClick?: VoidFunction;
  variant?: ButtonType;
}

interface ActionContextType {
  actions: Action<unknown>[];
  registerActions: (actions: Action<unknown>[]) => void;
  unregisterActions: () => void;
}

export const ActionContext = createContext<ActionContextType | undefined>(
  undefined
);

export const ActionProvider = ({ children }: { children: ReactNode }) => {
  const [actions, setActions] = useState<Action<unknown>[]>([]);

  const registerActions = (items: Action<unknown>[]) => {
    if (actions.length > 0 && items.length !== 0) return; // prevent overwriting existing actions with empty array
    setActions(items);
  };

  const unregisterActions = () => {
    setActions([]);
  };

  return (
    <ActionContext.Provider
      value={{ actions, registerActions, unregisterActions }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export const useActionContext = (items?: Action<unknown>[]) => {
  const ctx = useContext(ActionContext);
  if (!ctx)
    throw new Error("useActionContext must be used within ActionProvider");

  const { registerActions, unregisterActions, actions } = ctx;

  // Auto-register + cleanup
  useEffect(() => {
    if (items) {
      registerActions(items);
    }
  }, [items]);

  return { registerActions, unregisterActions, actions };
};
