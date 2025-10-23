import { PersistGate } from "redux-persist/integration/react";
import Router from "./router";
import { persistor, store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
