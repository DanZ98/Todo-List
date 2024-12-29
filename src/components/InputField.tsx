import "./styes.css";

interface Props {
   todo: string;
   setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className="input">
        <input type="input" 
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a task" 
        className="input__box" />
        <button type="submit" className="input_submit">Go</button>
    </form>
  )
}

export default InputField