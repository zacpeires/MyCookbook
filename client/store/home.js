import axios from 'axios'
import history from '../history'

const GET_HOME = 'GET_HOME'

const getHome = home => ({
  type: GET_HOME,
  home
})

const defaultHome = {}

// export const addUserToHome = (userDetails) => {
//   return async (dispatch) => {
//     const { data } = await axios.post('/api/home/add', userDetails)
//     dispatch(getHome(data))
//   }
// }
