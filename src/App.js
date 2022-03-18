import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AdminRoute from "./AdminRoute/AdminRoute";
import AuthProvider from "./AuthProvider/AuthProvider";
import AddAdmin from "./pages/components/AddAdmin/AddAdmin";
import AddDoctor from "./pages/components/AddDoctor/AddDoctor";
import AddPatient from "./pages/components/AddPatient/AddPatient";
import AddStaff from "./pages/components/AddStaff/AddStaff";
import AllAdmin from "./pages/components/AllAdmin/AllAdmin";
import AllDoctor from "./pages/components/AllDoctor/AllDoctor";
import AllPatient from "./pages/components/AllPatient/AllPatient";
import AllStaff from "./pages/components/AllStaff/AllStaff";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Login/Login'
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import StaffRoute from "./StaffRoute/StaffRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<AllPatient />} />
            <Route path='addpatient' element={<StaffRoute><AddPatient /></StaffRoute>} />
            <Route path='allpatient' element={<AllPatient />} />
            <Route path='adddoctor' element={<AdminRoute><AddDoctor /></AdminRoute>} />
            <Route path='addstaff' element={<AdminRoute><AddStaff /></AdminRoute>} />
            <Route path='addadmin' element={<AdminRoute><AddAdmin /></AdminRoute>} />
            <Route path='alladmin' element={<AdminRoute><AllAdmin /></AdminRoute>} />
            <Route path='allstaff' element={<AdminRoute><AllStaff /></AdminRoute>} />
            <Route path='alldoctor' element={<AdminRoute><AllDoctor /></AdminRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
