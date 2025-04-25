export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request123"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};