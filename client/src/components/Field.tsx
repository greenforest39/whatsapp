
const Field = (props: {name: string, placeholder: string}) => {
	return (
		<div className="flex flex-col w-full">
			<label className="flex text-slate-200 text-sm">{props.name}</label>
      <input className="flex focus:outline-none border-b-2 text-slate-800 py-1" type="text" placeholder={props.placeholder} />
		</div>
	)
}

export default Field;