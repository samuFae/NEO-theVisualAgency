import { ReactNode, useState } from 'react';
import { Subject } from 'rxjs';
export interface IModalOptions {
  title?: string;
}

export interface IModalState {
  children?: ReactNode;
  options?: IModalOptions;
}

export const $modalSubject = new Subject<IModalState | undefined>();

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (content: ReactNode, options?: IModalOptions) => {
    document.body.style.overflow = "hidden";
    $modalSubject.next({ children: content, options });
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    $modalSubject.next(undefined);
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal
  };
};
