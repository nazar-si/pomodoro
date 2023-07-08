import React from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utls/classnames';
import { IconPlus } from '@tabler/icons-react';

type Props = {
  children?: React.ReactNode;
  closed?: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  wrapper:
    'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white/50 dark:bg-black/50 transition-all backdrop-blur-sm',
  wrapperClosed: 'opacity-0 pointer-events-none',
  container:
    'bg-white border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 p-4 rounded-md relative',
  closeButton:
    'absolute top-0 right-0 m-1 p-0.5 rounded-xl rotate-45 transition-all text-zinc-400 dark:text-zinc-600 hover:text-blue-500 hover:bg-blue-500/10',
};

function Modal(props: Props) {
  const handleOusideClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) props.setShow(false);
  };
  return createPortal(
    <div
      role="dialog"
      className={classNames(style.wrapper, !props.show && style.wrapperClosed)}
      onClick={handleOusideClick}
    >
      <div className={style.container}>
        <button
          aria-label="close modal"
          className={style.closeButton}
          onClick={() => props.setShow(false)}
        >
          <IconPlus strokeWidth={2} size={16} />
        </button>
        {props.children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
