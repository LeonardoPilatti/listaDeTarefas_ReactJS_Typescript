import React, {KeyboardEvent} from 'react';
import {Container} from './styles';

type Props = {
  onEnter: (taskName: string) => void;
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = React.useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    if(event.code === 'Enter' && inputText !== '') { 
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <Container>
      <div>➕</div>
      <input 
      type="text"
      placeholder="Adicione uma tarefa" 
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyUp={handleKeyUp} /// esse onKeyUp é quando a pessoa apertar no teclado e soltar a tecla, a função será executada quando ocorrer isso;
      />
    </Container>
  )
}
