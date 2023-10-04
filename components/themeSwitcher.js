import {FaMoon, FaSun} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toogleTheme } from '../themeSlice'

const NiyuThemeSwitch = ()=>{
    const dispatch = useDispatch()
    const theme = useSelector((state)=>state.theme)
    return(
        <button onClick={()=>{dispatch(toogleTheme())}} className='focus:outline-none mt-8 mx-4  rounded-3xl p-2 outline-4 backdrop-opacity-35 shadow-lg'>
            {theme === 'light' ? <FaMoon className='text-orange-600 text-lg' /> : <FaSun className='text-green-500 text-lg' />}
        </button>
    )

}

export default NiyuThemeSwitch