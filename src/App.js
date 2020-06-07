import React, { useReducer } from "react";
import List from "./components/List";
import { data, dataReducer } from "./store";

function App() {
  const [items, dispatch] = useReducer(dataReducer, data);

  function handleAddItem(e) {
    if (e.which === 13) {
      dispatch({ type: "ADD", data: e.currentTarget.value });
      e.currentTarget.value = "";
    }
  }

  function handleRemoveItem(e) {
    const id = e.currentTarget.dataset.id;
    dispatch({ type: "REMOVE", id });
  }

  return (
    <div className="App">
      <div>
        <input placeholder="enter item name" onKeyUp={handleAddItem} />
      </div>

      <List items={items} onRemove={handleRemoveItem} />
    </div>
  );
}

export default App;
