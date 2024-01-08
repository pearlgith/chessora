import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Register,
  Visitors,
  Theory,
  FideRate,
  Redactor,
  Champions,
  Settings,
  Memes,
  News,
} from "./Pages/index";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/visitors' element={<Visitors />} />
          <Route path='/theory' element={<Theory />} />
          <Route path='/fiderate' element={<FideRate />} />
          <Route path='/redactor' element={<Redactor />} />
          <Route path='/champions' element={<Champions />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/memes' element={<Memes />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
