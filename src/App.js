import {Checkbox, Home,Login,Signup,Quiz,QuizResult,Docs,ProfilePage,Contact} from "./pages";
import {Routes,Route} from 'react-router-dom';

function App() {

  return (

    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/user" element={<Checkbox />} />
        <Route path="auth/register" element={<Signup />} />
        <Route path="quiz" element={<Quiz />}/>
        <Route path="quiz/result" element={<QuizResult />}/>
        <Route path="docs" element={<Docs />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contact" element={<Contact />} />
    


      </Routes>
    </div>
  );
}

export default App;
