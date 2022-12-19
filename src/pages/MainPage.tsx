import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainLogo from 'assets/MainLogo.svg';
import LoginForm from 'components/LoginForm';
import Path from 'constants/path';

const Divider: React.FC = () => <div className="w-[1px] bg-gray-500 h-4" />;

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <MainLogo />
      <LoginForm />
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
    </div>
  );
};

export default MainPage;
