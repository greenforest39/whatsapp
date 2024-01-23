
const Loading = (props: {description: string}) => {
	return (
		<div className="flex flex-col justify-center items-center px-3 relative gap-10 bg-white">
      <img src="/loading.webp" alt="image" />
      <div className="border-b-8 w-4/5 max-w-[800px] border-[#00a884]"/>
      <p className="text-slate-400">{props.description}</p>
		</div>
	)
}

export default Loading;