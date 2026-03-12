interface MenuItemCardProps {
  item: string;
  price: number;
  cat: string;
}

export default function MenuItemCard({ item, price, cat }: MenuItemCardProps) {
  if (price <= 0)
    return (
      <div className="menuItems mb-5 mt-5 h-[20px] min-w-[90%] md:min-w-[100%] bg-transparent text-[#3e2f1a] block w-auto flex flex-row items-start justify-center md:justify-start rounded-sm self-start">
        <h2 className="text-xl fontOutfit mr-5 text-white font-[700]">{cat}</h2>
      </div>
    );
  return (
    <div className="menuItems h-auto w-auto flex flex-col items-center">
      <div className="h-10 flex flex-row bg-[#3e2f1a] pl-3 pr-3 items-center justify-around rounded-sm">
        <h2 className="text-sm fontOutfit mr-5">{item}</h2>
        <p className="text-sm fontOutfit">₹{price}</p>
      </div>
      <div className="min-h-2 min-w-25 bg-yellow-100 rounded-b-sm text-xs p-1 text-black text-center">
        {cat}
      </div>
    </div>
  );
}
