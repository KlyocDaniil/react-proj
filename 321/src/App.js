import React, { useState } from 'react' 

function computeInitialCounter() {
    console.log('Loading');
    let num = 20;
    return num;
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  })

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
      setCounter(counter + 1)
  }

  function decrement() {
      if (counter === 0) {
        alert('Нельзя меньше 0')
      } else {
        setCounter(counter - 1)
      }
  }
  function updateTitle() {
        setState ( prev => {
            return {
                ...prev, 
                title: 'Название'
        }
    })
  }
  return (
    <div className='wrapper'>
        <div className='menu'> 
            <h1>Счетчик: {counter} </h1>
            <button onClick = { increment } className='btn'>Добавить</button>
            <button onClick = { decrement } className='btn'>Убрать</button>
            <button onClick = {updateTitle} className='btn'>Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    </div>
  );
}

export default App;
