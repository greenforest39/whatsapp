
const List = (props: {name: string, count: string}) => {
	return (
		<div className="flex p-3 w-full justify-between border-solid border-b-2 hover:bg-slate-200">
			<div className="flex flex-col">
				<p>{props.name}</p>
				<p>{props.count}</p>
			</div>
			<button><i className="fa-solid fa-circle-info text-sky-500 flex items-center"></i></button>
		</div>
	)
}

export default List;