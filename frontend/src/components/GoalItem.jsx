import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'

export default function GoalItem({goal}) {

  const dispatch = useDispatch()

  return (
    <div className="goal">
        <h5 style={{fontWeight:300}}>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </h5>
        <h2>{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">X</button>
    </div>
  ) 
}
