import {Checkbox, Home,Login,Signup} from "./pages";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
