import  React,{ useState, useContext} from 'react';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '89'];
const MenuContext_66 = React.createContext();

const MenuContextProvider = ({children}) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories]= useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category === category);
      setMenuItems(newItems);
    }
  }
  console.log('menuItems', menuItems);

  return (
    <MenuContext_66.Provider
        value={{menuItems, 
        categories,filterItems}}>
        {children}
    </MenuContext_66.Provider>
  )
}
  const useMenuContext_66 = () => {
    return useContext(MenuContext_66);
  }

  export {MenuContextProvider, useMenuContext_66};