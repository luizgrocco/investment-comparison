import React from "react";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import AppInitializer from "./AppInitializer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { render } from "react-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 24 * 60 * 60 * 1000 },
  },
});

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ReduxProvider store={store}>
        <AppInitializer />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
