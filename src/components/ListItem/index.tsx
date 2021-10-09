import React from 'react'
import {Container} from './styles';

import {Item} from '../../types/item';

type Props = {
  data: Item,
  onChangeDone: (itemDone: Item) => void,
}

export const ListItem = ({data, onChangeDone}: Props) => {
  const [isChecked, setIsChecked] = React.useState(data.done);

  const ChangeItemDone = (e: any) => {
    setIsChecked(e.target.checked);
    onChangeDone(data);
  }

  return (
    <Container done={isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked} 
      onChange={ChangeItemDone}/>
       <label>{data.name} {/*{data.done.toString()}*/}</label> 
    </Container>
  )
}
