import { PersistGate } from "redux-persist/integration/react";
import Router from "./router";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
