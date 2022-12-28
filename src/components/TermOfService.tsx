import React from 'react';
import { useTranslation } from 'react-i18next';
import SquareLogo from 'assets/SquareLogo.svg';
import { PrivacyPolicyUrl, TermOfServiceUrl } from 'constants/urls';

const Divider: React.FC = () => <div className="w-[1px] bg-gray-500 h-4" />;

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

export default TermOfService;
