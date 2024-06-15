import thumb from '../../public/thumb.jpeg'
export function VideoCard(props : any) {
  return (
    <div className='p-3 cursor-pointer'>
      <img src={props.image} className='rounded-xl'></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.thumbImage} className="rounded-full w-12 h-12"></img>
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">{props.author}</div>
          <div className="col-span-11 text-gray-400 text-base">{props.views} | {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
