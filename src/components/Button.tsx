interface Props {
    children: string;
    color: string;
    onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button className={'btn bg-' + color } onClick={onClick}>{children}</button>
  )
}

export default Button