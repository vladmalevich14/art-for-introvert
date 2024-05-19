import { useDispatch, useSelector } from 'react-redux'
import type { RootStateType, AppDispatch } from './store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
