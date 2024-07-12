import { Menu } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../utls/classnames';
import { IconHelpHexagonFilled } from '@tabler/icons-react';
import { Suspense, useState } from 'react';
import Modal from '../../ui/Modal/Modal';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [showHelpModal, setShowHelpModal] = useState(false);
  return (
    <footer className="mt-10 mb-2 flex flex-wrap items-center w-full px-4 gap-8">
      <aside>
        <Menu as="div" className="opacity-75 relative font-medium text-sm">
          <Menu.Button
            as="button"
            aria-label="language switch"
            className="uppercase"
          >
            {window.localStorage.getItem('i18nextLng')?.slice(0, 2)}
          </Menu.Button>
          <Menu.Items className="absolute bottom-8 flex flex-col gap-1">
            {['fr', 'ru', 'en', 'de'].map((lang) => (
              <Menu.Item
                key={lang}
                as="button"
                className="uppercase"
                onClick={() => {
                  i18n.changeLanguage(lang);
                }}
              >
                {({ active }) => (
                  <div className={classNames(active && 'text-blue-500')}>
                    {lang}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </aside>
      <main className="flex justify-center items-center gap-2 sm:gap-8 flex-1 flex-wrap">
        <p className="text-center text-zinc-500 text-sm whitespace-nowrap">
          {t('footer.created')}{' '}
          <a
            href="https://github.com/nazar-si/"
            className="font-medium hover:text-blue-500"
            target="_blank"
          >
            Nazar Si
          </a>
          {/* copyright symbol */ ' '}&copy; {new Date().getFullYear()}
        </p>
        <p className="text-center text-zinc-500 text-sm whitespace-nowrap">
          <a
            aria-label="github link"
            href="https://github.com/nazar-si/pomodoro/"
            className="flex items-center gap-2 hover:text-blue-500"
            target="_blank"
          >
            {t('footer.project')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
                fill="currentColor"
              />
            </svg>
          </a>
        </p>
      </main>
      <aside
        title={t('what.button-tip')}
        className="text-zinc-400 transition-all hover:text-blue-500 cursor-pointer"
        onClick={() => setShowHelpModal(true)}
      >
        <IconHelpHexagonFilled />
      </aside>
      <Suspense>
        <Modal show={showHelpModal} setShow={setShowHelpModal}>
          <div className="text-zinc-500 dark:text-zinc-400">
            <h2 className="text-lg font-medium mb-2 text-black dark:text-white">
              {t('what.title')}
            </h2>
            <p className="my-2">{t('what.description')}</p>
            <p className="my-2">{t('what.steps-start')}</p>
            <ol className="list-decimal pl-4 list-inside">
              {Array(7)
                .fill(0)
                .map((_, i) => (
                  <li key={i}>{t(`what.step-${i + 1}`)}</li>
                ))}
            </ol>
            <p className="my-2">{t('what.conclusion')}</p>
          </div>
        </Modal>
      </Suspense>
    </footer>
  );
}
