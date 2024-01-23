import PhoneInput from "react-phone-input-2";
import Field from "../components/Field";
import 'react-phone-input-2/lib/style.css';

const Register = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-[hsla(0,0%,100%,0.8)] px-3 h-screen relative">
			<div className="h-[43%] w-full bg-secondary absolute top-0"></div>
			<div className="card sm:w-[650px] text-primary-foreground shadow-xl relative items-center">
				<div className="text-white z-10 flex items-center gap-2 text-3xl absolute -top-24">
					<img src="/logo.png" width="50" height="50" />
					<p>ChatApp</p>
				</div>
				<div className="w-full">
					<div className="card-title bg-[var(--secondary-dialog)] h-24 px-6 pb-2 items-end rounded-t-md gap-4">
						<i className="fa-solid fa-arrow-left pb-0.5" />
						<h2>Register</h2>
					</div>
					<div className="card-body bg-white rounded-b-md gap-2 pb-3">
						<div className="flex flex-col gap-4">
							<div className="flex gap-10">
								<Field name="Name" placeholder="Jose Carlos" />
								<Field name="Last Name" placeholder="Castillo Casas" />
							</div>
							<div className="flex flex-col gap-2 col-span-2 text-black">
								<label className="text-sm text-slate-200">Phone number</label>
								<PhoneInput
									country={'all'}
									enableSearch={true}
								// value={this.state.phone}
								// onChange={phone => this.setState({ phone })}
								/>
							</div>
							<Field name="City" placeholder="Lima" />
							<Field name="Email" placeholder="abc@def.com" />
							<div>
								<label className="text-slate-700">Date of birth</label>
								<div className="flex justify-between">
									<div className="flex flex-col gap-1 border-b-2">
										<label className="text-slate-200 text-sm">Year</label>
										<select name="year" id="year" className="text-slate-500 pr-20">
											<option value="2023">2023</option>
										</select>	
									</div>
									<div className="flex flex-col gap-1 border-b-2">
										<label className="text-slate-200 text-sm pl-1">Month</label>
										<select name="year" id="year" className="text-slate-500 pr-20">
											<option value="2023">May</option>
										</select>	
									</div>
									<div className="flex flex-col gap-1 border-b-2">
										<label className="text-slate-200 text-sm pl-1">Day</label>
										<select name="year" id="year" className="text-slate-500 pr-20">
											<option value="2023">Thursday</option>
										</select>	
									</div>
								</div>
							</div>
							<div className="flex flex-col">
								<label className="text-slate-500 py-2">Gender:</label>
								<div className="flex justify-between">
									<div className="flex items-center gap-12 border-b-2">
										<label className="text-slate-500">Woman</label>
										<input type="radio" name="gender"></input>
									</div>
									<div className="flex items-center gap-20 border-b-2">
										<label className="text-slate-500">Man</label>
										<input type="radio" name="gender"></input>
									</div>
									<div className="flex items-center gap-16 border-b-2">
										<label className="text-slate-500">Custom</label>
										<input type="radio" name="gender"></input>
									</div>
								</div>
							</div>
							<input type="text" className="text-slate-500 focus:cursor-point border-b-2 focus:outline-none focus:border-blue-400" placeholder="Gender" />
							<p className="text-slate-500">By clicking on "Register", you accept our <span className="text-sky-500">Conditions</span>, the  
							<span className="text-sky-500"> Data Policy</span> and the <span className="text-sky-500">Cookies Policy</span>.</p>
						</div>
						<button className="btn bg-[var(--secondary-dialog)] hover:bg-primary border-none text-primary-foreground mt-4">Register</button>
						<button className="btn btn-ghost text-[var(--secondary-dialog)]">Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register;