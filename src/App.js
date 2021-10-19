import React,{useState} from 'react';

function App() {
  return <div>
    <h2>Directory Structure</h2>    
    {/* <Folder name="Desktop" isOpen = {false} */}
    <Folder name="Desktop">
      {/* <h5>some stuff</h5>*/}
      <Folder name='Music'>
        <File name = 'Pop.mp4'/>
        <File name = 'Slow.jpeg'/>
      </Folder>
      <File name="File1.png" />
      <File name="File2.png" />
    </Folder>
    <Folder name="Folder1" />
    <Folder name="Folder2" />
  </div>
}

// const Folder = (props) =>{
//   console.log(props);
//   const FoldeR = "Folder";
//   // return <h4>FoldeR</h4>
//   return <h4>{FoldeR}</h4>
// }

// const Folder = (props) => {
//   console.log(props);
//   return <div>
//     <div>{props.name}</div>
//     <div style={{ marginLeft: '15px' }}>
//       {props.isOpen ? props.children : null}
//       {/* {props.children} */}
//     </div>
//   </div>
// }

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen);
  // console.log(setIsOpen);
  const {name,children} = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const direction = isOpen ? 'down' : 'right';
  const color = isOpen ? 'red' : 'green';

  return <div>
    <span onClick = {handleClick}>
      <i className="yellow folder icon"></i>
      {/* <i className="caret right icon"></i> */}
      <i className={`${color} caret ${direction} icon`}></i>
      </span>
    {name}
    <div style={{ marginLeft: '15px' }}>
      {isOpen ? children : null}
    </div>
  </div>
}


const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
     {name}
   </div>;
}

export default App;
