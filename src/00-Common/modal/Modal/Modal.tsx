import Portal from "../Portal/Portal";
import { useMount } from "./useMount";
import { Layout } from "./Layout/Layout";
import {FC, ReactNode} from "react";

type ModalType = {
    opened: boolean
    onClose: ()=> void
    children: ReactNode
}


export const Modal:FC<ModalType>  = ({ opened, onClose, children }) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};
