import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from 'components/base/Button';
import TextInput from 'components/base/TextInput';
import useSignUp from 'hooks/useSignUp';

interface SignUpFormType {
  email: string;
  id: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<SignUpFormType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      id: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = methods.watch('password');

  const { mutate, isLoading } = useSignUp();

  const handleSignUpFormSubmit = (value: SignUpFormType) => {
    mutate(value);
  };

  const handleSubmit = methods.handleSubmit(handleSignUpFormSubmit);

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className="flex flex-col items-start gap-4 w-[532px]"
        onSubmit={handleSubmit}
      >
        <label>{t('email-label')}</label>
        <TextInput
          name="email"
          placeholder={t('email-placeholder')}
          required={{
            value: true,
            message: t('empty-email-error-message'),
          }}
        />
        <label>{t('id-label')}</label>
        <TextInput
          name="id"
          placeholder={t('id-placeholder')}
          required={{
            value: true,
            message: t('empty-id-error-message'),
          }}
        />
        <label>{t('password-label')}</label>
        <TextInput
          name="password"
          type="password"
          placeholder={t('password-placeholder')}
          required={{
            value: true,
            message: t('empty-password-error-message'),
          }}
        />
        <label>{t('confirm-password-label')}</label>
        <TextInput
          name="confirmPassword"
          type="password"
          placeholder={t('confirm-password-placeholder')}
          required={{
            value: true,
            message: t('empty-confirm-password-error-message'),
          }}
          validate={{
            match: (confirmPassword) =>
              confirmPassword === password ||
              (t('password-not-match-error-message') as string),
          }}
        />
        <Button
          buttonType="primary"
          type="button"
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          {t('sign-up-button-text')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
