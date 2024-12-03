type HeaderProps = {
    name: string;
  };
  
  function Header({ name }: HeaderProps) {
  return (
    <div className="w-full py-2.5 px-6 bg-blue-700">
      <h1 className="text-4xl font-bold">{name}</h1>
    </div>
  );
}

export default Header;
