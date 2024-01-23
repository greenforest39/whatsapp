class ChatAssignmentResponse {
	public assignedUser?: number | null;
	public assignedGroup?: number | null;

	constructor(data: any) {
		if (!data) return;

		this.assignedUser = data.assigned_to_user;
		this.assignedGroup = data.assigned_group;
	}
}

export default ChatAssignmentResponse;
