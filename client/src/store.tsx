import { v4 as uuidv4 } from "uuid";
import { observable, action, reaction } from "mobx"
import { createContext } from "react"

export interface Item {
  id?: string;
  name: string;
}

class ItemStore {
  constructor() {
    reaction(() => this.items, _ => console.log(this.items.length))
  }

  @observable items: Item[] = [
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Milk" },
    { id: uuidv4(), name: "Steak" },
    { id: uuidv4(), name: "Water" },
  ]

  @action addItem = (item: Item) => {
    this.items.push({ ...item, id: uuidv4() })
  }
  
  @action removeItem = (id: string) => {
    this.items = this.items.filter(item => item.id !== id)
  }
}

export default createContext(new ItemStore())