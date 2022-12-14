import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextInput from 'components/TextInput';

interface AuthenticateForm {
  id: string;
  password: string;
}

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  const { handleSubmit, getValues } = useForm<AuthenticateForm>({});

  const handleAuthenticateFormSubmit = () => {
    const value = getValues();

    handleSubmit(() => {
      console.log(value);
    });
  };

  return (
    <div>
      {t('')}
      <form
        className="flex flex-col items-start m-8 gap-4 w-[532px]"
        onSubmit={handleAuthenticateFormSubmit}
      >
        <TextInput name="id" placeholder="아이디" />
        <TextInput name="password" placeholder="비밀번호" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default MainPage;
