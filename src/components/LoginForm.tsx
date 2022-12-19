import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextInput from 'components/base/TextInput';

interface AuthenticateForm {
  id: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<AuthenticateForm>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const handleAuthenticateFormSubmit = (value: AuthenticateForm) => {
    console.log(value);
  };
  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className="flex flex-col items-start m-8 gap-4 w-[532px]"
        onSubmit={methods.handleSubmit(handleAuthenticateFormSubmit)}
      >
        <TextInput
          name="id"
          placeholder={t('id-placeholder')}
          required={{
            value: true,
            message: t('empty-id-error-message'),
          }}
        />
        <TextInput
          name="password"
          type="password"
          placeholder={t('password-placeholder')}
          required={{
            value: true,
            message: t('empty-password-error-message'),
          }}
        />
        <button
          className="w-full py-4 bg-primary rounded-md text-white font-medium hover:bg-primary-hover"
          type="submit"
        >
          {t('submit-button-text')}
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
