import "./myButton1.css";


interface IMyButton1Props {
 name: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void;
}

export default function MyButton1({type ='button', onClick, name='undefined'}: IMyButton1Props){
  
  return (
  <button  type={type} onClick={onClick} className="myButton1">{name}</button>
  );
}