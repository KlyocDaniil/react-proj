import React, { useState } from 'react' 

function computeInitialCounter() {
    console.log('Loading');
    let num = 20;
    return num;
}

function compileCounter() {
    let numberCount = 1;
    return numberCount;
}

function App() {
    const [counter, setState] = useState(() => {
        return computeInitialCounter();
    })

    const [numberAdd, setNumber] = useState(() => {
        return compileCounter();
    })

    const [money, setMoney] = useState(() => {
        let money = 0;
        return money;
    })

    function convertClickMoney () {
        if (counter >= 50) {
            setState(counter - 50);
            setMoney(money + counter);
        } else {
            alert('Набей 50 кликов')
        } 
    }

    function buyBuffIncrement() {
        if (money >= 20) {
            setNumber(numberAdd + 1)
            setMoney(money - 20);
        } else {
            alert('Мало деняг')
        }
    }

    function increment() {
        setState(counter + numberAdd)
    }

    function reset() {
        setNumber(compileCounter()); // 1
        setState(counter * 0); 
    }

  
  return (

    <div className='wrapper'>
        <div className = 'shop'>
                <h1> Текущее улучшение: { numberAdd } </h1>
                <h3> Монеты: { money } </h3>
                <h3> Обменять 50 кликов на монеты </h3>
                <button onClick= { convertClickMoney } className='btn_shop'> 50 монет </button>
                <h3> Купить +1 клик </h3>
                <button onClick= { buyBuffIncrement } className='btn_shop'> Купить улучшение </button>
        </div>

        <div className='menu'> 
            <h1> Счетчик: {counter} </h1>
            <button onClick = { increment } className='btn'> Добавить </button>
            <button onClick= { reset } className='btn'> Сброс </button>
        </div>

        {/* <div className='shop_right'>
        <h1> Текущее улучшение: { numberAdd } </h1>
                <h3> Монеты: { money } </h3>
                <h3> Обменять 50 кликов на монеты </h3>
                <button onClick= { convertClickMoney } className='btn_shop'> 50 монет </button>
                <h3> Купить +1 клик </h3>
                <button onClick= { buyBuffIncrement } className='btn_shop'> Купить улучшение </button>
        </div> */}

    
    </div>
  );
}

export default App;
