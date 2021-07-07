import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  // return <Counter />;
  // return <Say />;
  return (
    <MyComponent name="React2" favoriteNumber="3">
      리액트2
    </MyComponent>
  );
};

export default App;
