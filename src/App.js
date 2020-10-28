
import AllPost from './AllPost';
import './App.css';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
<div className="navbar">

  <h2 className="center">Post It</h2>
</div>
    {/* PostForm component */}
    <PostForm/>
    {/* AllPost */}
    <AllPost/>
    </div>
  );
}

export default App;
