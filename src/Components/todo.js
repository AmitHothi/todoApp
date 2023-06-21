import React, { useEffect, useState } from 'react'
import '../App.css'

const Todo = () => {

  const[inputData,setInpuData]=useState('');
  const [items,setItems]=useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem=()=>{
    if(!inputData){
      alert("plz fill Data!")
    }
    else if(inputData && !toggleSubmit){
            setItems(
              items.map((elem)=>{
                if(elem.id === isEditItem){
                  return{...elem, name:inputData}
                }
                return elem;
              })
            )
            setToggleSubmit(true);

            setInpuData('');

            setIsEditItem(null);
      }
    else{
      const allInputList={id: new Date().getTime().toString(), name:inputData}
      setItems([...items,allInputList]);
      setInpuData('')
    }
  }
  
  const deleteItem=(index)=>{
    //console.log(id);
    const updateditems =items.filter((elem) =>{
      return index !== elem.id;
    });
    setItems(updateditems);
  }

  const editItem= (id) => {
    let newEditItem = items.find((elem)=>{
      return elem.id === id;
    });
    console.log(newEditItem);
 
    setToggleSubmit(false);

    setInpuData(newEditItem.name);

    setIsEditItem(id);
  }
  
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(items))
  },[items]);
  
  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <div>
            <input 
              type="text" 
              placeholder='Add Items...'
              value={inputData}
              onChange={(e)=>setInpuData(e.target.value)} />
              {
                toggleSubmit ? <i className='fa-solid fa-circle-plus button' title='Add Item' onClick={addItem}></i> :
                        <i class='fa-solid fa-pen-to-square ' title='Update Item' onClick={addItem}></i> 
              }
          </div>
          <br/>

          <div className='todo-style'>
            {
              items.map((elem) =>{
                return(
                  <div  key={elem.id}>
                     <h3>{elem.name}</h3>
                     <i class='fa-solid fa-pen-to-square button1'  title='Edit Item' onClick={()=>editItem(elem.id)}></i>
                     <i class="fa-sharp fa-solid fa-delete-right fa-times" title='Delete Item' onClick={()=>deleteItem(elem.id)}></i>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
     </>
    );
  }
  
  export default Todo