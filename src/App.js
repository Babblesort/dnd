import {useState} from "react";
import './App.css';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

function App() {

  const [list, setList] = useState([{id: '1', text: 'one'}, {id: '2', text: 'two'}, {id: '3', text:'three'}]);

  return (
    <div className="app">

      <DragDropContext>
        <Droppable droppableId="list">
          {provided => {
            return (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {
                  list.map((item, index) => (
                    <Draggable draggableId={item.id} index={index}>
                      {provided => <div className="list-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{item.text}</div>}

                    </Draggable>

                  ))
                }
                {provided.placeholder}

              </div>
            )
          }}
        </Droppable>
      </DragDropContext>


    </div>
  );
}

export default App;
