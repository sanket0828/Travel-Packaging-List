import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((item) => items.filter((item) => item.id !== id));
  }

  function handleToggleCheckbox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function manageClearList() {
    if (items.length !== 0) {
      const confirmed = window.confirm("Do you want to Delete all items?");
      if (confirmed) setItems([]);
    } else {
      alert("You have no items on List!");
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleCheckbox={handleToggleCheckbox}
        onClearList={manageClearList}
      />
      <Stats items={items} />
    </div>
  );
}
