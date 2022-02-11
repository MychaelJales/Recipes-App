import React, { createContext, FC, useState } from 'react';

//Tipando os dados que quero para usuário
type UserType = {
  email: string;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    email: ''
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {} //função de inicialização
};

//criando nosso contexto UserContext
export const RecipesContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const RecipesProvider: FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <RecipesContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
