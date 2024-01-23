
const Profile = () => {
	return (
		<div className="flex">
			<div className="flex-col w-full">
                <div className="flex h-20 bg-sky-600 justify-between p-5 items-center">
                    <div className="flex items-center">
                        <i class="fa-solid fa-arrow-left pt-8 pr-6 text-slate-100"></i>
                        <div className="text-lg pt-8 text-slate-50">Profile</div>
                    </div>
                    <div className="text-ms pt-8 text-slate-100">Cancel</div>
                </div>
                <div className="flex items-end justify-end pb-5 pr-5 h-48 bg-blue-100">
                    <i className="fa-solid fa-pen text-sky-600 bg-slate-100 rounded-full w-10 h-10 text-center pt-3"></i>
                </div>
                <div className="relative bottom-28 text-center">
                    <label htmlFor="picture" className="cursor-pointer border-4 border-white rounded-full bg-slate-500 avatar w-40 h-40">
                        <img className="rounded-full w-40 h-40" border-none/>
                        <i className="fa-solid fa-camera absolute text-center w-full top-10 text-slate-100"></i>
                        <label className="absolute w-full bottom-12 text-center text-slate-100">CHANGE PROFILE LINK</label>
                    </label>
                    <input id="picture" type="file" className="hidden" />
                </div>
                <div className="relative bottom-16 flex flex-col content-center mx-8 gap-y-8">
                    <div className="flex justify-between items-center text-slate-500">
                        <div className="flex gap-4 items-center">
                            <i class="fa-solid fa-address-book"></i>
                            <div>Johnny</div>
                        </div>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="flex gap-4 text-slate-500">
                        <i className="fa-solid fa-house-chimney pt-1"></i>
                        <textarea className="border-collapse border-b w-full h-20 focus:border-collapse focus:outline-none focus:border-b-sky-500"></textarea>
                        <i class="fa-regular fa-face-smile"></i>    
                    </div>
                    <div className="flex justify-center">
                    <i class="fa-solid fa-circle-check fa-2xl text-sky-500 text-center py-5"></i>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                        <div className="flex gap-4 items-center">
                            <i className="fa-solid fa-tag"></i>
                            <div>Other category</div>
                        </div>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                        <div className="flex gap-4 items-center">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>Company address</div>
                        </div>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center text-slate-500">
                            <i class="fa-regular fa-clock"></i>
                            <div>Business hours</div>
                        </div>
                        <i className="fa-solid fa-pen text-slate-500"></i>
                    </div>
                    <div className="flex justify-between items-center text-slate-500">
                        <div className="flex gap-4 items-center">
                            <i class="fa-solid fa-envelope"></i>
                            <div>Email</div>
                        </div>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default Profile;