import { createAction } from 'redux-actions'
import {
    CHANGE_FLOOR_FROM_ELEVATOR,
} from '../types'

export const changeFromElevator= createAction(CHANGE_FLOOR_FROM_ELEVATOR)
