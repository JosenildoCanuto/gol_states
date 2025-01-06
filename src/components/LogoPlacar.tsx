interface logoPlacarProps {
  logo: string;
  name: string;
}

function LogoPlacar(props: logoPlacarProps) {
  const { logo, name } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-40">
      <img src={logo} alt={name} className="w-16 gap-4" />
      <p className="text-xs text-center font-medium">{name}</p>
    </div>
  );
}

export default LogoPlacar;
