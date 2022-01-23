import { createAction } from 'redux-actions'
import {
    CHANGE_FLOOR_FROM_ELEVATOR,
    CHANGE_FLOOR_FROM_OUTSIDE
} from '../types'

export const changeFromElevator= createAction(CHANGE_FLOOR_FROM_ELEVATOR)
export const changeFromOutside = createAction(CHANGE_FLOOR_FROM_OUTSIDE)
