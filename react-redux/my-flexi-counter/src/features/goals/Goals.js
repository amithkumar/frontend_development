import React, { useState } from 'react'
import './goals.css'
import styles from './goals.css'
import { addGoal } from './goalSlicer'
import { useSelector, useDispatch } from 'react-redux'

const goalsSelector = (state) => {
    return state.goals.list || []
}
function Goals(props) {
    const [list, setList] = useState(['Competent in the the work for Development',
        'Facilitate learning to underprevilege'])
    const [newGoal, setNewGoal] = useState('');
    const dispatch = useDispatch();
    const goals = useSelector(goalsSelector);

    console.log(goals)
    return (
        <div className={styles.container}>
            <div className='list'>
                <h1>{props.heading}</h1>
                <ul>
                    {
                        goals.map(l =>
                            <li>{l}</li>
                        )}
                </ul>
            </div>
            <div className='addGoals'>
                <input value={newGoal} onChange={(e) => { setNewGoal(e.target.value) }} />
                <button onClick={() => {
                    if (newGoal) {
                        dispatch(addGoal(newGoal));
                        setNewGoal('')
                    }
                }} />
            </div>
        </div>
    )
}

export default Goals