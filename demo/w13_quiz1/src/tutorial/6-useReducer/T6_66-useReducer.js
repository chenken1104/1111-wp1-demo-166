import React, { useState, useReducer } from 'react';
import T6_66_Modal from './T6_66_Modal';
import { data } from '../../data';

import { reducer_66 } from './T6_66_reducer'

// reducer function

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContext: '',
}

const T6_66_useReducer = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer_66, 
  defaultState);

  // const [people, setPeople] = useState(data);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = { id: new Date().getTime().toString(), name};
      dispatch({ type: 'ADD_ITEM', payload: newItem});
      // setPeople([...people, newItem]);
      // setIsModalOpen(true);
      // setModalContent('item added');
      setName('');
    }else{
    }
  }
  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
    // setIsModalOpen(false);
  }
  return <>
     { state.isModalOpen && <T6_66_Modal modalContent=
     {state.modalContent} closeModal={closeModal} /> }
     <form className="form" onSubmit={handleSubmit}>
       <div>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       </div>
       <button type="submit">add</button>
     </form>
     { state.people.map( (person) => {
       return (
         <div key={person.id} className="item">
           <h4>{person.name}</h4>
           <button>remove</button>
         </div>
         
       )
     }) }
  </>;
};
export default T6_66_useReducer;
