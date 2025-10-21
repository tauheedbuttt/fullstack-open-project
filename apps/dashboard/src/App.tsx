import Layout from "./components/Layout";
import Router from "./components/Router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ActionProvider } from "./context/ActionContext";

const App = () => {
  return (
    <ErrorBoundary>
      <ActionProvider>
        <Layout>
          <Router />
        </Layout>
      </ActionProvider>
    </ErrorBoundary>
  );
};

export default App;
