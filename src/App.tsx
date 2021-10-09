import React from 'react';

import {Container, Area, Header} from './App.styles';

import {Item} from './types/item';

import {ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = React.useState<Item[]>([    //// ele é do tipo <Item>[] de array;
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'andar de bicicleta hoje', done: false},
    {id: 3, name: 'Estudar React Js', done: true},
  ]);   

  const handleAddTask = (taskName: string) => {
    let newList = [...list];    /// clonar a lista;
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const OnChangeItemDone = (itemDone: Item) => {
    
    let newList = [...list];
    // console.log(itemDone.done);

    newList[itemDone.id - 1].done = !itemDone.done;
    setList(newList);
    
  }
  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} data={item} onChangeDone={OnChangeItemDone} />
        ))}
      </Area>
    </Container>
  )
}

export default App;
