import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Styles";
import Logo from "../../Assets/Ignite-logo.svg";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="logo-application" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
