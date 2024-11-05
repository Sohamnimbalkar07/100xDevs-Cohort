import "./App.css";
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  if (todo.state === "loading") {
    return <>Loading...</>;
  } else if (todo.state == "hasValue") {
    return (
      <div>
        {todo.contents.title}
        {todo.contents.description}
      </div>
    );
  }
}

export default App;
