import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from 'components/base/Button';
import TextInput from 'components/base/TextInput';
import useSignIn from 'hooks/useSignIn';

interface SignInFormType {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<SignInFormType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isLoading } = useSignIn();

  const handleSignInFormSubmit = (value: SignInFormType) => {
    mutate(value);
  };

  const handleSubmit = methods.handleSubmit(handleSignInFormSubmit);

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className="flex flex-col items-start m-8 gap-4 w-[532px]"
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
          validate={{
            isEmail: (value) =>
              /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ||
              (t('invalid-email-error-message') as string),
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
        <Button
          buttonType="primary"
          type="button"
          isLoading={isLoading}
          onClick={handleSubmit}
        >
          {t('submit-button-text')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
