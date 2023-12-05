import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/Themes/Default";
import { GlobalStyle } from "./Styles/Global";
import { Transactions } from "./Pages/Transactions/Transactions";
import { TransactionsProvider } from "./Contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        {" "}
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
