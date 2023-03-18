//import {Component} from 'react';

// CLASS COMPONENT
/* class Counter extends Component {
    render() {
        return (
            <div>ovo je counter</div>
        )
    }
} */

// FUNCTION COMPONENT
/* const Counter = () => {
    let counter = 0; 
    return (
        <div onClick={() => {counter = counter + 1;}}> ovo je counter: {counter} </div>
    )
} */
// Ovo nece raditi jer nije hookano na state i onda ne osluskuje real time, moramo koristiti stateove

import {memo, useEffect, useState, useMemo} from 'react';
const Counter = (props, children) => {
    console.log('props', props);
    const {initialCounter, increaseTotal, total} = props; // dekonstrukcija 
    const [counter, SetCounter] = useState({count: initialCounter});

    useEffect(() => {
        document.title = `Clicked ${counter.count}`;
    }, [counter])
    // sto ako izuzmem drugi parametar? -> onda se na nista ne subscribea i samo pri pozivu funkcije se jednom odradi ovo unutar useEffect i tjt, kao da nema useEffecta

    useEffect(() => {
        return () => {console.log( 'unmountam se' );}
    }, [])

    const isLessThan10 = useMemo(() => {
        console.log('recalculating 10');
        return counter.count < 10}, [counter]);

/*     const save = () => {}; // POST /localhost/robot/new 

    const createRobot = useCallback(() => {
        save(counter);
    }, [counter])
 */


    return (
        <div>
            <div> ovo je counter: {counter.count} / {total} </div>
            <div>Less than 10: {isLessThan10.toString()}</div>
            <button onClick={() => {
                    console.log('click');
                    counter.count = counter.count + 1;
                    SetCounter({...counter});
                    increaseTotal('change total'); 
                }}>
                    Click me
             </button>
        </div>
    )
}

export default memo(Counter);