import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import UsersList2 from './features/userlist/UsersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from './hooks/useTitle';
import NewDashLayout from './components/NewDashLayout';
import Dashboard from './features/dashboard/Dashboard';
import Document3 from './features/klausul/Document3';
import Document5 from './features/klausul/Document5';
import Document1 from './features/klausul/Document1';
import Document2 from './features/klausul/Document2';
import Document4 from './features/klausul/Document4';
import Document6 from './features/klausul/Document6';
import Document7 from './features/klausul/Document7';
import Document8 from './features/klausul/Document8';
import Document9 from './features/klausul/Document9';
import Document10 from './features/klausul/Document10';


function App() {
  useTitle('SPD ISO 50001')

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>

              </Route>{/* End Dash */}

              <Route path="dashboard" element={<NewDashLayout />}> {/*new dashboard*/}

                <Route index element={<Dashboard />} />

              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin, ROLES.Employee]} />}>
                <Route path="userslists">
                  <Route index element={<UsersList2 />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>

                <Route path="klausul1">
                  <Route index element={<Document1 />} />

                </Route>
                <Route path="klausul2">
                  <Route index element={<Document2 />} />

                </Route>
                <Route path="klausul3">
                  <Route index element={<Document3 />} />

                </Route>
                <Route path="klausul4">
                  <Route index element={<Document4 />} />

                </Route>
                <Route path="klausul5">
                  <Route index element={<Document5 />} />

                </Route>
                <Route path="klausul6">
                  <Route index element={<Document6 />} />

                </Route>
                <Route path="klausul7">
                  <Route index element={<Document7 />} />

                </Route>
                <Route path="klausul8">
                  <Route index element={<Document8 />} />

                </Route>
                <Route path="klausul9">
                  <Route index element={<Document9 />} />

                </Route>
                <Route path="klausul10">
                  <Route index element={<Document10 />} />

                </Route>


              </Route>




            </Route>
          </Route>
        </Route>{/* End Protected Routes */}

      </Route>
    </Routes >
  );
}

export default App;
