import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
} from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { CrossOutlinedIcon } from "../../assets";
import { AppDispatch, RootState } from "../../store";
import { setOpen } from "../../store/modalSlice";
import { cn } from "../../utils/utils";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  modalKey?: string;
}

const Modal = ({
  children,
  className,
  title,
  description,
  modalKey,
}: ModalProps) => {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = (open: boolean) => dispatch(setOpen(open));
  return (
    <Root open={modal.open && modalKey === modal.key} onOpenChange={handleOpen}>
      <Portal>
        <Overlay
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
          )}
        />
        <Content
          className={cn(
            "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            "max-w-2xl rounded-[14px]"
          )}
        >
          {/* Header */}
          <div
            data-slot="dialog-header"
            className={cn("flex flex-col gap-2 text-center sm:text-left")}
          >
            <Title
              data-slot="dialog-title"
              className={cn("text-lg leading-none font-semibold", className)}
            >
              {title}
            </Title>
            <Description
              className={cn("text-muted-foreground text-sm", className)}
            >
              {description}
            </Description>
          </div>
          {/* body */}
          {children}
          {/* close */}
          <Close className=" absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <CrossOutlinedIcon width={24} height={24} />
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};

export default Modal;
