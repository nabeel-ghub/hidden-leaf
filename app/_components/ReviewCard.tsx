interface ReviewCardProps {
    starCount: number;
    name: string;
    comment: string;
}

export default function ReviewCard({starCount, name, comment}: ReviewCardProps) {
    return(
        <div className="bg-white h-[200px] w-[250px] rounded-sm flex flex-col items-center justify-around pt-5 pb-5">
            <h2 className="fontOutfit text-xl font-[600] text-black">{name}</h2>
            <h2 className="text-green-700 fontPoppins text-xl">
                {Array(starCount).fill(0).map((_, i) => (<span key={i}>★</span>))}
            </h2>
            <p className="w-[60%] text-center line-clamp-2 fontPoppins text-xs font-[400] text-black">{comment}</p>
        </div>
    )
}