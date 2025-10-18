// context/ActionContext.tsx
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Action } from "../types";

interface ActionContextType {
  actions: Action<unknown>[];
  registerActions: (actions: Action<unknown>[]) => void;
  unregisterActions: () => void;
}

const ActionContext = createContext<ActionContextType | undefined>(undefined);

export const ActionProvider = ({ children }: { children: ReactNode }) => {
  const [actions, setActions] = useState<Action<unknown>[]>([]);

  const registerActions = (items: Action<unknown>[]) => {
    setActions((prev) => [...prev, ...items]);
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
      return () => unregisterActions();
    }
  }, [items, registerActions, unregisterActions]);

  return { registerActions, unregisterActions, actions };
};
