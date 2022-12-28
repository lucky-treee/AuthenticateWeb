import React from 'react';
import { useTranslation } from 'react-i18next';
import SignUpForm from 'components/SignUpForm';
import TermOfService from 'components/TermOfService';

const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-start flex-col gap-12">
        <h1 className="font-bold">{t('sign-up-header')}</h1>
        <SignUpForm />
      </div>
      <TermOfService />
    </div>
  );
};

export default SignUpPage;
