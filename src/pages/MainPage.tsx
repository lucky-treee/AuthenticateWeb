import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLogo from 'assets/MainLogo.svg';
import SquareLogo from 'assets/SquareLogo.svg';
import LoginForm from 'components/LoginForm';
import Path from 'constants/path';
import { PrivacyPolicyUrl, TermOfServiceUrl } from 'constants/urls';

const Divider: React.FC = () => <div className="w-[1px] bg-gray-500 h-4" />;

const InternalService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row w-full justify-center items-center">
      <Link to={Path.SEARCH_ID} className="p-3 text-sm">
        {t('search-id-button-text')}
      </Link>
      <Divider />
      <Link to={Path.SEARCH_PASSWORD} className="p-3 text-sm">
        {t('search-password-button-text')}
      </Link>
      <Divider />
      <Link to={Path.SIGN_UP} className="p-3 text-sm">
        {t('sign-up-button-text')}
      </Link>
    </div>
  );
};

const TermOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-[80px] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <a
          className="px-3 text-sm"
          href={TermOfServiceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('term-of-service')}
        </a>
        <Divider />
        <a
          className="px-3 text-sm"
          href={PrivacyPolicyUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('privacy-policy')}
        </a>
      </div>
      <div className="flex flex-row justify-center items-center gap-1">
        <SquareLogo />
        <p className="text-sm">{t('copyright-text')}</p>
        <p className="text-sm font-bold">{t('company-copyright-text')}</p>
        <p className="text-sm">{t('copyright-reserved-text')}</p>
      </div>
    </div>
  );
};

const MainPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen">
    <MainLogo />
    <LoginForm />
    <InternalService />
    <TermOfService />
  </div>
);

export default MainPage;
