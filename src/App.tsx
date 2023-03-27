import React from 'react';
import './App.css';
import { usersAPI } from './services/usersService';
import { IUser } from './models';
import Spinner from './components/Spinner/Spinner'
import Error from './components/Error/Error'
import AppLayout from './layouts/AppLayout'

type CastError = {
  status: number,
  data: object
}

// employer и developer
// employer: в дату отправляем название компании, имя hr
// developer: в дату отправляем всю инфу о работнике

function App() {

  const {data: users, isLoading, error} = usersAPI.useFetchAllUsersQuery(new Date().getDate())
  const err = error as CastError

  const [createUser, {}] = usersAPI.useCreateUserMutation()
  const [updateUser, {}] = usersAPI.useUpdateUserMutation()
  const [deleteUser, {}] = usersAPI.useDeleteUserMutation()

  //console.log(users, isLoading, err)

  return (
    <div className="App">
        <AppLayout/>        
    </div>
  );
}

export default App;
