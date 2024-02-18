interface Props {
    children: string;
    color: string;
    correct: string;
    onClick: () => void;
}

const Button = ({ children, onClick, correct, color = 'primary' }: Props) => {
  return (
    <button className={'btn text-light bg-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button